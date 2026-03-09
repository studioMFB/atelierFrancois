import Fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import cors from "@fastify/cors";

import { createAccessToken, hashPassword, hashToken, verifyPassword } from "./auth.js";
import { config } from "./config.js";
import {
  db,
  type DbPlannerProject,
  type DbProduct,
  type DbUser,
} from "./database.js";

declare module "fastify" {
  interface FastifyRequest {
    currentUser?: DbUser;
    currentSessionTokenHash?: string;
  }
}

type AuthBody = {
  email?: unknown;
  password?: unknown;
  displayName?: unknown;
};

type PlannerBody = {
  name?: unknown;
  summary?: unknown;
  surfaceTheme?: unknown;
  width?: unknown;
  depth?: unknown;
  sceneJson?: unknown;
};

type CartBody = {
  items?: Array<{
    productId?: unknown;
    quantity?: unknown;
  }>;
};

type SessionLookupRow = {
  user_id: number;
  email: string;
  display_name: string;
  password_hash: string;
  created_utc: string;
  token_hash: string;
};

const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: true,
  credentials: true,
});

app.addHook("onRequest", async (request) => {
  const authorization = request.headers.authorization;
  if (!authorization?.startsWith("Bearer ")) {
    return;
  }

  const token = authorization.slice("Bearer ".length).trim();
  if (!token) {
    return;
  }

  const current = db
    .prepare(
      `
        SELECT
          u.id AS user_id,
          u.email AS email,
          u.display_name AS display_name,
          u.password_hash AS password_hash,
          u.created_utc AS created_utc,
          s.token_hash AS token_hash
        FROM auth_sessions s
        INNER JOIN user_accounts u ON u.id = s.user_account_id
        WHERE s.token_hash = ? AND s.expires_at_utc > ?
      `,
    )
    .get(hashToken(token), new Date().toISOString()) as SessionLookupRow | undefined;

  if (!current) {
    return;
  }

  request.currentUser = {
    id: current.user_id,
    email: current.email,
    display_name: current.display_name,
    password_hash: current.password_hash,
    created_utc: current.created_utc,
  };
  request.currentSessionTokenHash = current.token_hash;
});

app.get("/health", async () => {
  return {
    service: "LilWud.API",
    utc: new Date().toISOString(),
  };
});

app.post<{ Body: AuthBody }>("/api/auth/register", async (request, reply) => {
  const body: AuthBody = request.body ?? {};
  const email = normalizeEmail(body.email);
  const password = asTrimmedString(body.password);
  const displayName = asTrimmedString(body.displayName);

  if (!email || !displayName || password.length < 8) {
    return reply.status(400).send({
      message: "Provide a valid email, display name, and a password with at least 8 characters.",
    });
  }

  const existing = db
    .prepare("SELECT id FROM user_accounts WHERE email = ?")
    .get(email) as { id: number } | undefined;

  if (existing) {
    return reply.status(409).send({
      message: "An account already exists for this email address.",
    });
  }

  const createdUtc = new Date().toISOString();
  const result = db
    .prepare(
      `
        INSERT INTO user_accounts (email, display_name, password_hash, created_utc)
        VALUES (?, ?, ?, ?)
      `,
    )
    .run(email, displayName, hashPassword(password), createdUtc);

  const user = db
    .prepare(
      "SELECT id, email, display_name, password_hash, created_utc FROM user_accounts WHERE id = ?",
    )
    .get(result.lastInsertRowid) as DbUser;

  const auth = createSession(user.id);
  return reply.status(201).send({
    user: toUserDto(user),
    accessToken: auth.accessToken,
    expiresAtUtc: auth.expiresAtUtc,
  });
});

