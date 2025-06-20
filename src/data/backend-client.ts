import { getHttpClient } from "@/core/http-client";

export const backendClient = getHttpClient(
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
);
