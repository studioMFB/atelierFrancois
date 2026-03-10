import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { ActionIcon } from "@/components/ui/ActionIcon";
import plainMoss from "@/assets/brand/mimi-bunny.svg";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/planner", label: "Garden Planner" },
];

interface HeaderProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onCartToggle: () => void;
}

export function Header({ menuOpen, onMenuToggle, onCartToggle }: HeaderProps) {
  const { logout, user } = useAuth();
  const { items } = useCart();
  const location = useLocation();
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setAccountMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setAccountMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setAccountMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="brand-mark" to="/">
          <BrandLogo />
        </NavLink>

        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
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
          <button className="ghost-button site-header__basket-button" onClick={onCartToggle} type="button">
            <ActionIcon name="basket" />
            Basket
            <span className="pill">{items.reduce((count, item) => count + item.quantity, 0)}</span>
          </button>
          <div className="site-header__account" ref={menuRef}>
            <button
              aria-expanded={accountMenuOpen}
              aria-haspopup="menu"
              className="ghost-button ghost-button--account site-header__moss-button"
              onClick={() => setAccountMenuOpen((current) => !current)}
              type="button"
            >
              <img alt="" aria-hidden="true" src={plainMoss} />
            </button>
            {accountMenuOpen ? (
              <div className="site-header__account-menu" role="menu">
                <header>
                  <p className="eyebrow">Garden account</p>
                  <p>{user ? user.displayName : "Sign in or sign up to save your garden layouts"}</p>
                </header>
                {user ? (
                  <>
                    <NavLink role="menuitem" to="/account">
                      My account
                    </NavLink>
                    <NavLink role="menuitem" to="/saved">
                      Saved gardens
                    </NavLink>
                    <button onClick={() => void logout()} role="menuitem" type="button">
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink role="menuitem" to="/account">
                      Sign in
                    </NavLink>
                    <NavLink
                      role="menuitem"
                      to="/account?mode=register"
                    >
                      Create account
                    </NavLink>
                    <NavLink role="menuitem" to="/saved">
                      Saved gardens
                    </NavLink>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
