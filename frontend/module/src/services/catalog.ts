import type { Product } from "@atelierfrancois/lilwud-sdk";

import { fallbackProducts } from "@/data/catalog";
import { apiClient } from "@/lib/api";

const FALLBACK_MESSAGE = "Showing the local catalog while the live product data is unavailable.";

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
      error: null,
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
