import { getBackendClient } from "../backend-client";
import type { GetAuthToken, HttpClient } from "@/core/http-client";
import type {
  RecruiterDto,
  Recruiter,
  RecruiterCreate,
  RecruiterFilters,
} from "./recruiters-dto";
import {
  mapRecruiterFromDto,
  mapRecruiterToDto,
  mapRecruiterFiltersToDto,
} from "./recruiters-mapper";
class RecruitersApi {
  private readonly basePath = "/recruiters";
  constructor(private readonly client: HttpClient) {}
  async getRecruiters(filters?: RecruiterFilters): Promise<Recruiter[]> {
    const params = new URLSearchParams();
    if (filters) {
      const dtoFilters = mapRecruiterFiltersToDto(filters);
      Object.entries(dtoFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }
    const url = `${this.basePath}/${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    const response = await this.client.get<RecruiterDto[]>(url);
    if (!response.data) {
      throw new Error("No data received");
    }
    return response.data.map(mapRecruiterFromDto);
  }
  async getRecruiter(recruiterId: number): Promise<Recruiter> {
    const response = await this.client.get<RecruiterDto>(
      `${this.basePath}/${recruiterId}`
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapRecruiterFromDto(response.data);
  }
  async createRecruiter(recruiter: RecruiterCreate): Promise<Recruiter> {
    const dtoRecruiter = mapRecruiterToDto(recruiter);
    const response = await this.client.post<RecruiterDto>(
      `${this.basePath}/`,
      dtoRecruiter
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapRecruiterFromDto(response.data);
  }
  async updateRecruiter(
    recruiterId: number,
    recruiter: RecruiterCreate
  ): Promise<Recruiter> {
    const dtoRecruiter = mapRecruiterToDto(recruiter);
    const response = await this.client.put<RecruiterDto>(
      `${this.basePath}/${recruiterId}`,
      dtoRecruiter
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapRecruiterFromDto(response.data);
  }
  async deleteRecruiter(recruiterId: number): Promise<void> {
    await this.client.delete<void>(`${this.basePath}/${recruiterId}`);
  }
}
export const recruitersApi = (getAuthToken: GetAuthToken) =>
  new RecruitersApi(getBackendClient(getAuthToken));
