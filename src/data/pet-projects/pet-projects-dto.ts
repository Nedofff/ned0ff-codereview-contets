import { PaginationParams } from "@/core/http-client";

// DTO типы (для бекенда)
export interface ProjectDto {
  id: number;
  author_link: string;
  tags: string;
  project_link: string;
  description: string;
  stack: string;
}

export interface ProjectCreateDto {
  author_link: string;
  tags: string;
  project_link: string;
  description: string;
  stack: string;
}

export interface ProjectFiltersDto extends PaginationParams {
  search?: string | null;
  author_link?: string | null;
  project_link?: string | null;
  tags?: string | null;
  stack?: string | null;
}

// Клиентские типы (для UI)
export interface Project {
  id: number;
  authorLink: string;
  tags: string;
  projectLink: string;
  description: string;
  stack: string;
}

export interface ProjectCreate {
  authorLink: string;
  tags: string;
  projectLink: string;
  description: string;
  stack: string;
}

export interface ProjectFilters extends PaginationParams {
  search?: string | null;
  authorLink?: string | null;
  projectLink?: string | null;
  tags?: string | null;
  stack?: string | null;
}
