import { PaginationModel } from "@/core/http-client";
import { Vacancy } from "../vacancies";
import { vacanciesData } from "./vacancy-mock";
import { Question } from "../questions";
import { questionsMock } from "./question-mock";

const scrub = <T extends object>(data: T) => {
  return Object.keys(data).reduce((acc, key) => {
    const value = data[key as keyof T];
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, unknown>);
};

const vacancies = (
  data: PaginationModel<Vacancy>
): PaginationModel<Vacancy> => ({
  ...data,
  items: data.items.map((vacancy, index) => ({
    ...vacanciesData[index % vacanciesData.length],
    ...scrub(vacancy),
  })),
});

const vacancyDetailed = (data: Vacancy): Vacancy => ({
  ...vacanciesData[0],
  ...scrub(data),
});

const questionDetailed = (data: Question): Question => ({
  ...questionsMock[0],
  ...scrub(data),
});

export const fillDataWithMock = {
  vacancyDetailed,
  vacancies,
  questionDetailed,
};
