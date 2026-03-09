import type { PropsWithChildren } from "react";
import { useReducer } from "react";

import { useHydratorsAuth } from "@/hydrators/useHydratorsAuth";
import { useHydratorsCart } from "@/hydrators/useHydratorsCart";
import { useHydratorsCatalog } from "@/hydrators/useHydratorsCatalog";
import { useHydratorsPlannerProjects } from "@/hydrators/useHydratorsPlannerProjects";
import { AppContext, type AppContextValue } from "@/store/appContext";
import appReducer, { createInitialAppState } from "@/store/appReducer";
import type { LilWudAppConfig } from "@/types/app";

interface AppProviderProps extends PropsWithChildren {
  config: LilWudAppConfig;
}

export function AppProvider({ children, config }: AppProviderProps) {
  const [state, dispatch] = useReducer(
    appReducer,
    config,
    createInitialAppState,
  );

  const authService = useHydratorsAuth(state, dispatch);
  const cartService = useHydratorsCart(state, dispatch);
  const catalogService = useHydratorsCatalog(state, dispatch);
  const plannerProjectsService = useHydratorsPlannerProjects(state, dispatch);

  const value: AppContextValue = {
    ...state,
    dispatch,
    services: {
      auth: authService,
      cart: cartService,
      catalog: catalogService,
      plannerProjects: plannerProjectsService,
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
