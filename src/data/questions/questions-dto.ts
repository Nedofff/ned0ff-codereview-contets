import { PaginationParams } from "@/core/http-client";

export interface Question {
  id: number;
  stack: string;
  question: string;
  position: string;
  freq: number;
  answer: string | null;
  tags: string;
}

export interface QuestionCreate {
  stack: string;
  question: string;
  position: string;
  freq: number;
  answer: string | null;
  tags: string;
}

export interface QuestionFilters extends PaginationParams {
  search?: string | null;
  stack?: string | null;
  position?: string | null;
  tags?: string | null;
}
