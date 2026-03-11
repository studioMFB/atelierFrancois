import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  type Location as RouterLocation,
} from "react-router-dom";

import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import MainLayout from "@/layouts/MainLayout";
import {
  AccountPage,
  HomePage,
  NotFoundPage,
  PlannerPage,
  ProductPage,
  SavedGardensPage,
  ShopPage,
} from "@/pages";
import { AppProvider } from "@/store/appProvider";
import type { LilWudAppConfig } from "@/types/app";
import { getApiBaseUrl } from "@/lib/api";
import { routePaths } from "@/router";

export interface LilWudWebProps {
  config?: Partial<LilWudAppConfig>;
}

function resolveConfig(
  overrides?: Partial<LilWudAppConfig>,
): LilWudAppConfig {
  return {
    apiBaseUrl: overrides?.apiBaseUrl ?? getApiBaseUrl(),
  };
}

interface RouteLocationState {
  backgroundLocation?: RouterLocation;
  redirectTo?: string;
}

function AppRoutesContent() {
  const location = useLocation();
  const routeState = location.state as RouteLocationState | undefined;
  const backgroundLocation = routeState?.backgroundLocation;

  return (
    <>
      <Routes location={backgroundLocation ?? location}>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routePaths.shop} element={<ShopPage />} />
          <Route path={routePaths.product} element={<ProductPage />} />
          <Route path={routePaths.planner} element={<PlannerPage />} />
          <Route
            path={routePaths.saved}
            element={
              <ProtectedRoute>
                <SavedGardensPage />
              </ProtectedRoute>
            }
          />
          <Route path={routePaths.account} element={<AccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {backgroundLocation ? (
        <Routes>
          <Route path={routePaths.account} element={<AccountPage presentation="modal" />} />
        </Routes>
      ) : null}
    </>
  );
}

const App = ({ config }: { config: LilWudAppConfig }) => (
  <AppProvider config={config}>
    <AppRoutesContent />
  </AppProvider>
);

const AppRoutes = ({ config }: { config: LilWudAppConfig }) => (
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <App config={config} />
  </BrowserRouter>
);

export default function LilWudWeb({ config }: LilWudWebProps) {
  return <AppRoutes config={resolveConfig(config)} />;
}
