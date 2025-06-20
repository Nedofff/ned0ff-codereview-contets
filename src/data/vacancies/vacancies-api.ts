import { backendClient } from "../backend-client";
import type { HttpClient, PaginationModel } from "@/core/http-client";
import type {
  VacancyDto,
  Vacancy,
  VacancyCreate,
  VacancyFilters,
} from "./vacancies-dto";
import {
  mapVacancyFromDto,
  mapVacancyToDto,
  mapVacancyFiltersToDto,
} from "./vacancies-mapper";

class VacanciesApi {
  private readonly basePath = "/vacancies";

  constructor(private readonly client: HttpClient) {}

  async getAllVacancies(
    filters?: VacancyFilters
  ): Promise<PaginationModel<Vacancy>> {
    const params = new URLSearchParams();

    if (filters) {
      const dtoFilters = mapVacancyFiltersToDto(filters);
      Object.entries(dtoFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }

    const url = `${this.basePath}/${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    const response = await this.client.get<PaginationModel<VacancyDto>>(url);

    if (!response.data) {
      throw new Error("No data received");
    }

    return {
      ...response.data,
      items: response.data.items.map(mapVacancyFromDto),
    };
  }

  async getVacancy(vacancyId: number): Promise<Vacancy> {
    const response = await this.client.get<VacancyDto>(
      `${this.basePath}/${vacancyId}`
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapVacancyFromDto(response.data);
  }

  async createVacancy(vacancy: VacancyCreate): Promise<Vacancy> {
    const dtoVacancy = mapVacancyToDto(vacancy);
    const response = await this.client.post<VacancyDto>(
      `${this.basePath}/`,
      dtoVacancy
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapVacancyFromDto(response.data);
  }

  async updateVacancy(
    vacancyId: number,
    vacancy: VacancyCreate
  ): Promise<Vacancy> {
    const dtoVacancy = mapVacancyToDto(vacancy);
    const response = await this.client.put<VacancyDto>(
      `${this.basePath}/${vacancyId}`,
      dtoVacancy
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapVacancyFromDto(response.data);
  }

  async deleteVacancy(vacancyId: number): Promise<void> {
    await this.client.delete<void>(`${this.basePath}/${vacancyId}`);
  }
}

export const vacanciesApi = new VacanciesApi(backendClient);
