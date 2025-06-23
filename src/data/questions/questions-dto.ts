import { PaginationParams } from "@/core/http-client";

// DTO типы (для бекенда)
export interface QuestionDto {
  id: number;
  stack: string;
  question: string;
  position: string;
  freq: number;
  answer: string | null;
  tags: string;
}

export interface QuestionCreateDto {
  stack: string;
  question: string;
  position: string;
  freq: number;
  answer: string | null;
  tags: string;
}

export interface QuestionFiltersDto extends PaginationParams {
  search?: string | null;
  stack?: string | null;
  position?: string | null;
  tags?: string | null;
}

// Клиентские типы (для UI)
export interface Question {
  id: number;
  stack: string;
  question: string;
  position: string;
  freq: number;
  answer: string | null;
  tags: string;
  next: string | null;
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