app.post<{ Body: AuthBody }>("/api/auth/login", async (request, reply) => {
  const body: AuthBody = request.body ?? {};
  const email = normalizeEmail(body.email);
  const password = asTrimmedString(body.password);

  const user = db
    .prepare(
      "SELECT id, email, display_name, password_hash, created_utc FROM user_accounts WHERE email = ?",
    )
    .get(email) as DbUser | undefined;

  if (!user || !verifyPassword(password, user.password_hash)) {
    return reply.status(401).send({
      message: "Email or password is incorrect.",
    });
  }

  const auth = createSession(user.id);
  return {
    user: toUserDto(user),
    accessToken: auth.accessToken,
    expiresAtUtc: auth.expiresAtUtc,
  };
});

app.get("/api/auth/me", async (request, reply) => {
  const user = requireUser(request, reply);
  if (!user) {
    return;
  }

  return toUserDto(user);
});

app.post("/api/auth/logout", async (request, reply) => {
  if (request.currentSessionTokenHash) {
    db.prepare("DELETE FROM auth_sessions WHERE token_hash = ?").run(
      request.currentSessionTokenHash,
    );
  }

  return reply.status(204).send();
});

app.get<{ Querystring: { featured?: string } }>(
  "/api/products",
  async (request) => {
    const featuredOnly = request.query.featured === "true";
    const products = (featuredOnly
      ? db
          .prepare(
            `
              SELECT id, slug, name, tagline, category, description, price, image_key, planner_asset_key, is_featured
              FROM products
              WHERE is_featured = 1
              ORDER BY category, name
            `,
          )
          .all()
      : db
          .prepare(
            `
              SELECT id, slug, name, tagline, category, description, price, image_key, planner_asset_key, is_featured
              FROM products
              ORDER BY category, name
            `,
          )
          .all()) as DbProduct[];

    return products.map(toProductDto);
  },
);

app.get<{ Params: { slug: string } }>("/api/products/:slug", async (request, reply) => {
  const product = db
    .prepare(
      `
        SELECT id, slug, name, tagline, category, description, price, image_key, planner_asset_key, is_featured
        FROM products
        WHERE slug = ?
      `,
    )
    .get(request.params.slug) as DbProduct | undefined;

  if (!product) {
    return reply.status(404).send({ message: "Product not found." });
  }

  return toProductDto(product);
});

