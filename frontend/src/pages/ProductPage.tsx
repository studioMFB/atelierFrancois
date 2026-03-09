import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { PageMessagePanel } from "@/components/page/PageMessagePanel";
import { ProductDetailGallery } from "@/components/product/ProductDetailGallery";
import { ProductDetailSummary } from "@/components/product/ProductDetailSummary";
import { ProductStoryPanels } from "@/components/product/ProductStoryPanels";
import type { ProductViewerPreset } from "@/components/shop/ProductViewer";
import { getProductPresentation } from "@/data/productPresentation";
import { useCart } from "@/hooks/useCart";
import { useProduct } from "@/hooks/useProduct";

export function ProductPage() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const { product, loading, error } = useProduct(slug);
  const presentation = product ? getProductPresentation(product) : null;
  const [activePreset, setActivePreset] = useState<ProductViewerPreset>("studio");

  useEffect(() => {
    setActivePreset("studio");
  }, [product?.id]);

  if (loading && !product) {
    return (
      <div className="page-shell">
        <PageMessagePanel eyebrow="Loading piece" title="Preparing the product presentation..." />
      </div>
    );
  }

  if (!product || !presentation) {
    return (
      <div className="page-shell">
        <PageMessagePanel eyebrow="Not found" title="That furniture piece could not be found.">
          <Link className="primary-button" to="/shop">
            Back to shop
          </Link>
        </PageMessagePanel>
      </div>
    );
  }

  return (
    <div className="page-shell product-page">
      <section className="product-detail-hero">
        <ProductDetailGallery
          activePreset={activePreset}
          onPresetChange={setActivePreset}
          presentation={presentation}
          product={product}
        />
        <ProductDetailSummary
          error={error}
          onAddToCart={addItem}
          presentation={presentation}
          product={product}
        />
      </section>
      <ProductStoryPanels presentation={presentation} />
    </div>
  );
}
