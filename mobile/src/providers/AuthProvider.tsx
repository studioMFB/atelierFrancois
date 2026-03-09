import AsyncStorage from "@react-native-async-storage/async-storage";
import type { AuthResponse, User } from "@atelierfrancois/lilwud-sdk";
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

import { apiClient, setApiAccessToken, setApiUnauthorizedHandler } from "@/api/client";

type AuthStatus = "loading" | "anonymous" | "authenticated";

interface AuthContextValue {
  status: AuthStatus;
  user: User | null;
  login: (input: { email: string; password: string }) => Promise<void>;
  register: (input: {
    email: string;
    password: string;
    displayName: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

const STORAGE_KEY = "lil-wud.mobile.session";
const LEGACY_STORAGE_KEY = "atelier-francois.mobile.session";

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function restoreSession() {
      const stored =
        (await AsyncStorage.getItem(STORAGE_KEY)) ??
        (await AsyncStorage.getItem(LEGACY_STORAGE_KEY));

      if (stored && !(await AsyncStorage.getItem(STORAGE_KEY))) {
        await AsyncStorage.setItem(STORAGE_KEY, stored);
        await AsyncStorage.removeItem(LEGACY_STORAGE_KEY);
      }

      if (!ignore) {
        setAccessToken(stored);
      }
    }

    setApiUnauthorizedHandler(() => {
      void clearSession();
    });
    void restoreSession();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    async function syncSession() {
      setApiAccessToken(accessToken);

      if (!accessToken) {
        setStatus("anonymous");
        return;
      }

      try {
        const me = await apiClient.me();
        if (!ignore) {
          setUser(me);
          setStatus("authenticated");
        }
      } catch {
        if (!ignore) {
          await clearSession();
        }
      }
    }

    void syncSession();

    return () => {
      ignore = true;
    };
  }, [accessToken]);

  async function clearSession() {
    setUser(null);
    setAccessToken(null);
    setApiAccessToken(null);
    setStatus("anonymous");
    await AsyncStorage.removeItem(STORAGE_KEY);
    await AsyncStorage.removeItem(LEGACY_STORAGE_KEY);
  }

  async function applySession(response: AuthResponse) {
    setAccessToken(response.accessToken);
    setUser(response.user);
    setStatus("authenticated");
    setApiAccessToken(response.accessToken);
    await AsyncStorage.setItem(STORAGE_KEY, response.accessToken);
  }

  async function login(input: { email: string; password: string }) {
    const response = await apiClient.login(input);
    await applySession(response);
  }

  async function register(input: {
    email: string;
    password: string;
    displayName: string;
  }) {
    const response = await apiClient.register(input);
    await applySession(response);
  }

  async function logout() {
    try {
      await apiClient.logout();
    } finally {
      await clearSession();
    }
  }

  return (
    <AuthContext.Provider value={{ status, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
