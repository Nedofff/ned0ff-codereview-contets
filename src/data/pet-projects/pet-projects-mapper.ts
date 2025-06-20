import type {
  ProjectDto,
  ProjectCreateDto,
  ProjectFiltersDto,
  Project,
  ProjectCreate,
  ProjectFilters,
} from "./pet-projects-dto";

// Преобразование из DTO в клиентский тип
export const mapProjectFromDto = (dto: ProjectDto): Project => ({
  id: dto.id,
  authorLink: dto.author_link,
  tags: dto.tags,
  projectLink: dto.project_link,
  description: dto.description,
  stack: dto.stack,
});

// Преобразование из клиентского типа в DTO
export const mapProjectToDto = (project: ProjectCreate): ProjectCreateDto => ({
  author_link: project.authorLink,
  tags: project.tags,
  project_link: project.projectLink,
  description: project.description,
  stack: project.stack,
});

// Преобразование фильтров
export const mapProjectFiltersToDto = (
  filters: ProjectFilters
): ProjectFiltersDto => ({
  ...filters,
  author_link: filters.authorLink,
  project_link: filters.projectLink,
});
