import { getBackendClient, getNextApi } from "../backend-client";
import { type GetAuthToken, type HttpClient } from "@/core/http-client";
import type {
  TokenResponseDto,
  LoginRequest,
  TokenResponse,
  LoginRequestDto,
} from "./auth-dto";
import { mapLoginRequestToDto, mapTokenResponseFromDto } from "./auth-mapper";
import { logger } from "@/core/logger";
class AuthApi {
  private readonly basePath = "/auth";
  constructor(private readonly client: HttpClient) {}
  async login(credentials: LoginRequest): Promise<TokenResponse> {
    logger.info("login auth-api", credentials);
    const dtoCredentials = mapLoginRequestToDto(credentials);
    const formData = new FormData();
    for (const key in dtoCredentials) {
      const keyDto = key as keyof LoginRequestDto;
      if (!dtoCredentials[keyDto]) {
        continue;
      }
      formData.append(key, dtoCredentials[keyDto]);
    }
    logger.info("login auth-api formData", formData);
    const response = await this.client.postForm<TokenResponseDto>(
      `${this.basePath}/token`,
      formData.keys()
    );
    logger.info("login auth-api response", response);
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapTokenResponseFromDto(response.data);
  }
  async getMe(): Promise<unknown> {
    const response = await this.client.get<unknown>(
      `${this.basePath}/users/me/`
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return response.data;
  }
  async authorize(credentials: LoginRequest): Promise<TokenResponse> {
    const tokenData = await this.login(credentials);
    const token = tokenData.accessToken;
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
    return tokenData;
  }
}
export const getAuthApiNext = (getAuthToken: GetAuthToken = () => null) =>
  new AuthApi(getNextApi(getAuthToken));

export const getAuthApiBackend = (getAuthToken: GetAuthToken = () => null) =>
  new AuthApi(getBackendClient(getAuthToken));
