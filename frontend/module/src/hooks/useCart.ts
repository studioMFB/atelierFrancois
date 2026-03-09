import { useAppContext } from "@/store/appContext";

export function useCart() {
  const { cart, services } = useAppContext();

  return {
    addItem: services.cart.addItem,
    addItems: services.cart.addItems,
    clear: services.cart.clear,
    isQuoting: cart.isQuoting,
    items: cart.items,
    quote: cart.quote,
    removeItem: services.cart.removeItem,
    setQuantity: services.cart.setQuantity,
  };
}
