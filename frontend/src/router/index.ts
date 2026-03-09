export const routePaths = {
  account: "/account",
  home: "/",
  planner: "/planner",
  product: "/shop/:slug",
  saved: "/saved",
  shop: "/shop",
} as const;

export function toProductRoute(slug: string) {
  return `/shop/${slug}`;
}
