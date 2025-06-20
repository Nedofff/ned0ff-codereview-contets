import type {
  RecruiterDto,
  RecruiterCreateDto,
  RecruiterFiltersDto,
  Recruiter,
  RecruiterCreate,
  RecruiterFilters,
} from "./recruiters-dto";

// Преобразование из DTO в клиентский тип
export const mapRecruiterFromDto = (dto: RecruiterDto): Recruiter => ({
  id: dto.id,
  name: dto.name,
  contact: dto.contact,
  company: dto.company,
  description: dto.description,
});

// Преобразование из клиентского типа в DTO
export const mapRecruiterToDto = (
  recruiter: RecruiterCreate
): RecruiterCreateDto => ({
  name: recruiter.name,
  contact: recruiter.contact,
  company: recruiter.company,
  description: recruiter.description,
});

// Преобразование фильтров (в данном случае одинаковые)
export const mapRecruiterFiltersToDto = (
  filters: RecruiterFilters
): RecruiterFiltersDto => ({
  ...filters,
});
