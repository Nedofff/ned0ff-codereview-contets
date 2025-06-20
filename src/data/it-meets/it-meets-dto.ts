import { PaginationParams } from "@/core/http-client";

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
