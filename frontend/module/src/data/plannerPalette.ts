import { fallbackProducts } from "@/data/catalog";

export type PlannerPaletteTab = "furniture" | "decor" | "mascots";

export interface PlannerPaletteItem {
  assetKey: string;
  description: string;
  name: string;
  price: number | null;
  productId: number | null;
  tab: PlannerPaletteTab;
}

const decorPaletteItems: PlannerPaletteItem[] = [
  {
    assetKey: "moss-bush",
    description: "Rounded planting to soften the edges of the scene.",
    name: "Moss Bush",
    price: null,
    productId: null,
    tab: "decor",
  },
  {
    assetKey: "pine-tree",
    description: "A calm low-poly tree to suggest height and shelter.",
    name: "Pine Tree",
    price: null,
    productId: null,
    tab: "decor",
  },
  {
    assetKey: "stone-cluster",
    description: "Minimal stones for path edges, beds, or quiet corners.",
    name: "Stone Cluster",
    price: null,
    productId: null,
    tab: "decor",
  },
  {
    assetKey: "tall-shrub",
    description: "Slim vertical greenery for boundaries and screening.",
    name: "Tall Shrub",
    price: null,
    productId: null,
    tab: "decor",
  },
];

const mascotPaletteItems: PlannerPaletteItem[] = [
  {
    assetKey: "pomu-tanuki",
    description: "A bright moss-ball guide in a green cap, ready to sit near the first bench or path edge.",
    name: "Cap Moss",
    price: null,
    productId: null,
    tab: "mascots",
  },
  {
    assetKey: "mimi-bunny",
    description: "The plain smiling moss ball, perfect for the simplest little garden vignette.",
    name: "Plain Moss",
    price: null,
    productId: null,
    tab: "mascots",
  },
  {
    assetKey: "sora-fox",
    description: "A moss ball in a knitted beanie that makes the scene feel softer and more collectible.",
    name: "Beanie Moss",
    price: null,
    productId: null,
    tab: "mascots",
  },
  {
    assetKey: "sunhat-moss",
    description: "A cheerful moss ball in a yellow sunhat for the warmest garden corners.",
    name: "Sunhat Moss",
    price: null,
    productId: null,
    tab: "mascots",
  },
];

export const plannerPaletteTabs: Array<{
  description: string;
  label: string;
  value: PlannerPaletteTab;
}> = [
  {
    description: "Sale pieces that can be added to the basket.",
    label: "Furniture",
    value: "furniture",
  },
  {
    description: "Mock-up greenery and rocks that are not for sale.",
    label: "Decor",
    value: "decor",
  },
  {
    description: "Place the moss-ball Wudlings around the scene to make the garden feel softer, stranger, and more shareable.",
    label: "Mascots",
    value: "mascots",
  },
];

export const plannerFurnitureItems: PlannerPaletteItem[] = fallbackProducts.map((product) => ({
  assetKey: product.plannerAssetKey,
  description: product.tagline,
  name: product.name,
  price: product.price,
  productId: product.id,
  tab: "furniture",
}));

export const plannerDecorItems = decorPaletteItems;
export const plannerMascotItems = mascotPaletteItems;

export const plannerPaletteItemsByTab: Record<PlannerPaletteTab, PlannerPaletteItem[]> = {
  furniture: plannerFurnitureItems,
  decor: plannerDecorItems,
  mascots: plannerMascotItems,
};

export const plannerPaletteItems: PlannerPaletteItem[] = [
  ...plannerFurnitureItems,
  ...plannerDecorItems,
  ...plannerMascotItems,
];

export const plannerPaletteByAssetKey = Object.fromEntries(
  plannerPaletteItems.map((item) => [item.assetKey, item]),
) as Record<string, PlannerPaletteItem>;
