import type {
  ApiErrorShape,
  AuthResponse,
  CartItemInput,
  CartQuote,
  PlannerProject,
  PlannerProjectPayload,
  PlannerProjectSummary,
  PlannerScene,
  Product,
  User,
} from "./types";

export class LilWudApiError extends Error {
  status: number;
  payload?: unknown;

  constructor(message: string, status: number, payload?: unknown) {
    super(message);
    this.name = "LilWudApiError";
    this.status = status;
    this.payload = payload;
  }
}

export interface LilWudClientOptions {
  baseUrl: string;
  getAccessToken?: () => string | null;
  onUnauthorized?: () => void;
  fetchImpl?: typeof fetch;
}

interface PlannerProjectResponse {
  id: number;
  name: string;
  summary: string;
  surfaceTheme: string;
  width: number;
  depth: number;
  sceneJson: string;
  createdUtc: string;
  updatedUtc: string;
}

export class LilWudClient {
  private baseUrl: string;
  private getAccessToken?: () => string | null;
  private onUnauthorized?: () => void;
  private fetchImpl: typeof fetch;

  constructor(options: LilWudClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.getAccessToken = options.getAccessToken;
    this.onUnauthorized = options.onUnauthorized;
    this.fetchImpl =
      options.fetchImpl ??
      ((input: RequestInfo | URL, init?: RequestInit) =>
        globalThis.fetch(input, init));
  }

  async register(input: {
    email: string;
    password: string;
    displayName: string;
  }): Promise<AuthResponse> {
    return this.request<AuthResponse>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(input),
    });
  }

  async login(input: { email: string; password: string }): Promise<AuthResponse> {
    return this.request<AuthResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(input),
    });
  }

  async me(): Promise<User> {
    return this.request<User>("/api/auth/me");
  }

  async logout(): Promise<void> {
    await this.request<void>("/api/auth/logout", { method: "POST" });
  }

  async listProducts(featured?: boolean): Promise<Product[]> {
    const query = featured ? "?featured=true" : "";
    return this.request<Product[]>(`/api/products${query}`);
  }

  async getProduct(slug: string): Promise<Product> {
    return this.request<Product>(`/api/products/${slug}`);
  }

  async quoteCart(items: CartItemInput[]): Promise<CartQuote> {
    return this.request<CartQuote>("/api/cart/quote", {
      method: "POST",
      body: JSON.stringify({ items }),
    });
  }

  async listPlannerProjects(): Promise<PlannerProjectSummary[]> {
    return this.request<PlannerProjectSummary[]>("/api/planner-projects");
  }

  async getPlannerProject(id: number): Promise<PlannerProject> {
    const response = await this.request<PlannerProjectResponse>(
      `/api/planner-projects/${id}`,
    );

    return parsePlannerProject(response);
  }

  async createPlannerProject(payload: PlannerProjectPayload): Promise<PlannerProject> {
    const response = await this.request<PlannerProjectResponse>("/api/planner-projects", {
      method: "POST",
      body: JSON.stringify(toPlannerRequest(payload)),
    });

    return parsePlannerProject(response);
  }

  async updatePlannerProject(
    id: number,
    payload: PlannerProjectPayload,
  ): Promise<PlannerProject> {
    const response = await this.request<PlannerProjectResponse>(
      `/api/planner-projects/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(toPlannerRequest(payload)),
      },
    );

    return parsePlannerProject(response);
  }

  async deletePlannerProject(id: number): Promise<void> {
    await this.request<void>(`/api/planner-projects/${id}`, { method: "DELETE" });
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const headers = new Headers(init.headers);
    const token = this.getAccessToken?.();

    if (init.body && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    const response = await this.fetchImpl(`${this.baseUrl}${path}`, {
      ...init,
      headers,
    });

    if (response.status === 204) {
      return undefined as T;
    }

    const text = await response.text();
    const payload = text ? (JSON.parse(text) as ApiErrorShape) : undefined;

    if (!response.ok) {
      if (response.status === 401) {
        this.onUnauthorized?.();
      }

      throw new LilWudApiError(
        payload?.message ?? `Request failed with status ${response.status}.`,
        response.status,
        payload,
      );
    }

    return payload as T;
  }
}

export function createEmptyPlannerScene(
  overrides: Partial<PlannerScene> = {},
): PlannerScene {
  return {
    version: 1,
    surfaceTheme: "moss",
    width: 8,
    depth: 8,
    items: [],
    ...overrides,
  };
}

export function serializePlannerScene(scene: PlannerScene): string {
  return JSON.stringify(scene);
}

export function parsePlannerScene(sceneJson: string): PlannerScene {
  const parsed = JSON.parse(sceneJson) as Partial<PlannerScene>;

  return createEmptyPlannerScene({
    surfaceTheme: parsed.surfaceTheme ?? "moss",
    width: parsed.width ?? 8,
    depth: parsed.depth ?? 8,
    items: parsed.items ?? [],
  });
}

function toPlannerRequest(payload: PlannerProjectPayload) {
  return {
    name: payload.name,
    summary: payload.summary,
    surfaceTheme: payload.scene.surfaceTheme,
    width: payload.scene.width,
    depth: payload.scene.depth,
    sceneJson: serializePlannerScene(payload.scene),
  };
}

function parsePlannerProject(response: PlannerProjectResponse): PlannerProject {
  return {
    id: response.id,
    name: response.name,
    summary: response.summary,
    surfaceTheme: response.surfaceTheme,
    width: response.width,
    depth: response.depth,
    scene: parsePlannerScene(response.sceneJson),
    createdUtc: response.createdUtc,
    updatedUtc: response.updatedUtc,
  };
}
