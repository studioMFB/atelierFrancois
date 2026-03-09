import type { Product } from "@atelierfrancois/lilwud-sdk";

import { WudlingScatter } from "@/components/brand/WudlingScatter";
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
        <div className="section-header__copy">
          <p className="eyebrow">Featured pieces</p>
          <h2>Start with the best-selling family setups.</h2>
        </div>
        <div className="section-header__aside">
          <WudlingScatter items={["plain", "cap", "beanie"]} layout="row" size="sm" />
          {error ? <p className="muted-copy">{error}</p> : null}
        </div>
      </div>
      <ProductCardGrid loading={loading} onAddToCart={onAddToCart} placeholderCount={3} products={products} />
    </section>
  );
}
