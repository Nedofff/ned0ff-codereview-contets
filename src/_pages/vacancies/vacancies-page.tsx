"use client";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout/";
import { VacancyCard } from "./components/vacancy-card";
import { ButtonLink } from "@/ui-kit";
import { routes } from "@/core/router";
import { Vacancy } from "@/data/vacancies";
import { PaginationPageProps } from "@/core/pagination/pagination-types";
import { AdvertisingCard } from "@/widgets/advertising-card/advertising-card";
import { AvitoCard, KpokCard, MtsCard } from "./components/paid-vacancy";
import { FilterGroupData } from "@/widgets/collection-page-layout/components/filters-group";

const filtersSwitch: FilterGroupData = [
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
];

export const VacanciesPage = ({
  currentPage,
  totalPages,
  vacancies,
  filtersOptions,
}: PaginationPageProps<{ vacancies: Vacancy[] }> & {
  filtersOptions: FilterGroupData;
}) => {
  const isEmpty = !vacancies.length;
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title
          renderTitle={(category) => <>Вакансии по {category}</>}
        />
        <CollectionPageLayout.Description>
          На этой странице агрегируются junior-вакансии и стажировки из
          различных источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и
          многие другие
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        action={
          <ButtonLink
            href={routes.vacanciesCreate}
            variant="filter"
            className="text-lg mr-2.5 leading-[22px] text-nowrap p-[12px_15px]"
          >
            Добавить вакансию
          </ButtonLink>
        }
        filters={createFilter([...filtersOptions, ...filtersSwitch])}
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к 1200 вакансиям и стажировкам"
        className="grid grid-cols-1 gap-2.5 md:gap-4 md:grid-cols-2 auto-rows-fr"
      >
        {!isEmpty && currentPage === 1 && (
          <>
            <MtsCard />
            <AvitoCard />
            <KpokCard />
          </>
        )}
        {!isEmpty &&
          vacancies.map((vacancy, index) => (
            <>
              <VacancyCard key={vacancy.id} {...vacancy} />
              {index === 1 && currentPage === 1 && (
                <AdvertisingCard>
                  Больше никакого поиска и откликов — автоматизируй свой путь к
                  работе вместе с Софи!
                </AdvertisingCard>
              )}
            </>
          ))}
      </CollectionPageLayout.Content>
      {isEmpty && (
        <CollectionPageLayout.EmptyState
          title="Ничего не найдено"
          description="Попробуйте изменить фильтры"
        />
      )}
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
