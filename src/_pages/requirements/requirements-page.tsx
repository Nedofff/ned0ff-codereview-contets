"use client";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { RequirementItem } from "./components/requirement-item";
import { requirementsMockData } from "../../data/mocks/requirements-page-mock-data";
import { cn } from "@/core/utils";
import { InfoCircleIcon } from "@/ui-kit";
const filters = createFilter([
  {
    name: "source",
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
]);
export const RequirementsPage = () => {
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title template="Требования к Junior {category}" />
        <CollectionPageLayout.Description>
          Раздел помогает понять, какие навыки чаще всего требуют работодатели.
          Ключевые слова и названия навыков из этого раздела можно использовать
          для улучшения своего резюме
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup filters={filters} />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к полному списку требований к Junior специалистам"
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
      <CollectionPageLayout.Pagination currentPage={+1} totalPages={10} />
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
