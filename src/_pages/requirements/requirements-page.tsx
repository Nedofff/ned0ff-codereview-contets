"use client";
import {
  CollectionPageLayout,
  type FilterGroupData,
  FILTER_DATA_SPECIALTY,
} from "@/widgets/collection-page-layout";
import { useQueryParams } from "@/core/use-query-params";
import { useState } from "react";
import { useCurrentCategory } from "@/widgets/category-switcher";
import { RequirementItem } from "./components/requirement-item";
import { requirementsMockData } from "./requirements-page-mock-data";
import { cn } from "@/core/utils";
import { InfoCircleIcon } from "@/ui-kit";

const filters: FilterGroupData = [
  FILTER_DATA_SPECIALTY,
  {
    id: "source",
    type: "options",
    label: "Источник",
    options: [
      {
        label: "hh.ru",
        value: "hh.ru",
      },
      {
        label: "Habr Career",
        value: "habr.career",
      },
      {
        label: "LinkedIn",
        value: "linkedin",
      },
    ],
  },
];

export const RequirementsPage = () => {
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
          Требования к Junior {currentCategory}
        </CollectionPageLayout.Title>
        <CollectionPageLayout.Description>
          Раздел помогает понять, какие навыки чаще всего требуют работодатели.
          Ключевые слова и названия навыков из этого раздела можно использовать
          для улучшения своего резюме
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        filters={filters}
        onChange={handleSelectFilter}
      />
      <CollectionPageLayout.Content
        className={cn(
          "grid grid-cols-1",
          "-mx-[15px] px-[15px] border-y-2 border-[#EAEAEA] p-5 md:border-1 md:rounded-xl",
          "divide-y-1 divide-[#EAEAEA]"
        )}
      >
        <div className="hidden items-center justify-between pb-5 font-wix-display text-neutral-600 leading-[22px] md:flex">
          <div className=" text-sm leading-[18px] font-medium">
            Название навыка
          </div>
          <div className="flex items-center gap-1 text-neutral-600 text-sm leading-[18px] font-medium">
            Упоминаний
            <InfoCircleIcon />
          </div>
        </div>

        {requirementsMockData.map((item) => (
          <RequirementItem
            key={item.id}
            title={item.title}
            description={item.description}
            mentions={item.mentions}
          />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination
        currentPage={+currentPage}
        totalPages={10}
        onPageChange={(page) => setSearchParams("page", page.toString())}
      />
      <CollectionPageLayout.SeoKeys
        seoKeys={[
          "требования к junior frontend",
          "что должен знать junior аналитик",
          "навыки backend разработчика",
          "roadmap junior qa",
          "стек технологий для junior",
          "стажировки по Java",
        ]}
      />
    </CollectionPageLayout>
  );
};
