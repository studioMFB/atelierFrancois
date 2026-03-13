export const styleModeOptions = [
  {
    value: "current",
    label: "Current",
    description: "Branded and lively",
  },
  {
    value: "style2-editorial-olive",
    label: "Editorial Olive",
    description: "Graphic studio mode",
  },
  {
    value: "style3-campaign-cream",
    label: "Campaign Cream",
    description: "Rounded and public-facing",
  },
  {
    value: "style4-lilwudd-mauve",
    label: "Lil' WUDD Mauve",
    description: "Quiet planner workspace",
  },
] as const;

export type StyleMode = (typeof styleModeOptions)[number]["value"];

export function isStyleMode(value: string | null): value is StyleMode {
  return styleModeOptions.some((option) => option.value === value);
}
