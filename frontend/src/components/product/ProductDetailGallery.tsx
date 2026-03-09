import type { Product } from "@atelierfrancois/lilwud-sdk";

import { ProductViewer, type ProductViewerPreset } from "@/components/shop/ProductViewer";
import type { ProductPresentation } from "@/data/productPresentation";

interface ProductDetailGalleryProps {
  product: Product;
  presentation: ProductPresentation;
  activePreset: ProductViewerPreset;
  onPresetChange: (preset: ProductViewerPreset) => void;
}

export function ProductDetailGallery({
  product,
  presentation,
  activePreset,
  onPresetChange,
}: ProductDetailGalleryProps) {
  return (
    <div className="panel product-detail-gallery">
      <div className="product-detail-gallery__header">
        <p className="eyebrow">Interactive view</p>
        <span className="pill">Drag to orbit</span>
      </div>
      <div className="product-detail-gallery__viewer">
        <ProductViewer assetKey={product.plannerAssetKey} interactive preset={activePreset} />
      </div>
      <div className="product-lookbook">
        {presentation.lookbook.map((scene) => (
          <button
            className={`product-lookbook__card ${activePreset === scene.preset ? "product-lookbook__card--active" : ""}`}
            key={scene.label}
            onClick={() => onPresetChange(scene.preset)}
            type="button"
          >
            <div className="product-lookbook__thumb">
              <ProductViewer assetKey={product.plannerAssetKey} compact preset={scene.preset} />
            </div>
            <strong>{scene.label}</strong>
            <small>{scene.title}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
