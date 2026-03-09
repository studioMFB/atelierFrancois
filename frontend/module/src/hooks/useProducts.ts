import { useEffect } from "react";

import { useAppContext } from "@/store/appContext";

export function useProducts(featured = false) {
  const { catalog, services } = useAppContext();
  const key = featured ? "featured" : "all";

  useEffect(() => {
    void services.catalog.getList(featured);
  }, [featured]);

  return {
    products: catalog.collections[key],
    loading: catalog.collectionStatus[key] === "loading",
    error: catalog.collectionErrors[key],
  };
}
