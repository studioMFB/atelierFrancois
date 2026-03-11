import type { ReactNode } from "react";
import type { Product } from "@atelierfrancois/lilwud-sdk";

import { ProductCard } from "@/components/shop/ProductCard";

interface ProductCardGridProps {
  products: Product[];
  loading: boolean;
  onAddToCart: (productId: number) => void;
  placeholderCount?: number;
  emptyState?: ReactNode;
  variant?: "full" | "short";
}

export function ProductCardGrid({
  products,
  loading,
  onAddToCart,
  placeholderCount = 3,
  emptyState,
  variant = "full",
}: ProductCardGridProps) {
  if (loading) {
    return (
      <div className="product-grid">
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <div className="product-card product-card--placeholder" key={index} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return <div className="product-grid">{emptyState ?? <div className="panel panel--quiet">No pieces found.</div>}</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} onAddToCart={onAddToCart} product={product} variant={variant} />
      ))}
    </div>
  );
}
