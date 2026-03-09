import {
  getProductBySlug,
  listProducts,
} from "@/services/catalog";
import { ACTION_TYPE, type AppDispatch } from "@/store/appReducer";
import type { CatalogService } from "@/store/appContext";
import type {
  LilWudAppState,
  ProductCollectionKey,
} from "@/types/app";

function getCollectionKey(featured?: boolean): ProductCollectionKey {
  return featured ? "featured" : "all";
}

export function useHydratorsCatalog(
  state: LilWudAppState,
  dispatch: AppDispatch,
): CatalogService {
  return {
    async getList(featured = false) {
      const key = getCollectionKey(featured);
      const currentProducts = state.catalog.collections[key];

      if (
        state.catalog.collectionStatus[key] === "ready" &&
        currentProducts.length
      ) {
        return currentProducts;
      }

      dispatch({
        type: ACTION_TYPE.SET_CATALOG_COLLECTION_STATUS,
        payload: { key, status: "loading" },
      });

      const response = await listProducts(featured);

      dispatch({
        type: ACTION_TYPE.SET_CATALOG_COLLECTION,
        payload: {
          key,
          products: response.products,
          error: response.error,
        },
      });

      return response.products;
    },
    async getItem(slug) {
      const cachedStatus = state.catalog.productStatusBySlug[slug];
      if (cachedStatus === "ready" && slug in state.catalog.productsBySlug) {
        return state.catalog.productsBySlug[slug] ?? null;
      }

      dispatch({
        type: ACTION_TYPE.SET_CATALOG_PRODUCT_STATUS,
        payload: { slug, status: "loading" },
      });

      const response = await getProductBySlug(slug);

      dispatch({
        type: ACTION_TYPE.SET_CATALOG_PRODUCT,
        payload: {
          slug,
          product: response.product,
          error: response.error,
        },
      });

      return response.product;
    },
  };
}
