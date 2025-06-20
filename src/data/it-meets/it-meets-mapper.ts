import type {
  ITMeetDto,
  ITMeetCreateDto,
  ITMeetFiltersDto,
  ITMeet,
  ITMeetCreate,
  ITMeetFilters,
} from "./it-meets-dto";

// Преобразование из DTO в клиентский тип
export const mapITMeetFromDto = (dto: ITMeetDto): ITMeet => ({
  id: dto.id,
  start: dto.start,
  description: dto.description,
  end: dto.end,
  place: dto.place,
  tags: dto.tags,
});

// Преобразование из клиентского типа в DTO
export const mapITMeetToDto = (itMeet: ITMeetCreate): ITMeetCreateDto => ({
  start: itMeet.start,
  description: itMeet.description,
  end: itMeet.end,
  place: itMeet.place,
  tags: itMeet.tags,
});

// Преобразование фильтров (в данном случае одинаковые)
export const mapITMeetFiltersToDto = (
  filters: ITMeetFilters
): ITMeetFiltersDto => ({
  ...filters,
});
