"use client";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { QuestionCard } from "./components/question-card";
import { PaginationPageProps } from "@/core/pagination";
import { Question } from "@/data/questions";
import { AdvertisingCard } from "./components/advertising";
import { FilterGroupData } from "@/widgets/collection-page-layout/components/filters-group";
const filters: FilterGroupData = [
  {
    name: "grade",
    type: "options",
    label: "Грейд",
    options: [
      {
        label: "Junior",
        value: "junior",
      },
      {
        label: "Middle",
        value: "middle",
      },
      {
        label: "Senior",
        value: "senior",
      },
    ],
  },
];
export function QuestionsPage({
  currentPage,
  totalPages,
  questions,
  filtersOptions,
}: PaginationPageProps<{ questions: Question[] }> & {
  filtersOptions: FilterGroupData;
}) {
  const isEmpty = !questions.length;
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title
          renderTitle={(category) => (
            <>Вопросы по {category} на собеседовании</>
          )}
        />
        <CollectionPageLayout.Description>
          Раздел помогает пользователям подготовиться к техническим и
          поведенческим интервью. Здесь собраны реальные вопросы, которые задают
          работодатели, а также готовые ответы и пояснения. Вопросы
          сгруппированы по стеку и уровню сложности
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        filters={createFilter([...filtersOptions, ...filters])}
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к 1000+ вопросов с ответами на собеседование"
        className="flex flex-col gap-[10px]"
      >
        {!isEmpty &&
          questions.map((item, index) => (
            <>
              <QuestionCard key={item.id} {...item} />
              {!isEmpty && index === 2 && <AdvertisingCard />}
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
          "вопросы на собеседовании junior разработчик",
          "технические вопросы фронтенд",
          "вопросы по JavaScript на собеседовании",
          "вопросы по SQL для собеседования",
          "вопросы в Яндекс собеседование",
          "частые вопросы на собеседовании",
        ]}
      />
    </CollectionPageLayout>
  );
}
