import type {
  CartItemInput,
  CartQuote,
  PlannerProjectSummary,
  Product,
  User,
} from "@atelierfrancois/lilwud-sdk";
import type { Dispatch } from "react";

import type {
  AuthStatus,
  LilWudAppConfig,
  LilWudAppState,
  LoadStatus,
  ProductCollectionKey,
} from "@/types/app";

export const AUTH_SESSION_STORAGE_KEY = "lil-wud.session";
export const AUTH_LEGACY_STORAGE_KEY = "atelier-francois.session";
export const CART_STORAGE_KEY = "lil-wud.cart";
export const CART_LEGACY_STORAGE_KEY = "atelier-francois.cart";

function readStorageValue(primaryKey: string, legacyKey: string) {
  const nextValue = window.localStorage.getItem(primaryKey);
  if (nextValue) {
    return nextValue;
  }

  const legacyValue = window.localStorage.getItem(legacyKey);
  if (legacyValue) {
    window.localStorage.setItem(primaryKey, legacyValue);
    window.localStorage.removeItem(legacyKey);
  }

  return legacyValue;
}

function readStoredCartItems() {
  const rawItems = readStorageValue(CART_STORAGE_KEY, CART_LEGACY_STORAGE_KEY);
  if (!rawItems) {
    return [];
  }

  try {
    return JSON.parse(rawItems) as CartItemInput[];
  } catch {
    return [];
  }
}

export function createInitialAppState(
  config: LilWudAppConfig,
): LilWudAppState {
  const accessToken = readStorageValue(
    AUTH_SESSION_STORAGE_KEY,
    AUTH_LEGACY_STORAGE_KEY,
  );

  return {
    config,
    auth: {
      status: accessToken ? "loading" : "anonymous",
      user: null,
      accessToken,
      error: null,
    },
    cart: {
      items: readStoredCartItems(),
      quote: null,
      isQuoting: false,
      error: null,
    },
    catalog: {
      collections: {
        all: [],
        featured: [],
      },
      collectionStatus: {
        all: "idle",
        featured: "idle",
      },
      collectionErrors: {
        all: null,
        featured: null,
      },
      productsBySlug: {},
      productStatusBySlug: {},
      productErrorsBySlug: {},
    },
    plannerProjects: {
      items: [],
      status: "idle",
      error: null,
    },
  };
}

export enum ACTION_TYPE {
  SET_CONFIG = "SET_CONFIG",
  SET_AUTH_STATUS = "SET_AUTH_STATUS",
  SET_AUTH_ERROR = "SET_AUTH_ERROR",
  SET_AUTH_SESSION = "SET_AUTH_SESSION",
  CLEAR_AUTH_SESSION = "CLEAR_AUTH_SESSION",
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_CART_QUOTING = "SET_CART_QUOTING",
  SET_CART_QUOTE = "SET_CART_QUOTE",
  SET_CART_ERROR = "SET_CART_ERROR",
  SET_CATALOG_COLLECTION_STATUS = "SET_CATALOG_COLLECTION_STATUS",
  SET_CATALOG_COLLECTION = "SET_CATALOG_COLLECTION",
  SET_CATALOG_PRODUCT_STATUS = "SET_CATALOG_PRODUCT_STATUS",
  SET_CATALOG_PRODUCT = "SET_CATALOG_PRODUCT",
  SET_PLANNER_PROJECTS_STATUS = "SET_PLANNER_PROJECTS_STATUS",
  SET_PLANNER_PROJECTS = "SET_PLANNER_PROJECTS",
  SET_PLANNER_PROJECTS_ERROR = "SET_PLANNER_PROJECTS_ERROR",
  UPSERT_PLANNER_PROJECT_SUMMARY = "UPSERT_PLANNER_PROJECT_SUMMARY",
  REMOVE_PLANNER_PROJECT_SUMMARY = "REMOVE_PLANNER_PROJECT_SUMMARY",
  CLEAR_PLANNER_PROJECTS = "CLEAR_PLANNER_PROJECTS",
}

export type AppAction =
  | { type: ACTION_TYPE.SET_CONFIG; payload: LilWudAppConfig }
  | { type: ACTION_TYPE.SET_AUTH_STATUS; payload: AuthStatus }
  | { type: ACTION_TYPE.SET_AUTH_ERROR; payload: string | null }
  | {
      type: ACTION_TYPE.SET_AUTH_SESSION;
      payload: { accessToken: string; user: User };
    }
  | { type: ACTION_TYPE.CLEAR_AUTH_SESSION }
  | { type: ACTION_TYPE.SET_CART_ITEMS; payload: CartItemInput[] }
  | { type: ACTION_TYPE.SET_CART_QUOTING; payload: boolean }
  | { type: ACTION_TYPE.SET_CART_QUOTE; payload: CartQuote | null }
  | { type: ACTION_TYPE.SET_CART_ERROR; payload: string | null }
  | {
      type: ACTION_TYPE.SET_CATALOG_COLLECTION_STATUS;
      payload: { key: ProductCollectionKey; status: LoadStatus };
    }
  | {
      type: ACTION_TYPE.SET_CATALOG_COLLECTION;
      payload: {
        key: ProductCollectionKey;
        products: Product[];
        error: string | null;
      };
    }
  | {
      type: ACTION_TYPE.SET_CATALOG_PRODUCT_STATUS;
      payload: { slug: string; status: LoadStatus };
    }
  | {
      type: ACTION_TYPE.SET_CATALOG_PRODUCT;
      payload: {
        slug: string;
        product: Product | null;
        error: string | null;
      };
    }
  | { type: ACTION_TYPE.SET_PLANNER_PROJECTS_STATUS; payload: LoadStatus }
  | {
      type: ACTION_TYPE.SET_PLANNER_PROJECTS;
      payload: PlannerProjectSummary[];
    }
  | {
      type: ACTION_TYPE.SET_PLANNER_PROJECTS_ERROR;
      payload: string | null;
    }
  | {
      type: ACTION_TYPE.UPSERT_PLANNER_PROJECT_SUMMARY;
      payload: PlannerProjectSummary;
    }
  | { type: ACTION_TYPE.REMOVE_PLANNER_PROJECT_SUMMARY; payload: number }
  | { type: ACTION_TYPE.CLEAR_PLANNER_PROJECTS };

