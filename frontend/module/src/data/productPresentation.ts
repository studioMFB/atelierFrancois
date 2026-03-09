import type { Product } from "@atelierfrancois/lilwud-sdk";

import type { ProductViewerPreset } from "@/components/shop/ProductViewer";

interface ProductSceneNote {
  preset: ProductViewerPreset;
  label: string;
  title: string;
  copy: string;
}

export interface ProductPresentation {
  dimensions: string;
  material: string;
  finish: string;
  leadTime: string;
  highlights: string[];
  lookbook: ProductSceneNote[];
}

export const productPresentationBySlug: Record<string, ProductPresentation> = {
  "mori-bench": {
    dimensions: "140cm wide x 46cm deep x 74cm high",
    material: "Cedar seat with stained ash legs",
    finish: "Low-sheen exterior oil, child-safe once cured",
    leadTime: "Made to order in 4 to 6 weeks",
    highlights: [
      "Low enough for children to climb onto without making the garden feel like a nursery.",
      "Softened edges and open leg spacing keep it calm beside planters, gravel, or lawn.",
      "Pairs naturally with the reading nook or lookout tower when parents want a quiet anchor piece.",
    ],
    lookbook: [
      {
        preset: "studio",
        label: "Studio angle",
        title: "Joinery first",
        copy: "A clean view that shows the softened seat edge and the contrast between the bench top and frame.",
      },
      {
        preset: "garden",
        label: "Garden mood",
        title: "Settled outdoors",
        copy: "Imagined beside mossy planting and pale gravel so parents can picture a calmer corner of the garden.",
      },
      {
        preset: "detail",
        label: "Detail crop",
        title: "Close to the timber",
        copy: "A tighter framing that makes the rounded back rail and leg proportions easier to inspect.",
      },
    ],
  },
  "atelier-table": {
    dimensions: "135cm wide x 95cm deep x 72cm high",
    material: "Solid oak top with oiled hardwood base",
    finish: "Weather-ready matte seal with easy wipe-down surface",
    leadTime: "Made to order in 5 to 7 weeks",
    highlights: [
      "Sized for drawing, leaves, clay, and family snacks without dominating the garden.",
      "Broad top and simple leg rhythm make it easy to style with mixed seating around it.",
      "Works well as a central planning piece before committing to a larger picnic composition.",
    ],
    lookbook: [
      {
        preset: "studio",
        label: "Studio angle",
        title: "Proportion and grain",
        copy: "A straightforward showroom-style view for checking tabletop scale and leg spacing.",
      },
      {
        preset: "garden",
        label: "Garden mood",
        title: "Craft corner",
        copy: "Placed in a soft garden vignette to suggest chalk, pots, and summer snack rituals.",
      },
      {
        preset: "detail",
        label: "Detail crop",
        title: "Edges and finish",
        copy: "A tighter crop that focuses on the softened top profile and the quiet matte finish.",
      },
    ],
  },
  "nest-reading-nook": {
    dimensions: "205cm wide x 150cm deep x 150cm high",
    material: "Cedar body with powder-coated fixings",
    finish: "Exterior-safe oil on timber, matte dark accents",
    leadTime: "Made to order in 6 to 8 weeks",
    highlights: [
      "Sheltered enough for stories and retreat, but still open enough to keep sightlines through the garden.",
      "The roofline softens the silhouette so it feels architectural rather than playground-bright.",
      "A strong choice for families building a dedicated outdoor reading or quiet-play corner.",
    ],
    lookbook: [
      {
        preset: "studio",
        label: "Studio angle",
        title: "Overall form",
        copy: "A showroom composition that makes the roof span and daybed footprint easy to understand.",
      },
      {
        preset: "garden",
        label: "Garden mood",
        title: "Tucked into planting",
        copy: "Shown in a greener scene so parents can imagine it against shrubs, bark, and books.",
      },
      {
        preset: "detail",
        label: "Detail crop",
        title: "Structure close-up",
        copy: "A closer look at the posts, roof slab, and the calm weight of the side rails.",
      },
    ],
  },
  "sprout-planter-cart": {
    dimensions: "95cm wide x 65cm deep x 70cm high",
    material: "FSC timber tray with powder-coated wheel core",
    finish: "Exterior oil with sealed storage cavity",
    leadTime: "Made to order in 3 to 5 weeks",
    highlights: [
      "Half planter, half trolley, and easy to style near herbs or potting benches.",
      "A compact item that makes the collection feel playful without becoming cartoonish.",
      "Works especially well as an accent piece inside the planner for smaller gardens.",
    ],
    lookbook: [
      {
        preset: "studio",
        label: "Studio angle",
        title: "Rolling silhouette",
        copy: "A clean profile view that shows the tray depth and wheel stance clearly.",
      },
      {
        preset: "garden",
        label: "Garden mood",
        title: "Little gardener scene",
        copy: "Styled against soft greenery to suggest seed packets, trowels, and afternoon watering.",
      },
      {
        preset: "detail",
        label: "Detail crop",
        title: "Tray and wheel detail",
        copy: "A closer crop for the wheel assembly, handle rhythm, and planter body proportions.",
      },
    ],
  },
  "cloud-lookout": {
    dimensions: "150cm wide x 140cm deep x 205cm high",
    material: "Cedar tower deck with stained ladder and rails",
    finish: "Outdoor matte oil with dark accent framing",
    leadTime: "Made to order in 7 to 9 weeks",
    highlights: [
      "A vertical piece that adds adventure without the visual noise of a typical play tower.",
      "Rounded rails and a compact deck make it suitable for tighter gardens with layered planting.",
      "Pairs well with benches and tables when you want the garden to feel curated rather than crowded.",
    ],
    lookbook: [
      {
        preset: "studio",
        label: "Studio angle",
        title: "Height and stance",
        copy: "A balanced perspective that helps gauge how the tower sits above planting or paving.",
      },
      {
        preset: "garden",
        label: "Garden mood",
        title: "Play in the landscape",
        copy: "A softer garden setting that keeps the piece adventurous but not visually loud.",
      },
      {
        preset: "detail",
        label: "Detail crop",
        title: "Rail and ladder close-up",
        copy: "A closer framing around the ladder side and the softer deck proportions.",
      },
    ],
  },
  "picnic-island": {
    dimensions: "180cm wide x 110cm deep x 70cm high",
    material: "Solid oak top with integrated ash benches",
    finish: "Exterior matte sealer with easy-maintenance surface",
    leadTime: "Made to order in 5 to 7 weeks",
    highlights: [
      "An all-in-one family piece that moves between craft session, picnic, and weekend gathering.",
      "Integrated benches keep the footprint calm and prevent the scene from looking over-furnished.",
      "Useful as the central planning anchor when the rest of the garden needs to stay visually open.",
    ],
    lookbook: [
      {
        preset: "studio",
        label: "Studio angle",
        title: "Table and bench balance",
        copy: "A clean composition that makes the integrated seating proportions easy to read.",
      },
      {
        preset: "garden",
        label: "Garden mood",
        title: "Outdoor table ritual",
        copy: "A softer planted setting that suggests long dinners, paint pots, and cut herbs nearby.",
      },
      {
        preset: "detail",
        label: "Detail crop",
        title: "Bench edge detail",
        copy: "A closer look at the bench slab and the way the base stays visually light.",
      },
    ],
  },
};

export function getProductPresentation(product: Product): ProductPresentation {
  return (
    productPresentationBySlug[product.slug] ?? {
      dimensions: "Made to order dimensions shared after consultation",
      material: "Outdoor hardwood with rounded edges",
      finish: "Weather-ready matte finish",
      leadTime: "Made to order in 4 to 8 weeks",
      highlights: [
        `${product.name} is shaped to feel calm in a family garden while still inviting play.`,
        "The palette stays quiet and architectural so the garden still feels like a space for everyone.",
        "Use the planner to test placement before committing to a full set.",
      ],
      lookbook: [
        {
          preset: "studio",
          label: "Studio angle",
          title: "Showroom view",
          copy: "A clean angle for checking proportion and joinery.",
        },
        {
          preset: "garden",
          label: "Garden mood",
          title: "Outdoor placement",
          copy: "A softer scene to imagine the piece in context.",
        },
        {
          preset: "detail",
          label: "Detail crop",
          title: "Closer inspection",
          copy: "A tighter look at the silhouette and finishing details.",
        },
      ],
    }
  );
}
