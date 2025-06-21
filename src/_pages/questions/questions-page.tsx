"use client";

import { useQueryParams } from "@/core/use-query-params";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { useState } from "react";
import { QuestionCard } from "./components/question-card";
import { useCurrentSpecialty } from "@/widgets/category-switcher";

const filters = createFilter([
  {
    name: "stack",
    type: "options",
    label: "Стек",
    options: [
      {
        label: "Frontend",
        value: "frontend",
      },
      {
        label: "Backend",
        value: "backend",
      },
      {
        label: "Fullstack",
        value: "fullstack",
      },
      {
        label: "DevOps",
        value: "devops",
      },
    ],
  },
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
]);

export function QuestionsPage() {
  const currentCategory = useCurrentSpecialty();
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
          Вопросы по {currentCategory} на собеседовании
        </CollectionPageLayout.Title>
        <CollectionPageLayout.Description>
          Раздел помогает пользователям подготовиться к техническим и
          поведенческим интервью. Здесь собраны реальные вопросы, которые задают
          работодатели, а также готовые ответы и пояснения. Вопросы
          сгруппированы по стеку и уровню сложности
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        filters={filters}
        onChange={handleSelectFilter}
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к 1000+ вопросов с ответами на собеседование"
        className="flex flex-col gap-[10px]"
      >
        {questions.map((item, index) => (
          <QuestionCard
            key={item.id}
            question={item.question}
            technology={item.technology}
            mentions={item.mentions}
            href={`/questions/${item.id}`}
            // isAd={index === 3}
          />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination
        currentPage={Number(currentPage)}
        totalPages={10}
        onPageChange={(page) => {
          setSearchParams("page", page.toString());
        }}
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
