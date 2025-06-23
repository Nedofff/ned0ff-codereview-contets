"use client";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
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
    name: "companyName",
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
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title template="Тестовые задания по {category}" />
        <CollectionPageLayout.Description>
          Здесь собраны реальные тестовые задания, которые дают соискателям на
          стажировках и junior-позициях. Эти задания помогут лучше подготовиться
          к отбору, потренироваться и пополнить портфолио
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup filters={filters} />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к 200+ тестовым заданиям с решениями"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {testTasksMockData.map((item) => (
          <TestTaskCard key={item.id} {...item} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination currentPage={1} totalPages={10} />
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
