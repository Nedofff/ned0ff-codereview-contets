import type {
  QuestionDto,
  QuestionCreateDto,
  QuestionFiltersDto,
  Question,
  QuestionCreate,
  QuestionFilters,
} from "./questions-dto";

// Преобразование из DTO в клиентский тип
export const mapQuestionFromDto = (dto: QuestionDto): Question => ({
  id: dto.id,
  stack: dto.stack,
  question: dto.question,
  position: dto.position,
  freq: dto.freq,
  answer: dto.answer,
  tags: dto.tags,
});

// Преобразование из клиентского типа в DTO
export const mapQuestionToDto = (
  question: QuestionCreate
): QuestionCreateDto => ({
  stack: question.stack,
  question: question.question,
  position: question.position,
  freq: question.freq,
  answer: question.answer,
  tags: question.tags,
});

// Преобразование фильтров (в данном случае одинаковые)
export const mapQuestionFiltersToDto = (
  filters: QuestionFilters
): QuestionFiltersDto => ({
  ...filters,
});
