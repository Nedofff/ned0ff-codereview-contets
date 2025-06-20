import { backendClient } from "../backend-client";
import type { ApiResponse, HttpClient } from "@/core/http-client";
import type {
  Question,
  QuestionCreate,
  QuestionFilters,
} from "./questions-dto";

class QuestionsApi {
  private readonly basePath = "/questions";

  constructor(private readonly client: HttpClient) {}

  async getQuestions(
    filters?: QuestionFilters
  ): Promise<ApiResponse<Question[]>> {
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
    return this.client.get<Question[]>(url);
  }

  async getQuestion(questionId: number): Promise<ApiResponse<Question>> {
    return this.client.get<Question>(`${this.basePath}/${questionId}`);
  }

  async createQuestion(
    question: QuestionCreate
  ): Promise<ApiResponse<Question>> {
    return this.client.post<Question>(`${this.basePath}/`, question);
  }

  async updateQuestion(
    questionId: number,
    question: Question
  ): Promise<ApiResponse<Question>> {
    return this.client.put<Question>(
      `${this.basePath}/${questionId}`,
      question
    );
  }

  async deleteQuestion(questionId: number): Promise<ApiResponse<void>> {
    return this.client.delete<void>(`${this.basePath}/${questionId}`);
  }
}

export const questionsApi = new QuestionsApi(backendClient);
