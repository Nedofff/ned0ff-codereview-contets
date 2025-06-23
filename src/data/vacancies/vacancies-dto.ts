import { PaginationModel, PaginationParams } from "@/core/http-client";
export interface VacancyDto {
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
export type VacancyAll = PaginationModel<VacancyDto>;
export interface VacancyCreateDto {
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
export interface VacancyFiltersDto extends PaginationParams {
  search?: string | null;
  speciality?: string | null;
  location?: string | null;
  company_name?: string | null;
}
export interface Vacancy {
  id: number;
  active: boolean;
  externalId: string | null;
  companyName: string;
  title: string;
  salary: string | null;
  location: string | null;
  specialty: string;
  internship: boolean;
  remote: boolean;
  url: string;
  description: string;
  source: string;
  image: string | null;
  datePublication: string;
  similarVacancies: [
    {
      id: number;
      title: string;
      companyName: string;
    },
    {
      id: number;
      title: string;
      companyName: string;
    }
  ];
}
export interface VacancyCreate {
  active?: boolean;
  externalId: string | null;
  companyName: string;
  title: string;
  salary: string | null;
  location: string | null;
  specialty: string;
  internship?: boolean;
  remote?: boolean;
  url: string;
  description: string;
  source: string;
  image: string | null;
  datePublication: string;
}
export interface VacancyFilters extends PaginationParams {
  search?: string | null;
  specialty?: string | null;
  location?: string | null;
  companyName?: string | null;
}
