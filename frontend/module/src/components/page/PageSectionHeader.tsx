import type { ReactNode } from "react";

interface PageSectionHeaderProps {
  eyebrow: string;
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
      <div className="section-header__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <div className="section-stack">{description}</div> : null}
      </div>
      {aside || ornament ? (
        <div className="section-header__aside">
          {ornament}
          {aside}
        </div>
      ) : null}
    </section>
  );
}
