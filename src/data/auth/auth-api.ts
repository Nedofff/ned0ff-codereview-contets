import { backendClient } from "../backend-client";
import type { HttpClient } from "@/core/http-client";
import type { TokenResponseDto, LoginRequest, TokenResponse } from "./auth-dto";
import { mapLoginRequestToDto, mapTokenResponseFromDto } from "./auth-mapper";

class AuthApi {
  private readonly basePath = "/auth";

  constructor(private readonly client: HttpClient) {}

  async login(credentials: LoginRequest): Promise<TokenResponse> {
    const dtoCredentials = mapLoginRequestToDto(credentials);
    const formData = new URLSearchParams();
    formData.append("username", dtoCredentials.username);
    formData.append("password", dtoCredentials.password);

    if (dtoCredentials.grant_type) {
      formData.append("grant_type", dtoCredentials.grant_type);
    }
    if (dtoCredentials.scope) {
      formData.append("scope", dtoCredentials.scope);
    }
    if (dtoCredentials.client_id) {
      formData.append("client_id", dtoCredentials.client_id);
    }
    if (dtoCredentials.client_secret) {
      formData.append("client_secret", dtoCredentials.client_secret);
    }

    const response = await this.client.postForm<TokenResponseDto>(
      `${this.basePath}/token`,
      formData
    );

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

  // Метод для авторизации и сохранения токена
  async authorize(credentials: LoginRequest): Promise<TokenResponse> {
    const tokenData = await this.login(credentials);
    const token = tokenData.accessToken;

    // Сохраняем токен в API клиенте
    this.client.setAuthToken(token);

    // Можно также сохранить в localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }

    return tokenData;
  }

  // Метод для выхода из системы
  logout(): void {
    this.client.clearAuthToken();

    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
    }
  }

  // Метод для восстановления токена из localStorage
  restoreAuth(): boolean {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      if (token) {
        this.client.setAuthToken(token);
        return true;
      }
    }
    return false;
  }
}

export const authApi = new AuthApi(backendClient);
