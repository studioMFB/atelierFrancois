import { BrandLogo } from "@/components/layout/BrandLogo";
import mimi from "@/assets/brand/mimi-bunny.svg";
import pomu from "@/assets/brand/pomu-tanuki.svg";
import sora from "@/assets/brand/sora-fox.svg";
import sunhatMoss from "@/assets/brand/sunhat-moss.svg";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__section">
          <BrandLogo className="brand-logo--footer" />
          <p className="eyebrow">About</p>
          <p>Quiet outdoor furniture for children, parents, and gardens that need breathing room.</p>
        </div>
        <div className="site-footer__section">
          <p className="eyebrow">Contact</p>
          <p>
            <a className="site-footer__link" href="mailto:studiomfb@gmail.com">
              studiomfb@gmail.com
            </a>
          </p>
          <p className="muted-copy">
            For custom requests, planner questions, trade enquiries, or help with an order.
          </p>
        </div>
        <div className="site-footer__section site-footer__section--mascots">
          <p className="eyebrow">The Wudlings</p>
          <div className="site-footer__mascots">
            <img alt="Cap Moss mascot" className="site-footer__mascot" src={pomu} />
            <img alt="Plain Moss mascot" className="site-footer__mascot" src={mimi} />
            <img alt="Beanie Moss mascot" className="site-footer__mascot" src={sora} />
            <img alt="Sunhat Moss mascot" className="site-footer__mascot" src={sunhatMoss} />
          </div>
        </div>
      </div>
    </footer>
  );
}
