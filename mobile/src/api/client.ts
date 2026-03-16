import { LilWudClient } from "@atelierfrancois/lilwud-sdk";

function getConfiguredApiBaseUrl() {
  return process.env.EXPO_PUBLIC_API_BASE_URL ?? "http://localhost:5184";
}

const clientState = {
  accessToken: null as string | null,
  onUnauthorized: () => {},
};

export const apiClient = new LilWudClient({
  baseUrl: getConfiguredApiBaseUrl(),
  getAccessToken: () => clientState.accessToken,
  onUnauthorized: () => clientState.onUnauthorized(),
});

export function setApiAccessToken(token: string | null) {
  clientState.accessToken = token;
}

export function setApiUnauthorizedHandler(handler: () => void) {
  clientState.onUnauthorized = handler;
}

export function getWebBaseUrl() {
  try {
    const apiUrl = new URL(getConfiguredApiBaseUrl());
    return `${apiUrl.protocol}//${apiUrl.hostname}:1234`;
  } catch {
    return "http://localhost:1234";
  }
}
