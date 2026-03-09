import { useAppContext } from "@/store/appContext";

export function useAuth() {
  const { auth, services } = useAppContext();

  return {
    accessToken: auth.accessToken,
    login: services.auth.login,
    logout: services.auth.logout,
    register: services.auth.register,
    status: auth.status,
    user: auth.user,
  };
}
