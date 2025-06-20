import { backendClient } from "../backend-client";
import type { ApiResponse, HttpClient } from "@/core/http-client";
import type {
  TestTask,
  TestTaskCreate,
  TestTaskFilters,
} from "./test-tasks-dto";

class TestTasksApi {
  private readonly basePath = "/testtasks";

  constructor(private readonly client: HttpClient) {}

  async getTestTasks(
    filters?: TestTaskFilters
  ): Promise<ApiResponse<TestTask[]>> {
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
    return this.client.get<TestTask[]>(url);
  }

  async getTestTask(taskId: number): Promise<ApiResponse<TestTask>> {
    return this.client.get<TestTask>(`${this.basePath}/${taskId}`);
  }

  async createTestTask(
    testTask: TestTaskCreate
  ): Promise<ApiResponse<TestTask>> {
    return this.client.post<TestTask>(`${this.basePath}/`, testTask);
  }

  async updateTestTask(
    taskId: number,
    testTask: TestTask
  ): Promise<ApiResponse<TestTask>> {
    return this.client.put<TestTask>(`${this.basePath}/${taskId}`, testTask);
  }

  async deleteTestTask(taskId: number): Promise<ApiResponse<void>> {
    return this.client.delete<void>(`${this.basePath}/${taskId}`);
  }
}

export const testTasksApi = new TestTasksApi(backendClient);
