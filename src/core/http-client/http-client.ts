import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiError, ApiResponse } from "./http-client-types";

export class HttpClient {
  private client: AxiosInstance;
  private authToken: string | null = null;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 2000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor для добавления токена авторизации
    this.client.interceptors.request.use(
      (config) => {
        if (this.authToken) {
          config.headers.Authorization = `Bearer ${this.authToken}`;
        }
        return config;
      },
      (error: unknown) => Promise.reject(error)
    );

    // Response interceptor для обработки ошибок
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: unknown) => {
        if (!axios.isAxiosError(error)) {
          return Promise.reject(error);
        }

        const apiError: ApiError = {
          message:
            error.response?.data?.detail ?? error.message ?? "Произошла ошибка",
          status: error.response?.status,
          details: error.response?.data,
        };
        return Promise.reject(apiError);
      }
    );
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  clearAuthToken() {
    this.authToken = null;
  }

  async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.get<T>(url, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  async post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  async put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.put<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  async delete<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.delete<T>(url, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  async postForm<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post<T>(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }
}

export const getHttpClient = (baseURL: string) => new HttpClient(baseURL);
