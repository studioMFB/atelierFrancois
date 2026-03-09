import type { Product } from "@atelierfrancois/lilwud-sdk";

import { fallbackProducts } from "@/data/catalog";
import { apiClient } from "@/lib/api";

const FALLBACK_MESSAGE =
  "Using local sample product data because the API is not reachable yet.";

export async function listProducts(featured = false): Promise<{
  products: Product[];
  error: string | null;
}> {
  try {
    return {
      products: await apiClient.listProducts(featured),
      error: null,
    };
  } catch {
    return {
      products: featured
        ? fallbackProducts.filter((item) => item.isFeatured)
        : fallbackProducts,
      error: FALLBACK_MESSAGE,
    };
  }
}

export async function getProductBySlug(slug: string): Promise<{
  product: Product | null;
  error: string | null;
}> {
  try {
    return {
      product: await apiClient.getProduct(slug),
      error: null,
    };
  } catch {
    return {
      product: fallbackProducts.find((item) => item.slug === slug) ?? null,
      error: FALLBACK_MESSAGE,
    };
  }
}
