import type {
  VacancyDto,
  VacancyCreateDto,
  VacancyFiltersDto,
  Vacancy,
  VacancyCreate,
  VacancyFilters,
} from "./vacancies-dto";

// Преобразование из DTO в клиентский тип
export const mapVacancyFromDto = (dto: VacancyDto): Vacancy => ({
  id: dto.id,
  active: dto.active,
  externalId: dto.external_id,
  companyName: dto.company_name,
  title: dto.title,
  salary: dto.salary,
  location: dto.location,
  specialty: dto.speciality,
  internship: dto.internship,
  remote: dto.remote,
  url: dto.url,
  description: dto.description,
  source: dto.source,
  image: dto.image,
  datePublication: dto.date_publication,
});

// Преобразование из клиентского типа в DTO
export const mapVacancyToDto = (vacancy: VacancyCreate): VacancyCreateDto => ({
  active: vacancy.active,
  external_id: vacancy.externalId,
  company_name: vacancy.companyName,
  title: vacancy.title,
  salary: vacancy.salary,
  location: vacancy.location,
  speciality: vacancy.specialty,
  internship: vacancy.internship,
  remote: vacancy.remote,
  url: vacancy.url,
  description: vacancy.description,
  source: vacancy.source,
  image: vacancy.image,
  date_publication: vacancy.datePublication,
});

// Преобразование фильтров
export const mapVacancyFiltersToDto = (
  filters: VacancyFilters
): VacancyFiltersDto => ({
  ...filters,
  speciality: filters.specialty,
  company_name: filters.companyName,
});
