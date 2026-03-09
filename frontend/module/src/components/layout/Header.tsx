import { NavLink } from "react-router-dom";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { ActionIcon } from "@/components/ui/ActionIcon";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/planner", label: "3D Planner" },
  { to: "/saved", label: "Saved Gardens" },
  { to: "/account", label: "Account" },
];

interface HeaderProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onCartToggle: () => void;
}

export function Header({ menuOpen, onMenuToggle, onCartToggle }: HeaderProps) {
  const { user } = useAuth();
  const { items } = useCart();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="brand-mark" to="/">
          <BrandLogo />
          {/* <small>Handmade garden worlds</small> */}
          {/* <p className="eyebrow">Handmade outdoor furniture for children</p> */}
        </NavLink>

        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? "site-nav__link--active" : ""}`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button className="ghost-button ghost-button--mobile" onClick={onMenuToggle} type="button">
            {menuOpen ? "Close" : "Menu"}
          </button>
          <button className="ghost-button" onClick={onCartToggle} type="button">
            <ActionIcon name="basket" />
            Basket
            <span className="pill">{items.reduce((count, item) => count + item.quantity, 0)}</span>
          </button>
          <NavLink className="ghost-button ghost-button--account" to="/account">
            {user ? user.displayName : "Sign in"}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
