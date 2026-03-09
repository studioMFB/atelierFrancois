import { LilWudClient } from "@atelierfrancois/lilwud-sdk";

const apiState = {
  baseUrl:
    (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5184").replace(/\/$/, ""),
  accessToken: null as string | null,
  onUnauthorized: () => {},
};

function createClient() {
  return new LilWudClient({
    baseUrl: apiState.baseUrl,
    getAccessToken: () => apiState.accessToken,
    onUnauthorized: () => apiState.onUnauthorized(),
  });
}

export const apiClient = {
  getPlannerProject(id: number) {
    return createClient().getPlannerProject(id);
  },
  createPlannerProject(payload: Parameters<LilWudClient["createPlannerProject"]>[0]) {
    return createClient().createPlannerProject(payload);
  },
  deletePlannerProject(id: number) {
    return createClient().deletePlannerProject(id);
  },
  getProduct(slug: string) {
    return createClient().getProduct(slug);
  },
  listPlannerProjects() {
    return createClient().listPlannerProjects();
  },
  listProducts(featured?: boolean) {
    return createClient().listProducts(featured);
  },
  login(input: Parameters<LilWudClient["login"]>[0]) {
    return createClient().login(input);
  },
  logout() {
    return createClient().logout();
  },
  me() {
    return createClient().me();
  },
  quoteCart(items: Parameters<LilWudClient["quoteCart"]>[0]) {
    return createClient().quoteCart(items);
  },
  register(input: Parameters<LilWudClient["register"]>[0]) {
    return createClient().register(input);
  },
  updatePlannerProject(
    id: number,
    payload: Parameters<LilWudClient["updatePlannerProject"]>[1],
  ) {
    return createClient().updatePlannerProject(id, payload);
  },
};

export function getApiBaseUrl() {
  return apiState.baseUrl;
}

export function setApiAccessToken(token: string | null) {
  apiState.accessToken = token;
}

export function setApiBaseUrl(baseUrl: string) {
  apiState.baseUrl = baseUrl.replace(/\/$/, "");
}

export function setApiUnauthorizedHandler(handler: () => void) {
  apiState.onUnauthorized = handler;
}
