import type { CartItemInput } from "@atelierfrancois/lilwud-sdk";
import { useEffect } from "react";

import { quoteCart } from "@/services/cart";
import {
  ACTION_TYPE,
  CART_LEGACY_STORAGE_KEY,
  CART_STORAGE_KEY,
  type AppDispatch,
} from "@/store/appReducer";
import type { CartService } from "@/store/appContext";
import type { LilWudAppState } from "@/types/app";

export function useHydratorsCart(
  state: LilWudAppState,
  dispatch: AppDispatch,
): CartService {
  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart.items));
    window.localStorage.removeItem(CART_LEGACY_STORAGE_KEY);
  }, [state.cart.items]);

  useEffect(() => {
    if (!state.cart.items.length) {
      dispatch({ type: ACTION_TYPE.SET_CART_QUOTE, payload: null });
      dispatch({ type: ACTION_TYPE.SET_CART_ERROR, payload: null });
      dispatch({ type: ACTION_TYPE.SET_CART_QUOTING, payload: false });
      return;
    }

    let ignore = false;

    async function refreshQuote() {
      dispatch({ type: ACTION_TYPE.SET_CART_QUOTING, payload: true });

      try {
        const nextQuote = await quoteCart(state.cart.items);
        if (!ignore) {
          dispatch({ type: ACTION_TYPE.SET_CART_QUOTE, payload: nextQuote });
          dispatch({ type: ACTION_TYPE.SET_CART_ERROR, payload: null });
        }
      } catch (error) {
        if (!ignore) {
          dispatch({ type: ACTION_TYPE.SET_CART_QUOTE, payload: null });
          dispatch({
            type: ACTION_TYPE.SET_CART_ERROR,
            payload: error instanceof Error ? error.message : null,
          });
        }
      } finally {
        if (!ignore) {
          dispatch({ type: ACTION_TYPE.SET_CART_QUOTING, payload: false });
        }
      }
    }

    void refreshQuote();

    return () => {
      ignore = true;
    };
  }, [dispatch, state.cart.items]);

  function setItems(items: CartItemInput[]) {
    dispatch({ type: ACTION_TYPE.SET_CART_ITEMS, payload: items });
  }

  function addItems(entries: CartItemInput[]) {
    const nextItems = [...state.cart.items];

    for (const entry of entries) {
      if (entry.quantity <= 0) {
        continue;
      }

      const existingIndex = nextItems.findIndex(
        (item) => item.productId === entry.productId,
      );

      if (existingIndex >= 0) {
        nextItems[existingIndex] = {
          ...nextItems[existingIndex],
          quantity: nextItems[existingIndex].quantity + entry.quantity,
        };
      } else {
        nextItems.push({ productId: entry.productId, quantity: entry.quantity });
      }
    }

    setItems(nextItems);
  }

  return {
    addItem(productId) {
      addItems([{ productId, quantity: 1 }]);
    },
    addItems,
    setQuantity(productId, quantity) {
      if (quantity <= 0) {
        setItems(
          state.cart.items.filter((item) => item.productId !== productId),
        );
        return;
      }

      setItems(
        state.cart.items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item,
        ),
      );
    },
    removeItem(productId) {
      setItems(state.cart.items.filter((item) => item.productId !== productId));
    },
    clear() {
      setItems([]);
    },
  };
}
