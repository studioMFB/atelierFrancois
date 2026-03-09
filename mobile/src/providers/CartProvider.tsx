import AsyncStorage from "@react-native-async-storage/async-storage";
import type { CartItemInput, CartQuote } from "@atelierfrancois/lilwud-sdk";
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

import { apiClient } from "@/api/client";

interface CartContextValue {
  items: CartItemInput[];
  quote: CartQuote | null;
  addItem: (productId: number) => void;
  setQuantity: (productId: number, quantity: number) => void;
  clear: () => void;
}

const STORAGE_KEY = "lil-wud.mobile.cart";
const LEGACY_STORAGE_KEY = "atelier-francois.mobile.cart";

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItemInput[]>([]);
  const [quote, setQuote] = useState<CartQuote | null>(null);

  useEffect(() => {
    let ignore = false;

    async function restore() {
      const primary = await AsyncStorage.getItem(STORAGE_KEY);
      const stored = primary ?? (await AsyncStorage.getItem(LEGACY_STORAGE_KEY));

      if (stored && !primary) {
        await AsyncStorage.setItem(STORAGE_KEY, stored);
        await AsyncStorage.removeItem(LEGACY_STORAGE_KEY);
      }

      if (!ignore && stored) {
        setItems(JSON.parse(stored) as CartItemInput[]);
      }
    }

    void restore();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    void AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));

    if (!items.length) {
      setQuote(null);
      return;
    }

    let ignore = false;

    async function refreshQuote() {
      try {
        const nextQuote = await apiClient.quoteCart(items);
        if (!ignore) {
          setQuote(nextQuote);
        }
      } catch {
        if (!ignore) {
          setQuote(null);
        }
      }
    }

    void refreshQuote();

    return () => {
      ignore = true;
    };
  }, [items]);

  function addItem(productId: number) {
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { productId, quantity: 1 }];
    });
  }

  function setQuantity(productId: number, quantity: number) {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.productId !== productId);
      }

      return current.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      );
    });
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, quote, addItem, setQuantity, clear }}>
      {children}
    </CartContext.Provider>
  );
}
