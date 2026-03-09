import type { CartItemInput, CartQuote } from "@atelierfrancois/lilwud-sdk";

import { apiClient } from "@/lib/api";

export function quoteCart(items: CartItemInput[]): Promise<CartQuote> {
  return apiClient.quoteCart(items);
}
