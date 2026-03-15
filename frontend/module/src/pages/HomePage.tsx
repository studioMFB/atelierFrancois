import { HomeGardenShowcaseSection } from "@/components/home/HomeGardenShowcaseSection";
import { useProducts } from "@/hooks/useProducts";

export function HomePage() {
  const { products, loading, error } = useProducts(true);

  return (
    <div className="page-shell">
      <HomeGardenShowcaseSection
        error={error}
        products={products}
      />
    </div>
  );
}
