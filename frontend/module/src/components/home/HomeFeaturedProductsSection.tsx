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
    <section className="section-stack home-featured">
      <div className="section-header">
        <header>
          <h2>Start with the best-selling family setups.</h2>
        </header>
        <aside>
          <WudlingScatter items={["plain", "cap", "beanie"]} layout="row" size="sm" />
          {error ? <p className="muted-copy">{error}</p> : null}
        </aside>
      </div>
      <ProductCardGrid
        loading={loading}
        onAddToCart={onAddToCart}
        placeholderCount={3}
        products={products}
        variant="short"
      />
    </section>
  );
}
