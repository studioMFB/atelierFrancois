import { HomeFeaturedProductsSection } from "@/components/home/HomeFeaturedProductsSection";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts";

export function HomePage() {
  const { addItem } = useCart();
  const { products, loading, error } = useProducts(true);
  const featuredProducts = loading ? [] : products;

  return (
    <div className="page-shell">
      <HomeHeroSection />
      <HomeFeaturedProductsSection
        error={error}
        loading={loading}
        onAddToCart={addItem}
        products={featuredProducts}
      />
    </div>
  );
}
