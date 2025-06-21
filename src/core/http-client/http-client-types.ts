export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  message: string;
  status?: number;
  details?: unknown;
}

export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail: ValidationError[];
}

export type PaginationModel<T> = {
  items: T[];
  total: number;
  skip: number;
  limit: number;
};

export interface PaginationParams {
  skip?: number;
  limit?: number;
  sort_by?: string | null;
  order?: "asc" | "desc";
}

export type GetAuthToken = () => string | undefined | null;
