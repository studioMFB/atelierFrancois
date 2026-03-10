import { Link } from "react-router-dom";

import { fallbackProducts } from "@/data/catalog";
import { useCart } from "@/hooks/useCart";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, quote, isQuoting, setQuantity, removeItem, clear } = useCart();
  const productsById = new Map(fallbackProducts.map((product) => [product.id, product]));
  const displayLines = items.map((item) => {
    const quotedLine = quote?.lines.find((line) => line.productId === item.productId);
    const product = productsById.get(item.productId);
    const quantity = quotedLine?.quantity ?? item.quantity;
    const unitPrice = quotedLine?.unitPrice ?? product?.price ?? 0;

    return {
      productId: item.productId,
      name: quotedLine?.name ?? product?.name ?? `Piece ${item.productId}`,
      quantity,
      unitPrice,
      lineTotal: quotedLine?.lineTotal ?? unitPrice * quantity,
      slug: product?.slug,
    };
  });
  const fallbackSubtotal = displayLines.reduce((sum, line) => sum + line.lineTotal, 0);
  const fallbackShipping = displayLines.length ? 28 : 0;
  const subtotal = quote?.subtotal ?? fallbackSubtotal;
  const shipping = quote?.shipping ?? fallbackShipping;
  const total = quote?.total ?? subtotal + shipping;

  return (
    <aside className={`cart-drawer ${open ? "cart-drawer--open" : ""}`}>
      <div className="cart-drawer__overlay" onClick={onClose} />
      <div className="cart-drawer__panel">
        <header>
          <div>
            <p className="eyebrow">Basket</p>
          </div>
          <button className="ghost-button" onClick={onClose} type="button">
            &#x2715;
          </button>
        </header>

        {!items.length ? (
          <div className="panel panel--quiet">
            <p className="eyebrow">Empty for now</p>
            <p>Pick pieces from the shop or planner and they will appear here.</p>
          </div>
        ) : (
          <div className="cart-lines">
            {displayLines.map((line) => (
              <article className="cart-line" key={line.productId}>
                <div>
                  {line.slug ? (
                    <Link onClick={onClose} to={`/shop/${line.slug}`}>
                      {line.name}
                    </Link>
                  ) : (
                    <strong>{line.name}</strong>
                  )}
                  <p>
                    £{line.unitPrice.toFixed(0)} each
                  </p>
                </div>
                <footer>
                  <button
                    className="ghost-button"
                    onClick={() => setQuantity(line.productId, line.quantity - 1)}
                    type="button"
                  >
                    -
                  </button>
                  <span>{line.quantity}</span>
                  <button
                    className="ghost-button"
                    onClick={() => setQuantity(line.productId, line.quantity + 1)}
                    type="button"
                  >
                    +
                  </button>
                  <button
                    className="link-button"
                    onClick={() => removeItem(line.productId)}
                    type="button"
                  >
                    Remove
                  </button>
                </footer>
              </article>
            ))}
          </div>
        )}

        <footer>
          {!quote && items.length ? (
            <p className="muted-copy">
              Showing local catalog prices while the live quote is unavailable.
            </p>
          ) : null}
          <dl className="price-stack">
            <div>
              <dt>Subtotal</dt>
              <dd>{`£${subtotal.toFixed(0)}`}</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>{quote ? `£${shipping.toFixed(0)}` : `£${shipping.toFixed(0)} estimate`}</dd>
            </div>
            <div className="price-stack__total">
              <dt>Total</dt>
              <dd>{`£${total.toFixed(0)}`}</dd>
            </div>
          </dl>
          <button className="primary-button" type="button" disabled={!items.length || isQuoting}>
            {isQuoting ? "Refreshing quote..." : "Checkout planning"}
          </button>
          <button className="link-button" onClick={clear} type="button">
            Clear basket
          </button>
        </footer>
      </div>
    </aside>
  );
}
