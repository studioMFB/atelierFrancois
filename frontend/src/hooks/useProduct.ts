import { useEffect } from "react";

import { useAppContext } from "@/store/appContext";

export function useProduct(slug?: string) {
  const { catalog, services } = useAppContext();

  useEffect(() => {
    if (!slug) {
      return;
    }
    void services.catalog.getItem(slug);
  }, [slug]);

  if (!slug) {
    return { product: null, loading: false, error: null };
  }

  return {
    product: catalog.productsBySlug[slug] ?? null,
    loading: catalog.productStatusBySlug[slug] === "loading",
    error: catalog.productErrorsBySlug[slug] ?? null,
  };
}
