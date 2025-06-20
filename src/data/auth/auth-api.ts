import { backendClient } from "../backend-client";
import type { ApiResponse, HttpClient } from "@/core/http-client";
import type { LoginRequest, TokenResponse } from "./auth-dto";

class AuthApi {
  private readonly basePath = "/auth";

  constructor(private readonly client: HttpClient) {}

  async login(credentials: LoginRequest): Promise<ApiResponse<TokenResponse>> {
    const formData = new URLSearchParams();
    formData.append("username", credentials.username);
    formData.append("password", credentials.password);

    if (credentials.grant_type) {
      formData.append("grant_type", credentials.grant_type);
    }
    if (credentials.scope) {
      formData.append("scope", credentials.scope);
    }
    if (credentials.client_id) {
      formData.append("client_id", credentials.client_id);
    }
    if (credentials.client_secret) {
      formData.append("client_secret", credentials.client_secret);
    }

    return this.client.postForm<TokenResponse>(
      `${this.basePath}/token`,
      formData
    );
  }

  async getMe(): Promise<ApiResponse<unknown>> {
    return this.client.get<unknown>(`${this.basePath}/users/me/`);
  }

  // Метод для авторизации и сохранения токена
  async authorize(credentials: LoginRequest): Promise<TokenResponse> {
    const response = await this.login(credentials);
    const token = response.data.access_token;

    // Сохраняем токен в API клиенте
    this.client.setAuthToken(token);

    // Можно также сохранить в localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }

    return response.data;
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
