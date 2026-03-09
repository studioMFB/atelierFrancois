import type { PlannerItem, PlannerSurfaceTheme } from "@atelierfrancois/lilwud-sdk";

interface PlannerAssetSpec {
  assetKey: string;
  label: string;
  footprint: [number, number];
  color: string;
}

export const plannerThemeColors: Record<PlannerSurfaceTheme, string> = {
  moss: "#dbe4d2",
  sand: "#ead9bb",
  stone: "#d8dbdd",
  mulch: "#9b7358",
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
  },
  "mimi-bunny": {
    assetKey: "mimi-bunny",
    label: "Plain Moss",
    footprint: [0.9, 0.9],
    color: "#c3e128",
  },
  "sora-fox": {
    assetKey: "sora-fox",
    label: "Beanie Moss",
    footprint: [0.95, 0.95],
    color: "#c8e52c",
  },
  "sunhat-moss": {
    assetKey: "sunhat-moss",
    label: "Sunhat Moss",
    footprint: [0.98, 0.98],
    color: "#c7e52c",
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
