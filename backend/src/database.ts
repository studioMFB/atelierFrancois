import fs from "node:fs";
import path from "node:path";

import Database from "better-sqlite3";

import { config } from "./config.js";

type ProductSeed = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  price: number;
  imageKey: string;
  plannerAssetKey: string;
  isFeatured: number;
};

const productSeeds: ProductSeed[] = [
  {
    slug: "mori-bench",
    name: "Mori Bench",
    tagline: "Low, calm seating for slow afternoon play.",
    category: "Seating",
    description:
      "A handmade cedar bench with softened corners and a generous seat for parents, books, and muddy boots.",
    price: 189,
    imageKey: "mori-bench",
    plannerAssetKey: "mori-bench",
    isFeatured: 1,
  },
  {
    slug: "atelier-table",
    name: "Sketch Table",
    tagline: "A quiet worktable for chalk, leaves, and snacks.",
    category: "Tables",
    description:
      "Solid oak planks, rounded edges, and a weather-ready finish sized for shared making outdoors.",
    price: 249,
    imageKey: "atelier-table",
    plannerAssetKey: "atelier-table",
    isFeatured: 1,
  },
  {
    slug: "nest-reading-nook",
    name: "Nest Reading Nook",
    tagline: "A covered corner for stories and small imaginations.",
    category: "Play",
    description:
      "A sheltered daybed nook with sliding book caddies and a soft roof profile inspired by garden pavilions.",
    price: 529,
    imageKey: "nest-reading-nook",
    plannerAssetKey: "nest-reading-nook",
    isFeatured: 1,
  },
  {
    slug: "sprout-planter-cart",
    name: "Sprout Planter Cart",
    tagline: "A rolling planter and storage tray for tiny gardeners.",
    category: "Storage",
    description:
      "Part planter, part toy cart, with a timber frame that keeps trowels and seed packets close by.",
    price: 149,
    imageKey: "sprout-planter-cart",
    plannerAssetKey: "sprout-planter-cart",
    isFeatured: 0,
  },
  {
    slug: "cloud-lookout",
    name: "Cloud Lookout",
    tagline: "A compact climbing perch with a gentle silhouette.",
    category: "Play",
    description:
      "A small elevated platform with ladder steps and rounded side rails for open-ended garden play.",
    price: 639,
    imageKey: "cloud-lookout",
    plannerAssetKey: "cloud-lookout",
    isFeatured: 1,
  },
  {
    slug: "picnic-island",
    name: "Picnic Island",
    tagline: "One piece that moves between craft time and supper.",
    category: "Tables",
    description:
      "A communal picnic set with integrated benches and a broad tabletop made for shared outdoor rituals.",
    price: 389,
    imageKey: "picnic-island",
    plannerAssetKey: "picnic-island",
    isFeatured: 0,
  },
];

export type DbUser = {
  id: number;
  email: string;
  display_name: string;
  password_hash: string;
  created_utc: string;
};

export type DbSession = {
  id: number;
  user_account_id: number;
  token_hash: string;
  created_utc: string;
  expires_at_utc: string;
};

export type DbProduct = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  price: number;
  image_key: string;
  planner_asset_key: string;
  is_featured: number;
};

export type DbPlannerProject = {
  id: number;
  user_account_id: number;
  name: string;
  summary: string;
  surface_theme: string;
  width: number;
  depth: number;
  scene_json: string;
  created_utc: string;
  updated_utc: string;
};

export type DbAuthedSession = DbSession & DbUser;

const appDataDirectory = path.dirname(config.databasePath);
fs.mkdirSync(appDataDirectory, { recursive: true });

export const db = new Database(config.databasePath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    tagline TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL,
    image_key TEXT NOT NULL,
    planner_asset_key TEXT NOT NULL,
    is_featured INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS user_accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    display_name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_utc TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS auth_sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_account_id INTEGER NOT NULL,
    token_hash TEXT NOT NULL UNIQUE,
    created_utc TEXT NOT NULL,
    expires_at_utc TEXT NOT NULL,
    FOREIGN KEY(user_account_id) REFERENCES user_accounts(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS planner_projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_account_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    summary TEXT NOT NULL,
    surface_theme TEXT NOT NULL,
    width REAL NOT NULL,
    depth REAL NOT NULL,
    scene_json TEXT NOT NULL,
    created_utc TEXT NOT NULL,
    updated_utc TEXT NOT NULL,
    FOREIGN KEY(user_account_id) REFERENCES user_accounts(id) ON DELETE CASCADE
  );

  CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
  CREATE INDEX IF NOT EXISTS idx_users_email ON user_accounts(email);
  CREATE INDEX IF NOT EXISTS idx_sessions_token_hash ON auth_sessions(token_hash);
  CREATE INDEX IF NOT EXISTS idx_projects_user_updated ON planner_projects(user_account_id, updated_utc);
`);

const upsertProduct = db.prepare(`
  INSERT INTO products (
    slug,
    name,
    tagline,
    category,
    description,
    price,
    image_key,
    planner_asset_key,
    is_featured
  ) VALUES (
    @slug,
    @name,
    @tagline,
    @category,
    @description,
    @price,
    @imageKey,
    @plannerAssetKey,
    @isFeatured
  )
  ON CONFLICT(slug) DO UPDATE SET
    name = excluded.name,
    tagline = excluded.tagline,
    category = excluded.category,
    description = excluded.description,
    price = excluded.price,
    image_key = excluded.image_key,
    planner_asset_key = excluded.planner_asset_key,
    is_featured = excluded.is_featured
`);

const syncProducts = db.transaction((items: ProductSeed[]) => {
  for (const item of items) {
    upsertProduct.run({
      slug: item.slug,
      name: item.name,
      tagline: item.tagline,
      category: item.category,
      description: item.description,
      price: item.price,
      imageKey: item.imageKey,
      plannerAssetKey: item.plannerAssetKey,
      isFeatured: item.isFeatured,
    });
  }
});

syncProducts(productSeeds);
