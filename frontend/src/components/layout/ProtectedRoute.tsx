import type { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { status } = useAuth();
  const location = useLocation();

  if (status === "loading") {
    return (
      <section className="page-shell">
        <div className="panel panel--quiet">
          <p className="eyebrow">Checking your account</p>
          <h1>Loading your garden cabinet.</h1>
        </div>
      </section>
    );
  }

  if (status !== "authenticated") {
    return <Navigate to="/account" replace state={{ redirectTo: location.pathname + location.search }} />;
  }

  return <>{children}</>;
}
