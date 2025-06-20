import { backendClient } from "../backend-client";
import type { HttpClient } from "@/core/http-client";
import type {
  ProjectDto,
  Project,
  ProjectCreate,
  ProjectFilters,
} from "./pet-projects-dto";
import {
  mapProjectFromDto,
  mapProjectToDto,
  mapProjectFiltersToDto,
} from "./pet-projects-mapper";

class ProjectsApi {
  private readonly basePath = "/projects";

  constructor(private readonly client: HttpClient) {}

  async getProjects(filters?: ProjectFilters): Promise<Project[]> {
    const params = new URLSearchParams();

    if (filters) {
      const dtoFilters = mapProjectFiltersToDto(filters);
      Object.entries(dtoFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }

    const url = `${this.basePath}/${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    const response = await this.client.get<ProjectDto[]>(url);

    if (!response.data) {
      throw new Error("No data received");
    }

    return response.data.map(mapProjectFromDto);
  }

  async getProject(projectId: number): Promise<Project> {
    const response = await this.client.get<ProjectDto>(
      `${this.basePath}/${projectId}`
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapProjectFromDto(response.data);
  }

  async createProject(project: ProjectCreate): Promise<Project> {
    const dtoProject = mapProjectToDto(project);
    const response = await this.client.post<ProjectDto>(
      `${this.basePath}/`,
      dtoProject
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapProjectFromDto(response.data);
  }

  async updateProject(
    projectId: number,
    project: ProjectCreate
  ): Promise<Project> {
    const dtoProject = mapProjectToDto(project);
    const response = await this.client.put<ProjectDto>(
      `${this.basePath}/${projectId}`,
      dtoProject
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapProjectFromDto(response.data);
  }

  async deleteProject(projectId: number): Promise<void> {
    await this.client.delete<void>(`${this.basePath}/${projectId}`);
  }
}

export const projectsApi = new ProjectsApi(backendClient);
