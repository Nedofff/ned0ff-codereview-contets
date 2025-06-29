import { getAuthApiNext, LoginRequest } from "@/data/auth";
import { authCookieService } from "./cookie/auth-cookie";
export const getIsAuth = () => {
  const token = authCookieService.getToken();
  return !!token;
};
export const login = async ({ username, password }: LoginRequest) => {
  const response = await getAuthApiNext().login({ username, password });
  authCookieService.setToken(response.accessToken);
};
export const signup = async ({ username, password }: LoginRequest) => {
  const response = await getAuthApiNext().login({ username, password });
  authCookieService.setToken(response.accessToken);
};
export const logout = async () => {
  authCookieService.removeToken();
  window.location.reload();
};
export const selectByAuth = <T, K>({
  ifAuth,
  ifNotAuth,
}: {
  ifAuth: T;
  ifNotAuth: K;
}) => {
  const isAuth = getIsAuth();
  if (isAuth) {
    return ifAuth;
  } else {
    return ifNotAuth;
  }
};
