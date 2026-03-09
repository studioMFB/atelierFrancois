import { useEffect, useState, type PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

import { CartDrawer } from "@/components/layout/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function AppShell({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  const content = children ?? <Outlet />;

  return (
    <div className="app-shell">
      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
        onCartToggle={() => setCartOpen((current) => !current)}
      />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="app-main">{content}</main>
      <Footer />
    </div>
  );
}
