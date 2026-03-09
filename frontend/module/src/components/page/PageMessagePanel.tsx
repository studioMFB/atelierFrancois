import type { ReactNode } from "react";

interface PageMessagePanelProps {
  eyebrow: string;
  title: string;
  body?: ReactNode;
  tone?: "default" | "quiet" | "accent";
  children?: ReactNode;
}

export function PageMessagePanel({
  eyebrow,
  title,
  body,
  tone = "quiet",
  children,
}: PageMessagePanelProps) {
  const toneClass =
    tone === "accent" ? "panel panel--accent" : tone === "default" ? "panel" : "panel panel--quiet";

  return (
    <section className={toneClass}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {body ? <div className="section-stack">{body}</div> : null}
      {children ? <div className="button-row">{children}</div> : null}
    </section>
  );
}
