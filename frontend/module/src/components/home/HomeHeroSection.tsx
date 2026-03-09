import { Link } from "react-router-dom";

import { WudlingScatter } from "@/components/brand/WudlingScatter";
import { collectionNotes } from "@/data/catalog";

export function HomeHeroSection() {
  return (
    <section className="home-intro panel">
      <div className="home-intro__content">
        <div className="home-intro__copy">
          <p className="eyebrow">Handmade outdoor furniture for children</p>
          <h1>Calm and playful.</h1>
          <p className="lede">
            Lil&apos; Wud makes handmade outdoor pieces for reading, drawing, potting, and slow play. Plan the garden first, then pick only the pieces that earn their place.
          </p>
          <div className="home-intro__cta">
            <div className="button-row">
              <Link className="primary-button" to="/planner">
                Open the 3D planner
              </Link>
              <Link className="ghost-button" to="/shop">
                Browse the collection
              </Link>
            </div>
          </div>
        </div>
        <div className="home-intro__art">
          <WudlingScatter className="home-intro__wudlings" layout="orbit" size="lg" />
          <p className="home-intro__caption">The Wudlings pop up around the shop to keep the space light without getting in the way.</p>
        </div>
      </div>
      <div className="home-intro__facts">
        {collectionNotes.map((note) => (
          <div className="home-intro__fact" key={note}>
            {note}
          </div>
        ))}
      </div>
    </section>
  );
}
