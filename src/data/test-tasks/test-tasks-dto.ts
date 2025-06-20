import { PaginationParams } from "@/core/http-client";

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
