import { backendClient } from "../backend-client";
import type { ApiResponse, HttpClient } from "@/core/http-client";
import type {
  Recruiter,
  RecruiterCreate,
  RecruiterFilters,
} from "./recruiters-dto";

class RecruitersApi {
  private readonly basePath = "/recruiters";

  constructor(private readonly client: HttpClient) {}

  async getRecruiters(
    filters?: RecruiterFilters
  ): Promise<ApiResponse<Recruiter[]>> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }

    const url = `${this.basePath}/${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    return this.client.get<Recruiter[]>(url);
  }

  async getRecruiter(recruiterId: number): Promise<ApiResponse<Recruiter>> {
    return this.client.get<Recruiter>(`${this.basePath}/${recruiterId}`);
  }

  async createRecruiter(
    recruiter: RecruiterCreate
  ): Promise<ApiResponse<Recruiter>> {
    return this.client.post<Recruiter>(`${this.basePath}/`, recruiter);
  }

  async updateRecruiter(
    recruiterId: number,
    recruiter: Recruiter
  ): Promise<ApiResponse<Recruiter>> {
    return this.client.put<Recruiter>(
      `${this.basePath}/${recruiterId}`,
      recruiter
    );
  }

  async deleteRecruiter(recruiterId: number): Promise<ApiResponse<void>> {
    return this.client.delete<void>(`${this.basePath}/${recruiterId}`);
  }
}

export const recruitersApi = new RecruitersApi(backendClient);
