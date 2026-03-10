import type { ReactNode } from "react";

interface PageSectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  aside?: ReactNode;
  ornament?: ReactNode;
}

export function PageSectionHeader({
  eyebrow,
  title,
  description,
  aside,
  ornament,
}: PageSectionHeaderProps) {
  return (
    <section className="section-header">
      <header>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <div className="section-stack">{description}</div> : null}
      </header>
      {aside || ornament ? (
        <aside>
          {ornament}
          {aside}
        </aside>
      ) : null}
    </section>
  );
}
