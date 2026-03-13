import { useEffect, useState, type PropsWithChildren } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { CartDrawer } from "@/components/layout/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { isStyleMode, type StyleMode } from "@/components/layout/styleModes";
import { routePaths } from "@/router";

export function AppShell({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [styleMode, setStyleMode] = useState<StyleMode>(() => {
    if (typeof window === "undefined") {
      return "current";
    }

    const savedStyleMode = window.localStorage.getItem("lil-wud.style-mode");
    return isStyleMode(savedStyleMode) ? savedStyleMode : "current";
  });
  const location = useLocation();
  const isPlannerRoute = location.pathname === routePaths.planner;

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  useEffect(() => {
    document.documentElement.dataset.styleMode = styleMode;
    window.localStorage.setItem("lil-wud.style-mode", styleMode);

    return () => {
      delete document.documentElement.dataset.styleMode;
    };
  }, [styleMode]);

  const content = children ?? <Outlet />;

  return (
    <div className={`app-shell${isPlannerRoute ? " app-shell--planner" : ""}`}>
      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
        onCartToggle={() => setCartOpen((current) => !current)}
        onStyleModeChange={setStyleMode}
        styleMode={styleMode}
      />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main className={`app-main${isPlannerRoute ? " app-main--planner" : ""}`}>{content}</main>
      {!isPlannerRoute ? <Footer /> : null}
    </div>
  );
}
