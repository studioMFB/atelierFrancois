import type { AuthResponse } from "@atelierfrancois/lilwud-sdk";
import { useEffect } from "react";

import {
  fetchCurrentUser,
  loginWithPassword,
  logoutAccount,
  registerAccount,
} from "@/services/auth";
import {
  ACTION_TYPE,
  AUTH_LEGACY_STORAGE_KEY,
  AUTH_SESSION_STORAGE_KEY,
  type AppDispatch,
} from "@/store/appReducer";
import type { AuthService } from "@/store/appContext";
import type { LilWudAppState } from "@/types/app";
import {
  setApiAccessToken,
  setApiBaseUrl,
  setApiUnauthorizedHandler,
} from "@/lib/api";

function persistAccessToken(token: string) {
  window.localStorage.setItem(AUTH_SESSION_STORAGE_KEY, token);
  window.localStorage.removeItem(AUTH_LEGACY_STORAGE_KEY);
}

function clearPersistedAccessToken() {
  window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
  window.localStorage.removeItem(AUTH_LEGACY_STORAGE_KEY);
}

function applySession(response: AuthResponse, dispatch: AppDispatch) {
  persistAccessToken(response.accessToken);
  setApiAccessToken(response.accessToken);
  dispatch({
    type: ACTION_TYPE.SET_AUTH_SESSION,
    payload: {
      accessToken: response.accessToken,
      user: response.user,
    },
  });
}

export function useHydratorsAuth(
  state: LilWudAppState,
  dispatch: AppDispatch,
): AuthService {
  useEffect(() => {
    setApiBaseUrl(state.config.apiBaseUrl);
  }, [state.config.apiBaseUrl]);

  useEffect(() => {
    setApiUnauthorizedHandler(() => {
      clearPersistedAccessToken();
      setApiAccessToken(null);
      dispatch({ type: ACTION_TYPE.CLEAR_AUTH_SESSION });
    });
  }, [dispatch]);

  useEffect(() => {
    setApiAccessToken(state.auth.accessToken);

    if (!state.auth.accessToken) {
      dispatch({ type: ACTION_TYPE.SET_AUTH_STATUS, payload: "anonymous" });
      return;
    }

    let ignore = false;

    async function bootstrapSession() {
      dispatch({ type: ACTION_TYPE.SET_AUTH_STATUS, payload: "loading" });

      try {
        const user = await fetchCurrentUser();
        if (!ignore) {
          dispatch({
            type: ACTION_TYPE.SET_AUTH_SESSION,
            payload: {
              accessToken: state.auth.accessToken!,
              user,
            },
          });
        }
      } catch (error) {
        if (!ignore) {
          clearPersistedAccessToken();
          setApiAccessToken(null);
          dispatch({ type: ACTION_TYPE.CLEAR_AUTH_SESSION });
          dispatch({
            type: ACTION_TYPE.SET_AUTH_ERROR,
            payload: error instanceof Error ? error.message : null,
          });
        }
      }
    }

    void bootstrapSession();

    return () => {
      ignore = true;
    };
  }, [dispatch, state.auth.accessToken]);

  return {
    async login(input) {
      const response = await loginWithPassword(input);
      applySession(response, dispatch);
    },
    async register(input) {
      const response = await registerAccount(input);
      applySession(response, dispatch);
    },
    async logout() {
      try {
        await logoutAccount();
      } finally {
        clearPersistedAccessToken();
        setApiAccessToken(null);
        dispatch({ type: ACTION_TYPE.CLEAR_AUTH_SESSION });
      }
    },
  };
}
