import { LilWudClient } from "@atelierfrancois/lilwud-sdk";

const clientState = {
  accessToken: null as string | null,
  onUnauthorized: () => {},
};

export const apiClient = new LilWudClient({
  baseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? "http://localhost:5184",
  getAccessToken: () => clientState.accessToken,
  onUnauthorized: () => clientState.onUnauthorized(),
});

export function setApiAccessToken(token: string | null) {
  clientState.accessToken = token;
}

export function setApiUnauthorizedHandler(handler: () => void) {
  clientState.onUnauthorized = handler;
}
