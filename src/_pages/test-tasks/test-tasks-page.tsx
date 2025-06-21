"use client";
import { useQueryParams } from "@/core/use-query-params";
import { useCurrentSpecialty } from "@/widgets/category-switcher";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { useState } from "react";
import { testTasksMockData } from "../../data/mocks/test-tasks-mock";
import { TestTaskCard } from "./components/test-task-card";

const filters = createFilter([
  {
    name: "position",
    type: "options",
    label: "Позиция",
    options: [
      {
        label: "Frontend",
        value: "frontend",
      },
      {
        label: "Backend",
        value: "backend",
      },
    ],
  },
  {
    name: "company",
    type: "options",
    label: "Компания",
    options: [
      {
        label: "Google",
        value: "google",
      },
      {
        label: "Apple",
        value: "apple",
      },
      {
        label: "Microsoft",
        value: "microsoft",
      },
    ],
  },
  {
    name: "complexity",
    type: "options",
    label: "Сложность",
    options: [
      {
        label: "Легко",
        value: "easy",
      },
      {
        label: "Средне",
        value: "medium",
      },
      {
        label: "Сложно",
        value: "hard",
      },
    ],
  },
]);

export const TestTasksPage = () => {
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
          Тестовые задания по {currentCategory}
        </CollectionPageLayout.Title>
        <CollectionPageLayout.Description>
          Здесь собраны реальные тестовые задания, которые дают соискателям на
          стажировках и junior-позициях. Эти задания помогут лучше подготовиться
          к отбору, потренироваться и пополнить портфолио
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        filters={filters}
        onChange={handleSelectFilter}
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к 200+ тестовым заданиям с решениями"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {testTasksMockData.map((item) => (
          <TestTaskCard key={item.id} {...item} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination
        currentPage={+currentPage}
        totalPages={10}
        onPageChange={(page) => setSearchParams("page", page.toString())}
      />
      <CollectionPageLayout.SeoKeys
        seoKeys={[
          "тестовое задание frontend",
          "тестовое задание python разработчик",
          "тестовое задание аналитик данных",
          "тестовое задание аналитик данных",
          "пример тестового задания junior",
          "тестовое задание qa инженер",
          "где найти тестовые задания для практики",
        ]}
      />
    </CollectionPageLayout>
  );
};
