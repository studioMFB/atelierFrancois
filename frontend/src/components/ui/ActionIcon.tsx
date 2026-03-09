interface ActionIconProps {
  name:
    | "basket"
    | "save"
    | "undo"
    | "redo"
    | "up"
    | "down"
    | "left"
    | "right"
    | "rotate-left"
    | "rotate-right"
    | "lock"
    | "unlock"
    | "copy"
    | "paste"
    | "duplicate"
    | "spark";
}

export function ActionIcon({ name }: ActionIconProps) {
  return (
    <span aria-hidden="true" className="button-icon">
      {renderIcon(name)}
    </span>
  );
}

function renderIcon(name: ActionIconProps["name"]) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "basket":
      return (
        <svg {...common}>
          <path d="M5 10h14l-1.4 8.5A2 2 0 0 1 15.6 20H8.4a2 2 0 0 1-1.97-1.5L5 10Z" />
          <path d="M9 10 12 5l3 5" />
        </svg>
      );
    case "save":
      return (
        <svg {...common}>
          <path d="M5 4h11l3 3v13H5z" />
          <path d="M8 4v6h7V4" />
          <path d="M9 17h6" />
        </svg>
      );
    case "undo":
      return (
        <svg {...common}>
          <path d="M9 7 5 11l4 4" />
          <path d="M6 11h7a5 5 0 1 1 0 10h-1" />
        </svg>
      );
    case "redo":
      return (
        <svg {...common}>
          <path d="m15 7 4 4-4 4" />
          <path d="M18 11h-7a5 5 0 1 0 0 10h1" />
        </svg>
      );
    case "up":
      return (
        <svg {...common}>
          <path d="m12 5 5 6h-3v8h-4v-8H7z" />
        </svg>
      );
    case "down":
      return (
        <svg {...common}>
          <path d="M12 19 7 13h3V5h4v8h3z" />
        </svg>
      );
    case "left":
      return (
        <svg {...common}>
          <path d="m5 12 6-5v3h8v4h-8v3z" />
        </svg>
      );
    case "right":
      return (
        <svg {...common}>
          <path d="m19 12-6 5v-3H5v-4h8V7z" />
        </svg>
      );
    case "rotate-left":
      return (
        <svg {...common}>
          <path d="M7 8V4L3 8l4 4V8" />
          <path d="M7 8h6a7 7 0 1 1-6.3 10" />
        </svg>
      );
    case "rotate-right":
      return (
        <svg {...common}>
          <path d="M17 8V4l4 4-4 4V8" />
          <path d="M17 8h-6a7 7 0 1 0 6.3 10" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="6" y="11" width="12" height="9" rx="2" />
          <path d="M9 11V8a3 3 0 0 1 6 0v3" />
        </svg>
      );
    case "unlock":
      return (
        <svg {...common}>
          <rect x="6" y="11" width="12" height="9" rx="2" />
          <path d="M15 11V8a3 3 0 0 0-6 0" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <rect x="9" y="9" width="10" height="10" rx="2" />
          <rect x="5" y="5" width="10" height="10" rx="2" />
        </svg>
      );
    case "paste":
      return (
        <svg {...common}>
          <path d="M9 5h6" />
          <path d="M10 3h4a1 1 0 0 1 1 1v2H9V4a1 1 0 0 1 1-1Z" />
          <path d="M8 6H6v14h12V6h-2" />
        </svg>
      );
    case "duplicate":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="9" height="11" rx="2" />
          <rect x="11" y="4" width="9" height="11" rx="2" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z" />
        </svg>
      );
    default:
      return null;
  }
}
