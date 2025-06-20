import { PaginationParams } from "@/core/http-client";

// DTO типы (для бекенда)
export interface TestTaskDto {
  id: number;
  company: string;
  task: string;
  difficulty: number;
  position: string;
  solution: string | null;
  tags: string;
}

export interface TestTaskCreateDto {
  company: string;
  task: string;
  difficulty: number;
  position: string;
  solution: string | null;
  tags: string;
}

export interface TestTaskFiltersDto extends PaginationParams {
  search?: string | null;
  company?: string | null;
  position?: string | null;
  tags?: string | null;
}

// Клиентские типы (для UI)
export interface TestTask {
  id: number;
  company: string;
  task: string;
  difficulty: number;
  position: string;
  solution: string | null;
  tags: string;
}

export interface TestTaskCreate {
  company: string;
  task: string;
  difficulty: number;
  position: string;
  solution: string | null;
  tags: string;
}

export interface TestTaskFilters extends PaginationParams {
  search?: string | null;
  company?: string | null;
  position?: string | null;
  tags?: string | null;
}
