import { PaginationParams } from "@/core/http-client";

// DTO типы (для бекенда)
export interface ITMeetDto {
  id: number;
  start: string;
  description: string;
  end: string | null;
  place: string;
  tags: string;
}

export interface ITMeetCreateDto {
  start: string;
  description: string;
  end: string | null;
  place: string;
  tags: string;
}

export interface ITMeetFiltersDto extends PaginationParams {
  search?: string | null;
  place?: string | null;
  tags?: string | null;
}

// Клиентские типы (для UI)
export interface ITMeet {
  id: number;
  start: string;
  description: string;
  end: string | null;
  place: string;
  tags: string;
}

export interface ITMeetCreate {
  start: string;
  description: string;
  end: string | null;
  place: string;
  tags: string;
}

export interface ITMeetFilters extends PaginationParams {
  search?: string | null;
  place?: string | null;
  tags?: string | null;
}