app.post<{ Body: CartBody }>("/api/cart/quote", async (request, reply) => {
  const body: CartBody = request.body ?? {};
  const inputItems = Array.isArray(body.items) ? body.items : [];

  const aggregated = new Map<number, number>();
  for (const item of inputItems) {
    const productId = Number(item.productId);
    const quantity = Number(item.quantity);

    if (!Number.isInteger(productId) || !Number.isInteger(quantity) || quantity <= 0) {
      continue;
    }

    aggregated.set(productId, (aggregated.get(productId) ?? 0) + quantity);
  }

  const ids = [...aggregated.keys()];
  if (!ids.length) {
    return {
      lines: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
    };
  }

  const placeholders = ids.map(() => "?").join(", ");
  const products = db
    .prepare(
      `
        SELECT id, slug, name, tagline, category, description, price, image_key, planner_asset_key, is_featured
        FROM products
        WHERE id IN (${placeholders})
      `,
    )
    .all(...ids) as DbProduct[];

  if (products.length !== ids.length) {
    return reply.status(400).send({
      message: "Some products could not be priced.",
    });
  }

  const lines = products
    .map((product) => {
      const quantity = aggregated.get(product.id) ?? 0;
      const unitPrice = Number(product.price);
      return {
        productId: product.id,
        name: product.name,
        quantity,
        unitPrice,
        lineTotal: unitPrice * quantity,
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));

  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const shipping = subtotal >= 350 ? 0 : 24;

  return {
    lines,
    subtotal,
    shipping,
    total: subtotal + shipping,
  };
});

app.get("/api/planner-projects", async (request, reply) => {
  const user = requireUser(request, reply);
  if (!user) {
    return;
  }

  const projects = db
    .prepare(
      `
        SELECT id, user_account_id, name, summary, surface_theme, width, depth, scene_json, created_utc, updated_utc
        FROM planner_projects
        WHERE user_account_id = ?
        ORDER BY updated_utc DESC
      `,
    )
    .all(user.id) as DbPlannerProject[];

  return projects.map(toPlannerProjectSummaryDto);
});

app.get<{ Params: { id: string } }>(
  "/api/planner-projects/:id",
  async (request, reply) => {
    const user = requireUser(request, reply);
    if (!user) {
      return;
    }

    const id = Number(request.params.id);
    const project = db
      .prepare(
        `
          SELECT id, user_account_id, name, summary, surface_theme, width, depth, scene_json, created_utc, updated_utc
          FROM planner_projects
          WHERE id = ? AND user_account_id = ?
        `,
      )
      .get(id, user.id) as DbPlannerProject | undefined;

    if (!project) {
      return reply.status(404).send({ message: "Planner project not found." });
    }

    return toPlannerProjectDetailDto(project);
  },
);

app.post<{ Body: PlannerBody }>("/api/planner-projects", async (request, reply) => {
  const user = requireUser(request, reply);
  if (!user) {
    return;
  }

  const body: PlannerBody = request.body ?? {};
  const project = parsePlannerPayload(body);
  if (!project.ok) {
    return reply.status(400).send({ message: project.message });
  }

  const createdUtc = new Date().toISOString();
  const result = db
    .prepare(
      `
        INSERT INTO planner_projects (
          user_account_id,
          name,
          summary,
          surface_theme,
          width,
          depth,
          scene_json,
          created_utc,
          updated_utc
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
    )
    .run(
      user.id,
      project.value.name,
      project.value.summary,
      project.value.surfaceTheme,
      project.value.width,
      project.value.depth,
      project.value.sceneJson,
      createdUtc,
      createdUtc,
    );

  const created = db
    .prepare(
      `
        SELECT id, user_account_id, name, summary, surface_theme, width, depth, scene_json, created_utc, updated_utc
        FROM planner_projects
        WHERE id = ?
      `,
    )
    .get(result.lastInsertRowid) as DbPlannerProject;

  return reply.status(201).send(toPlannerProjectDetailDto(created));
});

app.put<{ Params: { id: string }; Body: PlannerBody }>(
  "/api/planner-projects/:id",
  async (request, reply) => {
    const user = requireUser(request, reply);
    if (!user) {
      return;
    }

    const id = Number(request.params.id);
    const existing = db
      .prepare(
        `
          SELECT id, user_account_id, name, summary, surface_theme, width, depth, scene_json, created_utc, updated_utc
          FROM planner_projects
          WHERE id = ? AND user_account_id = ?
        `,
      )
      .get(id, user.id) as DbPlannerProject | undefined;

    if (!existing) {
      return reply.status(404).send({ message: "Planner project not found." });
    }

    const body: PlannerBody = request.body ?? {};
    const project = parsePlannerPayload(body);
    if (!project.ok) {
      return reply.status(400).send({ message: project.message });
    }

    const updatedUtc = new Date().toISOString();
    db.prepare(
      `
        UPDATE planner_projects
        SET
          name = ?,
          summary = ?,
          surface_theme = ?,
          width = ?,
          depth = ?,
          scene_json = ?,
          updated_utc = ?
        WHERE id = ? AND user_account_id = ?
      `,
    ).run(
      project.value.name,
      project.value.summary,
      project.value.surfaceTheme,
      project.value.width,
      project.value.depth,
      project.value.sceneJson,
      updatedUtc,
      id,
      user.id,
    );

    const updated = db
      .prepare(
        `
          SELECT id, user_account_id, name, summary, surface_theme, width, depth, scene_json, created_utc, updated_utc
          FROM planner_projects
          WHERE id = ? AND user_account_id = ?
        `,
      )
      .get(id, user.id) as DbPlannerProject;

    return toPlannerProjectDetailDto(updated);
  },
);

app.delete<{ Params: { id: string } }>(
  "/api/planner-projects/:id",
  async (request, reply) => {
    const user = requireUser(request, reply);
    if (!user) {
      return;
    }

    const id = Number(request.params.id);
    const result = db
      .prepare("DELETE FROM planner_projects WHERE id = ? AND user_account_id = ?")
      .run(id, user.id);

    if (!result.changes) {
      return reply.status(404).send({ message: "Planner project not found." });
    }

    return reply.status(204).send();
  },
);

app.setErrorHandler((error, _request, reply) => {
  app.log.error(error);
  return reply.status(500).send({
    message: "An unexpected server error occurred.",
  });
});

await app.listen({
  host: config.host,
  port: config.port,
});

function normalizeEmail(value: unknown) {
  const email = asTrimmedString(value).toLowerCase();
  return email.includes("@") ? email : "";
}

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function requireUser(request: FastifyRequest, reply: FastifyReply) {
  if (!request.currentUser) {
    void reply.status(401).send({
      message: "Unauthorized.",
    });
    return undefined;
  }

  return request.currentUser;
}

function createSession(userId: number) {
  const accessToken = createAccessToken();
  const tokenHash = hashToken(accessToken);
  const now = new Date();
  const expiresAt = new Date(now);
  expiresAt.setDate(expiresAt.getDate() + config.sessionTtlDays);

  db.prepare(
    `
      INSERT INTO auth_sessions (
        user_account_id,
        token_hash,
        created_utc,
        expires_at_utc
      ) VALUES (?, ?, ?, ?)
    `,
  ).run(userId, tokenHash, now.toISOString(), expiresAt.toISOString());

  return {
    accessToken,
    expiresAtUtc: expiresAt.toISOString(),
  };
}

function toUserDto(user: DbUser) {
  return {
    id: user.id,
    email: user.email,
    displayName: user.display_name,
    createdUtc: user.created_utc,
  };
}

function toProductDto(product: DbProduct) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    tagline: product.tagline,
    category: product.category,
    description: product.description,
    price: Number(product.price),
    imageKey: product.image_key,
    plannerAssetKey: product.planner_asset_key,
    isFeatured: Boolean(product.is_featured),
  };
}

function toPlannerProjectSummaryDto(project: DbPlannerProject) {
  return {
    id: project.id,
    name: project.name,
    summary: project.summary,
    surfaceTheme: project.surface_theme,
    width: Number(project.width),
    depth: Number(project.depth),
    createdUtc: project.created_utc,
    updatedUtc: project.updated_utc,
  };
}

function toPlannerProjectDetailDto(project: DbPlannerProject) {
  return {
    ...toPlannerProjectSummaryDto(project),
    sceneJson: project.scene_json,
  };
}

function parsePlannerPayload(body: PlannerBody) {
  const name = asTrimmedString(body.name);
  const summary = asTrimmedString(body.summary);
  const surfaceTheme = asTrimmedString(body.surfaceTheme);
  const width = Number(body.width);
  const depth = Number(body.depth);
  const sceneJson = typeof body.sceneJson === "string" ? body.sceneJson : "";

  if (!name || name.length > 160) {
    return {
      ok: false as const,
      message: "Provide a project name with up to 160 characters.",
    };
  }

  if (summary.length > 320) {
    return {
      ok: false as const,
      message: "Project summary must be 320 characters or fewer.",
    };
  }

  if (!surfaceTheme) {
    return {
      ok: false as const,
      message: "Surface theme is required.",
    };
  }

  if (!Number.isFinite(width) || !Number.isFinite(depth) || width < 2 || depth < 2 || width > 20 || depth > 20) {
    return {
      ok: false as const,
      message: "Planner surface dimensions must stay between 2m and 20m.",
    };
  }

  if (!sceneJson) {
    return {
      ok: false as const,
      message: "Planner scene data is required.",
    };
  }

  return {
    ok: true as const,
    value: {
      name,
      summary,
      surfaceTheme,
      width,
      depth,
      sceneJson,
    },
  };
}
