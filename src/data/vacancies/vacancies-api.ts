import { backendClient } from "../backend-client";
import type { ApiResponse, HttpClient } from "@/core/http-client";
import type { Vacancy, VacancyCreate, VacancyFilters } from "./vacancies-dto";

class VacanciesApi {
  private readonly basePath = "/vacancies";

  constructor(private readonly client: HttpClient) {}

  async getVacancies(
    filters?: VacancyFilters
  ): Promise<ApiResponse<Vacancy[]>> {
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
    return this.client.get<Vacancy[]>(url);
  }

  async getVacancy(vacancyId: number): Promise<ApiResponse<Vacancy>> {
    return this.client.get<Vacancy>(`${this.basePath}/${vacancyId}`);
  }

  async createVacancy(vacancy: VacancyCreate): Promise<ApiResponse<Vacancy>> {
    return this.client.post<Vacancy>(`${this.basePath}/`, vacancy);
  }

  async updateVacancy(
    vacancyId: number,
    vacancy: Vacancy
  ): Promise<ApiResponse<Vacancy>> {
    return this.client.put<Vacancy>(`${this.basePath}/${vacancyId}`, vacancy);
  }

  async deleteVacancy(vacancyId: number): Promise<ApiResponse<void>> {
    return this.client.delete<void>(`${this.basePath}/${vacancyId}`);
  }
}

export const vacanciesApi = new VacanciesApi(backendClient);
