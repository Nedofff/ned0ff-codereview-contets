import { getBackendClient } from "../backend-client";
import type {
  GetAuthToken,
  HttpClient,
  PaginationModel,
} from "@/core/http-client";
import type {
  QuestionDto,
  Question,
  QuestionCreate,
  QuestionFilters,
} from "./questions-dto";
import {
  mapQuestionFromDto,
  mapQuestionToDto,
  mapQuestionFiltersToDto,
} from "./questions-mapper";

class QuestionsApi {
  private readonly basePath = "/questions";

  constructor(private readonly client: HttpClient) {}

  async getAll(filters?: QuestionFilters): Promise<PaginationModel<Question>> {
    const params = new URLSearchParams();

    if (filters) {
      const dtoFilters = mapQuestionFiltersToDto(filters);
      Object.entries(dtoFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }

    const url = `${this.basePath}/${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    const response = await this.client.get<PaginationModel<QuestionDto>>(url);

    if (!response.data) {
      throw new Error("No data received");
    }

    return {
      items: response.data.items.map(mapQuestionFromDto),
      total: response.data.total,
      skip: response.data.skip,
      limit: response.data.limit,
    };
  }

  async getQuestion(questionId: number): Promise<Question> {
    const response = await this.client.get<QuestionDto>(
      `${this.basePath}/${questionId}`
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapQuestionFromDto(response.data);
  }

  async createQuestion(question: QuestionCreate): Promise<Question> {
    const dtoQuestion = mapQuestionToDto(question);
    const response = await this.client.post<QuestionDto>(
      `${this.basePath}/`,
      dtoQuestion
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapQuestionFromDto(response.data);
  }

  async updateQuestion(
    questionId: number,
    question: QuestionCreate
  ): Promise<Question> {
    const dtoQuestion = mapQuestionToDto(question);
    const response = await this.client.put<QuestionDto>(
      `${this.basePath}/${questionId}`,
      dtoQuestion
    );

    if (!response.data) {
      throw new Error("No data received");
    }

    return mapQuestionFromDto(response.data);
  }

  async deleteQuestion(questionId: number): Promise<void> {
    await this.client.delete<void>(`${this.basePath}/${questionId}`);
  }
}

export const getQuestionsApi = (getAuthToken: GetAuthToken) =>
  new QuestionsApi(getBackendClient(getAuthToken));
