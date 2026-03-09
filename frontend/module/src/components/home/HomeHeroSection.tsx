import { Link } from "react-router-dom";

import heroArch from "@/assets/brand/garden-arch.svg";
import { collectionNotes } from "@/data/catalog";

export function HomeHeroSection() {
  return (
    <section className="home-intro panel panel--quiet">
      <div className="home-intro__content">
        <div className="home-intro__copy">
          {/* <p className="eyebrow">Handmade outdoor furniture for children</p> */}
          <h1>Calm and playful.</h1>
          <p className="lede">
            Lil&apos; Wud makes handmade outdoor pieces for reading, drawing, potting, and slow play. Start with the planner, then buy only what fits the garden you actually want.
          </p>
        </div>
        <div className="button-row">
          <Link className="primary-button" to="/planner">
            Open the 3D planner
          </Link>
          <Link className="ghost-button" to="/shop">
            Browse the collection
          </Link>
        </div>
        <div className="home-intro__facts">
          {collectionNotes.map((note) => (
            <div className="home-intro__fact" key={note}>
              {note}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
