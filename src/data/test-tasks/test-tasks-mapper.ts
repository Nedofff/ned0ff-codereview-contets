import type {
  TestTaskDto,
  TestTaskCreateDto,
  TestTaskFiltersDto,
  TestTask,
  TestTaskCreate,
  TestTaskFilters,
} from "./test-tasks-dto";

// Преобразование из DTO в клиентский тип
export const mapTestTaskFromDto = (dto: TestTaskDto): TestTask => ({
  id: dto.id,
  company: dto.company,
  task: dto.task,
  difficulty: dto.difficulty,
  position: dto.position,
  solution: dto.solution,
  tags: dto.tags,
});

// Преобразование из клиентского типа в DTO
export const mapTestTaskToDto = (
  testTask: TestTaskCreate
): TestTaskCreateDto => ({
  company: testTask.company,
  task: testTask.task,
  difficulty: testTask.difficulty,
  position: testTask.position,
  solution: testTask.solution,
  tags: testTask.tags,
});

// Преобразование фильтров (в данном случае одинаковые)
export const mapTestTaskFiltersToDto = (
  filters: TestTaskFilters
): TestTaskFiltersDto => ({
  ...filters,
});
