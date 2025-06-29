import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { ButtonLink } from "@/ui-kit";
import { routes } from "@/core/router";
import { petProjectsMock } from "../../data/mocks/pet-projects-mock";
import { PetProjectCard } from "./components/pet-project-card";
export const PetProjectsPage = () => {
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title template="Коммерческие проекты, пет-проекты {category}" />
        <CollectionPageLayout.Description>
          Здесь ты можешь найти пет-проекты, некоторые из которых являются
          коммерческими, над которыми сможешь поработать и добавить себе в
          портфолио. Это способ показать свои навыки, поучаствовать в разработке
          продукта и пополнить портфолио реальными кейсами
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        filters={createFilter([])}
        action={
          <ButtonLink variant="filter" href={routes.petProjectCreate}>
            Добавить проект
          </ButtonLink>
        }
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к 150+ коммерческим проектам для опыта"
        className="grid grid-cols-1 md:grid-cols-2 gap-2.5"
      >
        {petProjectsMock.map((item) => (
          <PetProjectCard key={item.id} {...item} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination currentPage={1} totalPages={10} />
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
