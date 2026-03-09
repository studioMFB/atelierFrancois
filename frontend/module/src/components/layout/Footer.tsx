import { WudlingScatter } from "@/components/brand/WudlingScatter";
import { BrandLogo } from "@/components/layout/BrandLogo";

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
          <p className="muted-copy">Small moss-ball guides that keep the brand playful without taking over the task.</p>
          <WudlingScatter className="site-footer__wudlings" layout="row" size="md" />
        </div>
      </div>
    </footer>
  );
}
