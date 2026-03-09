import type {
  CartItemInput,
  CartQuote,
  PlannerProjectSummary,
  Product,
  User,
} from "@atelierfrancois/lilwud-sdk";

export type AuthStatus = "loading" | "anonymous" | "authenticated";
export type LoadStatus = "idle" | "loading" | "ready" | "error";
export type ProductCollectionKey = "all" | "featured";

export interface LilWudAppConfig {
  apiBaseUrl: string;
}

export interface LilWudPublicState {
  config?: Partial<LilWudAppConfig>;
}

export interface AuthState {
  status: AuthStatus;
  user: User | null;
  accessToken: string | null;
  error: string | null;
}

export interface CartState {
  items: CartItemInput[];
  quote: CartQuote | null;
  isQuoting: boolean;
  error: string | null;
}

export interface CatalogState {
  collections: Record<ProductCollectionKey, Product[]>;
  collectionStatus: Record<ProductCollectionKey, LoadStatus>;
  collectionErrors: Record<ProductCollectionKey, string | null>;
  productsBySlug: Record<string, Product | null>;
  productStatusBySlug: Record<string, LoadStatus | undefined>;
  productErrorsBySlug: Record<string, string | null | undefined>;
}

export interface PlannerProjectsState {
  items: PlannerProjectSummary[];
  status: LoadStatus;
  error: string | null;
}

export interface LilWudAppState {
  config: LilWudAppConfig;
  auth: AuthState;
  cart: CartState;
  catalog: CatalogState;
  plannerProjects: PlannerProjectsState;
}
