import { getBackendClient } from "../backend-client";
import type { GetAuthToken, HttpClient } from "@/core/http-client";
import type {
  TestTaskDto,
  TestTask,
  TestTaskCreate,
  TestTaskFilters,
} from "./test-tasks-dto";
import {
  mapTestTaskFromDto,
  mapTestTaskToDto,
  mapTestTaskFiltersToDto,
} from "./test-tasks-mapper";
class TestTasksApi {
  private readonly basePath = "/testtasks";
  constructor(private readonly client: HttpClient) {}
  async getTestTasks(filters?: TestTaskFilters): Promise<TestTask[]> {
    const params = new URLSearchParams();
    if (filters) {
      const dtoFilters = mapTestTaskFiltersToDto(filters);
      Object.entries(dtoFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }
    const url = `${this.basePath}/${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    const response = await this.client.get<TestTaskDto[]>(url);
    if (!response.data) {
      throw new Error("No data received");
    }
    return response.data.map(mapTestTaskFromDto);
  }
  async getTestTask(taskId: number): Promise<TestTask> {
    const response = await this.client.get<TestTaskDto>(
      `${this.basePath}/${taskId}`
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapTestTaskFromDto(response.data);
  }
  async createTestTask(testTask: TestTaskCreate): Promise<TestTask> {
    const dtoTestTask = mapTestTaskToDto(testTask);
    const response = await this.client.post<TestTaskDto>(
      `${this.basePath}/`,
      dtoTestTask
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapTestTaskFromDto(response.data);
  }
  async updateTestTask(
    taskId: number,
    testTask: TestTaskCreate
  ): Promise<TestTask> {
    const dtoTestTask = mapTestTaskToDto(testTask);
    const response = await this.client.put<TestTaskDto>(
      `${this.basePath}/${taskId}`,
      dtoTestTask
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapTestTaskFromDto(response.data);
  }
  async deleteTestTask(taskId: number): Promise<void> {
    await this.client.delete<void>(`${this.basePath}/${taskId}`);
  }
}
export const testTasksApi = (getAuthToken: GetAuthToken) =>
  new TestTasksApi(getBackendClient(getAuthToken));
