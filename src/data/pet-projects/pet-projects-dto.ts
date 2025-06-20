import { PaginationParams } from "@/core/http-client";

export interface Project {
  id: number;
  author_link: string;
  tags: string;
  project_link: string;
  description: string;
  stack: string;
}

export interface ProjectCreate {
  author_link: string;
  tags: string;
  project_link: string;
  description: string;
  stack: string;
}

export interface ProjectFilters extends PaginationParams {
  search?: string | null;
  author_link?: string | null;
  project_link?: string | null;
  tags?: string | null;
  stack?: string | null;
}