export type AppDispatch = Dispatch<AppAction>;

export default function appReducer(
  state: LilWudAppState,
  action: AppAction,
): LilWudAppState {
  switch (action.type) {
    case ACTION_TYPE.SET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    case ACTION_TYPE.SET_AUTH_STATUS:
      return {
        ...state,
        auth: {
          ...state.auth,
          status: action.payload,
        },
      };
    case ACTION_TYPE.SET_AUTH_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: action.payload,
        },
      };
    case ACTION_TYPE.SET_AUTH_SESSION:
      return {
        ...state,
        auth: {
          status: "authenticated",
          user: action.payload.user,
          accessToken: action.payload.accessToken,
          error: null,
        },
      };
    case ACTION_TYPE.CLEAR_AUTH_SESSION:
      return {
        ...state,
        auth: {
          status: "anonymous",
          user: null,
          accessToken: null,
          error: null,
        },
      };
    case ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: action.payload,
        },
      };
    case ACTION_TYPE.SET_CART_QUOTING:
      return {
        ...state,
        cart: {
          ...state.cart,
          isQuoting: action.payload,
        },
      };
    case ACTION_TYPE.SET_CART_QUOTE:
      return {
        ...state,
        cart: {
          ...state.cart,
          quote: action.payload,
        },
      };
    case ACTION_TYPE.SET_CART_ERROR:
      return {
        ...state,
        cart: {
          ...state.cart,
          error: action.payload,
        },
      };
    case ACTION_TYPE.SET_CATALOG_COLLECTION_STATUS:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          collectionStatus: {
            ...state.catalog.collectionStatus,
            [action.payload.key]: action.payload.status,
          },
        },
      };
    case ACTION_TYPE.SET_CATALOG_COLLECTION:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          collections: {
            ...state.catalog.collections,
            [action.payload.key]: action.payload.products,
          },
          collectionStatus: {
            ...state.catalog.collectionStatus,
            [action.payload.key]: "ready",
          },
          collectionErrors: {
            ...state.catalog.collectionErrors,
            [action.payload.key]: action.payload.error,
          },
        },
      };
    case ACTION_TYPE.SET_CATALOG_PRODUCT_STATUS:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          productStatusBySlug: {
            ...state.catalog.productStatusBySlug,
            [action.payload.slug]: action.payload.status,
          },
        },
      };
    case ACTION_TYPE.SET_CATALOG_PRODUCT:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          productsBySlug: {
            ...state.catalog.productsBySlug,
            [action.payload.slug]: action.payload.product,
          },
          productStatusBySlug: {
            ...state.catalog.productStatusBySlug,
            [action.payload.slug]: "ready",
          },
          productErrorsBySlug: {
            ...state.catalog.productErrorsBySlug,
            [action.payload.slug]: action.payload.error,
          },
        },
      };
    case ACTION_TYPE.SET_PLANNER_PROJECTS_STATUS:
      return {
        ...state,
        plannerProjects: {
          ...state.plannerProjects,
          status: action.payload,
        },
      };
    case ACTION_TYPE.SET_PLANNER_PROJECTS:
      return {
        ...state,
        plannerProjects: {
          items: action.payload,
          status: "ready",
          error: null,
        },
      };
    case ACTION_TYPE.SET_PLANNER_PROJECTS_ERROR:
      return {
        ...state,
        plannerProjects: {
          ...state.plannerProjects,
          error: action.payload,
        },
      };
    case ACTION_TYPE.UPSERT_PLANNER_PROJECT_SUMMARY: {
      const existingIndex = state.plannerProjects.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      const nextItems = [...state.plannerProjects.items];

      if (existingIndex >= 0) {
        nextItems[existingIndex] = action.payload;
      } else {
        nextItems.unshift(action.payload);
      }

      return {
        ...state,
        plannerProjects: {
          ...state.plannerProjects,
          items: nextItems,
        },
      };
    }
    case ACTION_TYPE.REMOVE_PLANNER_PROJECT_SUMMARY:
      return {
        ...state,
        plannerProjects: {
          ...state.plannerProjects,
          items: state.plannerProjects.items.filter(
            (item) => item.id !== action.payload,
          ),
        },
      };
    case ACTION_TYPE.CLEAR_PLANNER_PROJECTS:
      return {
        ...state,
        plannerProjects: {
          items: [],
          status: "idle",
          error: null,
        },
      };
    default:
      return state;
  }
}
