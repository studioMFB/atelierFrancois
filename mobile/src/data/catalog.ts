import type { Product } from "@atelierfrancois/lilwud-sdk";

export const fallbackProducts: Product[] = [
  {
    id: 1,
    slug: "mori-bench",
    name: "Mori Bench",
    tagline: "Low, calm seating for slow afternoon play.",
    category: "Seating",
    description:
      "A handmade cedar bench with softened corners and a generous seat for parents, books, and muddy boots.",
    price: 189,
    imageKey: "mori-bench",
    plannerAssetKey: "mori-bench",
    isFeatured: true,
  },
  {
    id: 2,
    slug: "atelier-table",
    name: "Sketch Table",
    tagline: "A quiet worktable for chalk, leaves, and snacks.",
    category: "Tables",
    description:
      "Solid oak planks, rounded edges, and a weather-ready finish sized for shared making outdoors.",
    price: 249,
    imageKey: "atelier-table",
    plannerAssetKey: "atelier-table",
    isFeatured: true,
  },
  {
    id: 3,
    slug: "nest-reading-nook",
    name: "Nest Reading Nook",
    tagline: "A covered corner for stories and small imaginations.",
    category: "Play",
    description:
      "A sheltered daybed nook with sliding book caddies and a soft roof profile inspired by garden pavilions.",
    price: 529,
    imageKey: "nest-reading-nook",
    plannerAssetKey: "nest-reading-nook",
    isFeatured: true,
  },
  {
    id: 4,
    slug: "sprout-planter-cart",
    name: "Sprout Planter Cart",
    tagline: "A rolling planter and storage tray for tiny gardeners.",
    category: "Storage",
    description:
      "Part planter, part toy cart, with a timber frame that keeps trowels and seed packets close by.",
    price: 149,
    imageKey: "sprout-planter-cart",
    plannerAssetKey: "sprout-planter-cart",
    isFeatured: false,
  }
];
