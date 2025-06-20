"use client";
import { useQueryParams } from "@/core/use-query-params";
import { useCurrentCategory } from "@/widgets/category-switcher";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { useState } from "react";
import { ButtonLink } from "@/ui-kit";
import { routes } from "@/core/router";
import { petProjectsMock } from "./pet-projects-mock";
import { PetProjectCard } from "./components/pet-project-card";

export const PetProjectsPage = () => {
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
          Коммерческие проекты, пет-проекты {currentCategory}
        </CollectionPageLayout.Title>
        <CollectionPageLayout.Description>
          Здесь ты можешь найти пет-проекты, некоторые из которых являются
          коммерческими, над которыми сможешь поработать и добавить себе в
          портфолио. Это способ показать свои навыки, поучаствовать в разработке
          продукта и пополнить портфолио реальными кейсами
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        filters={createFilter([])}
        onChange={handleSelectFilter}
        action={
          <ButtonLink variant="filter" href={routes.petProjectCreate}>
            Добавить проект
          </ButtonLink>
        }
      />
      <CollectionPageLayout.Content className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {petProjectsMock.map((item) => (
          <PetProjectCard key={item.id} {...item} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination
        currentPage={+currentPage}
        totalPages={10}
        onPageChange={(page) => setSearchParams("page", page.toString())}
      />
      <CollectionPageLayout.SeoKeys
        seoKeys={[
          "идеи пет проектов для резюме",
          "pet project junior",
          "проекты для начинающих разработчиков",
          "frontend pet project пример",
          "стажировка без опыта",
        ]}
      />
    </CollectionPageLayout>
  );
};
