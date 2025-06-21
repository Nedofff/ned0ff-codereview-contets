"use client";

import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout/";
import { JobCard } from "./components/job-card";
import { ButtonLink } from "@/ui-kit";
import { routes } from "@/core/router";
import { Vacancy } from "@/data/vacancies";
import { PaginationPageProps } from "@/core/pagination/pagination-types";

const filters = createFilter([
  {
    name: "source",
    type: "options",
    label: "Источник",
    options: [
      {
        label: "hh.ru",
        value: "hh",
      },
      {
        label: "Habr Career",
        value: "habr",
      },
    ],
  },
  {
    name: "location",
    type: "options",
    label: "Город",
    options: [
      {
        label: "Москва",
        value: "moscow",
      },
      {
        label: "Санкт-Петербург",
        value: "spb",
      },
    ],
  },
  {
    name: "remote",
    type: "switch",
    label: "Удаленно",
  },
  {
    name: "internship",
    type: "switch",
    label: "Стажировка",
  },
]);

export const JobsPage = ({
  currentPage,
  totalPages,
  vacancies,
}: PaginationPageProps<{ vacancies: Vacancy[] }>) => {
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title>Вакансии по</CollectionPageLayout.Title>
        <CollectionPageLayout.Description>
          На этой странице агрегируются junior-вакансии и стажировки из
          различных источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и
          многие другие
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        action={
          <ButtonLink
            href={routes.jobCreate}
            variant="filter"
            className="text-lg mr-2.5 leading-[22px] text-nowrap p-[12px_15px]"
          >
            Добавить вакансию
          </ButtonLink>
        }
        filters={filters}
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к 1200 вакансиям и стажировкам"
        className="grid grid-cols-1 gap-2.5 md:gap-4 md:grid-cols-2"
      >
        {vacancies.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <CollectionPageLayout.SeoKeys
        seoKeys={[
          "стажировка без опыта",
          "вакансии джуниор",
          "как откликнуться на вакансию",
          "примеры вакансий junior",
          "стажировки по Java",
          "Junior Java Developer",
          "Вакансии Java без опыта",
          "Java Spring Boot вакансии",
        ]}
      />
    </CollectionPageLayout>
  );
};
