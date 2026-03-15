import type { PlannerItem, PlannerSurfaceTheme } from "@atelierfrancois/lilwud-sdk";

interface PlannerAssetSpec {
  assetKey: string;
  label: string;
  footprint: [number, number];
  color: string;
  description?: string;
}

export const plannerThemeColors: Record<PlannerSurfaceTheme, string> = {
  moss: "#c9d9ae",
  sand: "#e7cf9f",
  stone: "#c8d0d8",
  mulch: "#b17a5d",
};

export const plannerAssets: Record<string, PlannerAssetSpec> = {
  "mori-bench": {
    assetKey: "mori-bench",
    label: "Mori Bench",
    footprint: [1.6, 0.8],
    color: "#b58461",
  },
  "atelier-table": {
    assetKey: "atelier-table",
    label: "Sketch Table",
    footprint: [1.4, 1.1],
    color: "#b49363",
  },
  "nest-reading-nook": {
    assetKey: "nest-reading-nook",
    label: "Nest Reading Nook",
    footprint: [2.2, 1.6],
    color: "#c39d7a",
  },
  "sprout-planter-cart": {
    assetKey: "sprout-planter-cart",
    label: "Sprout Planter Cart",
    footprint: [1.1, 0.9],
    color: "#7d9b71",
  },
  "cloud-lookout": {
    assetKey: "cloud-lookout",
    label: "Cloud Lookout",
    footprint: [2.2, 2.1],
    color: "#d7b184",
  },
  "picnic-island": {
    assetKey: "picnic-island",
    label: "Picnic Island",
    footprint: [2.1, 1.6],
    color: "#a67357",
  },
  "moss-bush": {
    assetKey: "moss-bush",
    label: "Moss Bush",
    footprint: [1.2, 1.1],
    color: "#7c9b73",
  },
  "pine-tree": {
    assetKey: "pine-tree",
    label: "Pine Tree",
    footprint: [1.3, 1.3],
    color: "#5f7f5a",
  },
  "stone-cluster": {
    assetKey: "stone-cluster",
    label: "Stone Cluster",
    footprint: [1.1, 0.9],
    color: "#929b9d",
  },
  "tall-shrub": {
    assetKey: "tall-shrub",
    label: "Tall Shrub",
    footprint: [0.9, 0.9],
    color: "#87a27b",
  },
  "pomu-tanuki": {
    assetKey: "pomu-tanuki",
    label: "Cap Moss",
    footprint: [0.95, 0.95],
    color: "#c6e42a",
    description: "A bright moss-ball guide in a green cap, ready to sit near the first bench or path edge.",
  },
  "mimi-bunny": {
    assetKey: "mimi-bunny",
    label: "Plain Moss",
    footprint: [0.9, 0.9],
    color: "#c3e128",
    description: "The plain smiling moss ball, perfect for the simplest little garden vignette.",
  },
  "sora-fox": {
    assetKey: "sora-fox",
    label: "Beanie Moss",
    footprint: [0.95, 0.95],
    color: "#c8e52c",
    description: "A moss ball in a knitted beanie that makes the scene feel softer and more collectible.",
  },
  "sunhat-moss": {
    assetKey: "sunhat-moss",
    label: "Sunhat Moss",
    footprint: [0.98, 0.98],
    color: "#c7e52c",
    description: "A cheerful moss ball in a yellow sunhat for the warmest garden corners.",
  },
};

export function getPlannerAsset(assetKey: string) {
  return plannerAssets[assetKey];
}

export function clampItemPosition(
  item: PlannerItem,
  width: number,
  depth: number,
  nextX: number,
  nextZ: number,
): [number, number, number] {
  const asset = getPlannerAsset(item.assetKey);
  const halfWidth = width / 2 - (asset?.footprint[0] ?? 1) / 2;
  const halfDepth = depth / 2 - (asset?.footprint[1] ?? 1) / 2;

  return [
    Math.max(-halfWidth, Math.min(halfWidth, nextX)),
    0,
    Math.max(-halfDepth, Math.min(halfDepth, nextZ)),
  ];
}
