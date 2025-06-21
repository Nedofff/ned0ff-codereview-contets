import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { COOKIE_AUTH_TOKEN } from "./consts";

export const getAuthTokenServer = async (
  cookieStore: Promise<ReadonlyRequestCookies>
) => {
  const cookie = await cookieStore;
  return () => cookie.get(COOKIE_AUTH_TOKEN)?.value;
};
