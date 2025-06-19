"use client";

import { useQueryParams } from "@/core/use-query-params";
import {
  CollectionPageLayout,
  FILTER_DATA_SPECIALTY,
  FilterGroupData,
} from "@/widgets/collection-page-layout";
import { useState } from "react";
import { QuestionCard } from "./components/question-card";

interface Question {
  id: number;
  question: string;
  technology: string;
  mentions: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "В чем разница передачи параметров по ссылке и значению?",
    technology: "Java",
    mentions: "1490 упоминаний",
  },
  {
    id: 2,
    question:
      "Какие знаете шаблоны проектирования? Расскажите о двух шаблонах, используемых в работе.",
    technology: "Java",
    mentions: "1050 упоминаний",
  },
  {
    id: 3,
    question:
      "Какие типы данных в Java? Чем отличается объект от простых типов данных?",
    technology: "Java",
    mentions: "920 упоминаний",
  },
  {
    id: 4,
    question: "Что такое JVM, JDK, JRE?",
    technology: "Java",
    mentions: "506 упоминаний",
  },
  {
    id: 5,
    question: "Зачем используют JVM?",
    technology: "Java",
    mentions: "429 упоминаний",
  },
  {
    id: 6,
    question: "Что такое bytecode?",
    technology: "Java",
    mentions: "292 упоминаний",
  },
  {
    id: 7,
    question: "Какие признаки JavaBean?",
    technology: "Java",
    mentions: "94 упоминаний",
  },
];

const filters: FilterGroupData = [
  FILTER_DATA_SPECIALTY,
  {
    id: "stack",
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
    id: "grade",
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

export function QuestionsPage() {
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
          Вопросы по JavaScript на собеседовании
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
      <CollectionPageLayout.Content className="flex flex-col gap-[10px]">
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
