import type {
  CartItemInput,
  PlannerProject,
  PlannerProjectPayload,
  PlannerProjectSummary,
  Product,
} from "@atelierfrancois/lilwud-sdk";
import { createContext, useContext } from "react";

import type { AppDispatch } from "@/store/appReducer";
import type { LilWudAppState } from "@/types/app";

export interface AuthService {
  login: (input: { email: string; password: string }) => Promise<void>;
  register: (input: {
    email: string;
    password: string;
    displayName: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

export interface CartService {
  addItem: (productId: number) => void;
  addItems: (items: CartItemInput[]) => void;
  setQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  clear: () => void;
}

export interface CatalogService {
  getList: (featured?: boolean) => Promise<Product[]>;
  getItem: (slug: string) => Promise<Product | null>;
}

export interface PlannerProjectService {
  getList: () => Promise<PlannerProjectSummary[]>;
  getItem: (id: number) => Promise<PlannerProject>;
  saveItem: (
    payload: PlannerProjectPayload,
    projectId?: number | null,
  ) => Promise<PlannerProject>;
  deleteItem: (id: number) => Promise<void>;
}

export interface AppServices {
  auth: AuthService;
  cart: CartService;
  catalog: CatalogService;
  plannerProjects: PlannerProjectService;
}

export interface AppContextValue extends LilWudAppState {
  dispatch: AppDispatch;
  services: AppServices;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider.");
  }

  return context;
}
