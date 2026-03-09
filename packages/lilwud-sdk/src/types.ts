export interface User {
  id: number;
  email: string;
  displayName: string;
  createdUtc: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  expiresAtUtc: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  price: number;
  imageKey: string;
  plannerAssetKey: string;
  isFeatured: boolean;
}

export interface CartItemInput {
  productId: number;
  quantity: number;
}

export interface CartQuoteLine {
  productId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}

export interface CartQuote {
  lines: CartQuoteLine[];
  subtotal: number;
  shipping: number;
  total: number;
}

export type PlannerSurfaceTheme =
  | "moss"
  | "sand"
  | "stone"
  | "mulch";

export interface PlannerItem {
  id: string;
  productId: number | null;
  assetKey: string;
  name: string;
  position: [number, number, number];
  rotationY: number;
  scale: number;
  locked?: boolean;
}

export interface PlannerScene {
  version: 1;
  surfaceTheme: PlannerSurfaceTheme;
  width: number;
  depth: number;
  items: PlannerItem[];
}

export interface PlannerProjectSummary {
  id: number;
  name: string;
  summary: string;
  surfaceTheme: PlannerSurfaceTheme | string;
  width: number;
  depth: number;
  createdUtc: string;
  updatedUtc: string;
}

export interface PlannerProject extends PlannerProjectSummary {
  scene: PlannerScene;
}

export interface PlannerProjectPayload {
  name: string;
  summary: string;
  scene: PlannerScene;
}

export interface ApiErrorShape {
  message?: string;
  [key: string]: unknown;
}
