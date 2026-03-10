import { useDeferredValue, useState } from "react";

import { WudlingScatter } from "@/components/brand/WudlingScatter";
import { PageSectionHeader } from "@/components/page/PageSectionHeader";
import { ProductCardGrid } from "@/components/shop/ProductCardGrid";
import { ShopFilterBar } from "@/components/shop/ShopFilterBar";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts";

export function ShopPage() {
  const { addItem } = useCart();
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const deferredSearch = useDeferredValue(search);
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const needle = deferredSearch.trim().toLowerCase();
    const matchesSearch =
      !needle ||
      product.name.toLowerCase().includes(needle) ||
      product.description.toLowerCase().includes(needle) ||
      product.tagline.toLowerCase().includes(needle);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-shell">
      {/* <PageSectionHeader
        aside={error ? <p className="muted-copy">{error}</p> : null}
        ornament={<WudlingScatter items={["cap", "plain"]} layout="row" size="sm" />}
        title="Choose pieces individually or plan the full garden first."
      /> */}

      <ShopFilterBar
        categories={categories}
        category={category}
        onCategoryChange={setCategory}
        onSearchChange={setSearch}
        search={search}
      />

      <ProductCardGrid
        emptyState={
          <div className="panel panel--quiet">
            No pieces matched that search. Try a broader term or switch category.
          </div>
        }
        loading={loading}
        onAddToCart={addItem}
        placeholderCount={6}
        products={filteredProducts}
      />
    </div>
  );
}
