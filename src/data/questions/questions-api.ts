import { backendClient } from "../backend-client";
import type { HttpClient } from "@/core/http-client";
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

  async getQuestions(filters?: QuestionFilters): Promise<Question[]> {
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

    const response = await this.client.get<QuestionDto[]>(url);

    if (!response.data) {
      throw new Error("No data received");
    }

    return response.data.map(mapQuestionFromDto);
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

export const questionsApi = new QuestionsApi(backendClient);
