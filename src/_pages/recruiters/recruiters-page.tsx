"use client";

import {
  CollectionPageLayout,
  createFilter,
  FILTER_DATA_SPECIALTY,
} from "@/widgets/collection-page-layout/";
import { RecruitersCard } from "./components/recruiters-card";
import { recruitersData } from "./recruiters-mock";

import { useQueryParams } from "@/core/use-query-params";
import { ButtonLink } from "@/ui-kit";
import { routes } from "@/core/router";

export function RecruitersPage() {
  const filteredRecruiters = recruitersData;
  const { searchParams, setSearchParams } = useQueryParams();
  const currentPage = searchParams.get("page") ?? 1;
  const handleSelectFilter = (id: string, value: string | boolean) => {
    console.log("Filter:", id, value);
  };

  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title>
          Контакты рекрутеров, рефералов
        </CollectionPageLayout.Title>
        <CollectionPageLayout.Description>
          В этом разделе собраны контакты рекрутеров и специалистов, готовых
          рекомендовать к себе в компанию. Пользователи могут воспользоваться
          фильтрами по направлению и найти тех, кто поможет попасть на
          собеседование
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        action={
          <ButtonLink href={routes.recruitersCreate} variant="filter">
            Добавить контакт
          </ButtonLink>
        }
        filters={createFilter([])}
        onChange={handleSelectFilter}
      />
      <CollectionPageLayout.Content className="grid grid-cols-1 gap-2.5 md:grid-cols-2  lg:gap-4 lg:grid-cols-3">
        {filteredRecruiters.map((recruiter) => (
          <RecruitersCard key={recruiter.id} {...recruiter} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination
        currentPage={+currentPage}
        totalPages={20}
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
}
