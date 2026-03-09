import mimi from "@/assets/brand/mimi-bunny.svg";
import pomu from "@/assets/brand/pomu-tanuki.svg";
import sora from "@/assets/brand/sora-fox.svg";
import sunhatMoss from "@/assets/brand/sunhat-moss.svg";

const wudlingAssets = {
  cap: { alt: "Cap Moss Wudling", src: pomu },
  plain: { alt: "Plain Moss Wudling", src: mimi },
  beanie: { alt: "Beanie Moss Wudling", src: sora },
  sunhat: { alt: "Sunhat Moss Wudling", src: sunhatMoss },
} as const;

export type WudlingVariant = keyof typeof wudlingAssets;

interface WudlingScatterProps {
  className?: string;
  items?: WudlingVariant[];
  layout?: "orbit" | "row";
  size?: "sm" | "md" | "lg";
}

export function WudlingScatter({
  className = "",
  items = ["cap", "plain", "beanie", "sunhat"],
  layout = "row",
  size = "md",
}: WudlingScatterProps) {
  return (
    <div className={`wudling-scatter wudling-scatter--${layout} wudling-scatter--${size} ${className}`.trim()}>
      {items.map((item, index) => {
        const asset = wudlingAssets[item];

        return (
          <img
            alt={asset.alt}
            className={`wudling-scatter__item wudling-scatter__item--${index + 1}`}
            key={`${item}-${index}`}
            src={asset.src}
          />
        );
      })}
    </div>
  );
}
