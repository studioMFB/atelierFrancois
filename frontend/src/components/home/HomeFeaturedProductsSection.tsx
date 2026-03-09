import type { Product } from "@atelierfrancois/lilwud-sdk";

import { ProductCardGrid } from "@/components/shop/ProductCardGrid";

interface HomeFeaturedProductsSectionProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  onAddToCart: (productId: number) => void;
}

export function HomeFeaturedProductsSection({
  products,
  loading,
  error,
  onAddToCart,
}: HomeFeaturedProductsSectionProps) {
  return (
    <section className="section-stack">
      <div className="section-header">
        <div>
          <p className="eyebrow">Featured pieces</p>
          <h2>Start with the best-selling family setups.</h2>
        </div>
        {error ? <p className="muted-copy">{error}</p> : null}
      </div>
      <ProductCardGrid loading={loading} onAddToCart={onAddToCart} placeholderCount={3} products={products} />
    </section>
  );
}
