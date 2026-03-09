import type { AuthResponse, User } from "@atelierfrancois/lilwud-sdk";

import { apiClient } from "@/lib/api";

export function fetchCurrentUser(): Promise<User> {
  return apiClient.me();
}

export function loginWithPassword(input: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  return apiClient.login(input);
}

export function registerAccount(input: {
  email: string;
  password: string;
  displayName: string;
}): Promise<AuthResponse> {
  return apiClient.register(input);
}

export function logoutAccount(): Promise<void> {
  return apiClient.logout();
}
