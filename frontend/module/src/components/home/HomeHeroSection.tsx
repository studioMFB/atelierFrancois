import { Link } from "react-router-dom";

export function HomeHeroSection() {
  return (
    <section className="home-intro">
      <div className="home-intro__content">
        <header>
          <h1>Calm and playful.</h1>
          <p className="eyebrow">Lil&apos; Wud makes handmade outdoor furniture for children</p>
          <p className="lede">
            Plan the garden first, then pick only the pieces that earn their place.
          </p>
          <div className="button-row">
            <Link className="primary-button" to="/planner">
              Open the Garden planner
            </Link>
            <Link className="ghost-button" to="/shop">
              Browse the collection
            </Link>
          </div>
        </header>
      </div>
    </section>
  );
}
