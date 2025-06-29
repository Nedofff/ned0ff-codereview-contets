import { UnderConstructionPage } from "@/_pages/under-construction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тестовые задания для программистов",
  description:
    "Лучшие тестовые задания для джуниор разработчиков. Frontend, Backend, QA, Data Science - практикуйся и готовься к собеседованиям с реальными задачами от IT компаний.",
  keywords: [
    "тестовые задания",
    "задачи для программистов",
    "практика программирования",
    "junior developer tasks",
    "frontend задания",
    "backend задания",
    "тестовое задание python",
    "задачи для собеседования",
  ],
  openGraph: {
    title: "Тестовые задания для программистов - CodeReview",
    description:
      "Лучшие тестовые задания для джуниор разработчиков. Практикуйся и готовься к собеседованиям с реальными задачами от IT компаний.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/test-tasks`,
  },
};

export default function Page() {
  return <UnderConstructionPage />;
}
