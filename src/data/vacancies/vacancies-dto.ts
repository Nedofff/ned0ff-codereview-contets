import { PaginationParams } from "@/core/http-client";

export interface Vacancy {
  id: number;
  active: boolean;
  external_id: string | null;
  company_name: string;
  title: string;
  salary: string | null;
  location: string | null;
  speciality: string;
  internship: boolean;
  remote: boolean;
  url: string;
  description: string;
  source: string;
  image: string | null;
  date_publication: string;
}

export interface VacancyCreate {
  active?: boolean;
  external_id: string | null;
  company_name: string;
  title: string;
  salary: string | null;
  location: string | null;
  speciality: string;
  internship?: boolean;
  remote?: boolean;
  url: string;
  description: string;
  source: string;
  image: string | null;
  date_publication: string;
}

export interface VacancyFilters extends PaginationParams {
  search?: string | null;
  speciality?: string | null;
  location?: string | null;
  company_name?: string | null;
}
