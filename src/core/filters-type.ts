import { PageWithQuery } from "./next-types";
export type AllFilters =
  | "search"
  | "specialty"
  | "location"
  | "companyName"
  | "remote"
  | "internship"
  | "source"
  | "stack"
  | "grade"
  | "online"
  | "city"
  | "type-tools"
  | "type-projects"
  | "position"
  | "complexity";

export type PageWithQueryFilters<T extends AllFilters> = PageWithQuery<T> &
  PageWithQuery<"page">;
