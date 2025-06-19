"use client";

import {
  CollectionPageLayout,
  FILTER_DATA_SPECIALTY,
  type FilterGroupData,
} from "@/widgets/collection-page-layout/";
import { JobCard } from "./components/job-card";
import { jobsData } from "./mock-data";
import { useState } from "react";
import { ButtonLink } from "@/ui-kit";
import { useQueryParams } from "@/core/use-query-params";
import { routes } from "@/core/router";
import { useCurrentCategory } from "@/widgets/category-switcher";

const filters: FilterGroupData = [
  FILTER_DATA_SPECIALTY,
  {
    id: "source",
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
    id: "location",
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
    id: "remote",
    type: "switch",
    label: "Удаленно",
  },
  {
    id: "internship",
    type: "switch",
    label: "Стажировка",
  },
];

export function JobsPage() {
  const filteredJobs = jobsData;
  const currentCategory = useCurrentCategory();
  const { searchParams, setSearchParams } = useQueryParams();
  const currentPage = searchParams.get("page") ?? 1;
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string | boolean>
  >({});

  const handleSelectFilter = (id: string, value: string | boolean) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title>
          Вакансии по {currentCategory}
        </CollectionPageLayout.Title>
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
        onChange={handleSelectFilter}
      />
      <CollectionPageLayout.Content className="grid grid-cols-1 gap-2.5 lg:gap-4 lg:grid-cols-2">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination
        currentPage={+currentPage}
        totalPages={20}
        onPageChange={(page) => setSearchParams("page", page.toString())}
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
}
