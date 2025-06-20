import { PaginationParams } from "@/core/http-client";

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
