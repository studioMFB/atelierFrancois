import type { Product } from "@atelierfrancois/lilwud-sdk";
import { Link } from "react-router-dom";

import { ProductViewer } from "@/components/shop/ProductViewer";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link className={`product-card__art product-card__art--${product.imageKey}`} to={`/shop/${product.slug}`}>
        <span className="product-card__tag">{product.category}</span>
        <ProductViewer assetKey={product.plannerAssetKey} compact preset="garden" />
      </Link>
      <div>
        <p className="eyebrow">{product.tagline}</p>
        <h3>
          <Link to={`/shop/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.description}</p>
        <footer>
          <strong>£{product.price.toFixed(0)}</strong>
          <div className="button-row button-row--compact">
            <Link className="ghost-button" to={`/shop/${product.slug}`}>
              View piece
            </Link>
            <Link className="link-button" to={`/planner?asset=${product.plannerAssetKey}`}>
              Place in planner
            </Link>
            <button className="primary-button" onClick={() => onAddToCart(product.id)} type="button">
              Add to basket
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
}
