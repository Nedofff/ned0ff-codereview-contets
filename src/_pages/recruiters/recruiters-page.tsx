import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout/";
import { RecruitersCard } from "./components/recruiters-card";
import { ButtonLink } from "@/ui-kit";
import { routes } from "@/core/router";
import { recruitersData } from "@/data/mocks/recruiters-mock";
export function RecruitersPage() {
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
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к контактам 500+ рекрутеров и рефералов"
        className="grid grid-cols-1 gap-2.5 md:grid-cols-2  lg:gap-4 lg:grid-cols-3"
      >
        {recruitersData.map((recruiter) => (
          <RecruitersCard key={recruiter.id} {...recruiter} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination currentPage={+1} totalPages={20} />
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
