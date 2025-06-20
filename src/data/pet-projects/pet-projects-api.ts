import { backendClient } from "../backend-client";
import type { ApiResponse, HttpClient } from "@/core/http-client";
import type {
  Project,
  ProjectCreate,
  ProjectFilters,
} from "./pet-projects-dto";

class ProjectsApi {
  private readonly basePath = "/projects";

  constructor(private readonly client: HttpClient) {}

  async getProjects(filters?: ProjectFilters): Promise<ApiResponse<Project[]>> {
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
    return this.client.get<Project[]>(url);
  }

  async getProject(projectId: number): Promise<ApiResponse<Project>> {
    return this.client.get<Project>(`${this.basePath}/${projectId}`);
  }

  async createProject(project: ProjectCreate): Promise<ApiResponse<Project>> {
    return this.client.post<Project>(`${this.basePath}/`, project);
  }

  async updateProject(
    projectId: number,
    project: Project
  ): Promise<ApiResponse<Project>> {
    return this.client.put<Project>(`${this.basePath}/${projectId}`, project);
  }

  async deleteProject(projectId: number): Promise<ApiResponse<void>> {
    return this.client.delete<void>(`${this.basePath}/${projectId}`);
  }
}

export const projectsApi = new ProjectsApi(backendClient);
