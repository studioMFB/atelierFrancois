import type { Product } from "@atelierfrancois/lilwud-sdk";
import { Link } from "react-router-dom";

import type { ProductPresentation } from "@/data/productPresentation";

interface ProductDetailSummaryProps {
  product: Product;
  presentation: ProductPresentation;
  error: string | null;
  onAddToCart: (productId: number) => void;
}

export function ProductDetailSummary({
  product,
  presentation,
  error,
  onAddToCart,
}: ProductDetailSummaryProps) {
  return (
    <div className="panel product-detail-summary">
      <p className="eyebrow">{product.category}</p>
      <h1>{product.name}</h1>
      <p className="lede">{product.tagline}</p>
      <p>{product.description}</p>
      {error ? <p className="muted-copy">{error}</p> : null}

      <div className="product-price-strip">
        <strong>£{product.price.toFixed(0)}</strong>
        <span>{presentation.leadTime}</span>
      </div>

      <div className="button-row">
        <button className="primary-button" onClick={() => onAddToCart(product.id)} type="button">
          Add to basket
        </button>
        <Link className="ghost-button" to={`/planner?asset=${product.plannerAssetKey}`}>
          Place in planner
        </Link>
      </div>

      <dl className="product-spec-grid">
        <div>
          <dt>Dimensions</dt>
          <dd>{presentation.dimensions}</dd>
        </div>
        <div>
          <dt>Material</dt>
          <dd>{presentation.material}</dd>
        </div>
        <div>
          <dt>Finish</dt>
          <dd>{presentation.finish}</dd>
        </div>
        <div>
          <dt>Lead time</dt>
          <dd>{presentation.leadTime}</dd>
        </div>
      </dl>
    </div>
  );
}
