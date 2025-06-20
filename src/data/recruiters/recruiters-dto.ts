import { PaginationParams } from "@/core/http-client";

// DTO типы (для бекенда)
export interface RecruiterDto {
  id: number;
  name: string;
  contact: string;
  company: string;
  description: string | null;
}

export interface RecruiterCreateDto {
  name: string;
  contact: string;
  company: string;
  description: string | null;
}

export interface RecruiterFiltersDto extends PaginationParams {
  search?: string | null;
  contact?: string | null;
  company?: string | null;
  description?: string | null;
}

// Клиентские типы (для UI)
export interface Recruiter {
  id: number;
  name: string;
  contact: string;
  company: string;
  description: string | null;
}

export interface RecruiterCreate {
  name: string;
  contact: string;
  company: string;
  description: string | null;
}

export interface RecruiterFilters extends PaginationParams {
  search?: string | null;
  contact?: string | null;
  company?: string | null;
  description?: string | null;
}
