import { BrowserRouter, Route, Routes } from "react-router-dom";

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

const App = ({ config }: { config: LilWudAppConfig }) => (
  <AppProvider config={config}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ProductPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route
          path="/saved"
          element={
            <ProtectedRoute>
              <SavedGardensPage />
            </ProtectedRoute>
          }
        />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
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
