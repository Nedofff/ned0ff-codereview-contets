import { GetAuthToken, getHttpClient } from "@/core/http-client";

export const getBackendClient = (getAuthToken: GetAuthToken) =>
  getHttpClient(
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api",
    getAuthToken
  );
