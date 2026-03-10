import type { ProductPresentation } from "@/data/productPresentation";

interface ProductStoryPanelsProps {
  presentation: ProductPresentation;
}

export function ProductStoryPanels({ presentation }: ProductStoryPanelsProps) {
  return (
    <section className="section-grid">
      <div className="panel">
        <p className="eyebrow">Why parents choose it</p>
        <h2>Quiet detailing with enough charm to feel shared, not childish.</h2>
        <ul className="plain-list">
          {presentation.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="panel panel--accent">
        <p className="eyebrow">Lookbook notes</p>
        <h2>Styled like a small editorial rather than a flat catalog page.</h2>
        <div className="lookbook-copy">
          {presentation.lookbook.map((scene) => (
            <article key={scene.label}>
              <strong>{scene.title}</strong>
              <p>{scene.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
