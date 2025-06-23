import { QuestionsPage } from "@/_pages/questions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вопросы на собеседованиях для программистов",
  description:
    "Популярные вопросы на собеседованиях для джуниор разработчиков. JavaScript, Python, Java, алгоритмы, структуры данных - готовься к техническим интервью.",
  keywords: [
    "вопросы на собеседовании",
    "интервью программист",
    "технические вопросы",
    "junior developer interview",
    "вопросы по JavaScript",
    "вопросы по Python",
    "алгоритмы собеседование",
    "подготовка к интервью",
  ],
  openGraph: {
    title: "Вопросы на собеседованиях для программистов - CodeReview",
    description:
      "Популярные вопросы на собеседованиях для джуниор разработчиков. Готовься к техническим интервью с нашей базой вопросов.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/questions`,
  },
};

export default function Questions() {
  return <QuestionsPage />;
}
