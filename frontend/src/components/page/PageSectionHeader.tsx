import type { ReactNode } from "react";

interface PageSectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  aside?: ReactNode;
}

export function PageSectionHeader({
  eyebrow,
  title,
  description,
  aside,
}: PageSectionHeaderProps) {
  return (
    <section className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <div className="section-stack">{description}</div> : null}
      </div>
      {aside}
    </section>
  );
}
