import { HomePage } from "@/_pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CodeReview - IT вакансии, стажировки и тестовые задания для джуниоров",
  description:
    "Найди свою первую работу в IT! Более 1000 актуальных вакансий, стажировки от топовых компаний, тестовые задания для практики. Бесплатная платформа для джуниор разработчиков.",
  keywords: [
    "IT вакансии джуниор",
    "стажировки программист",
    "первая работа в IT",
    "junior developer",
    "тестовые задания",
    "вакансии без опыта",
    "стажер разработчик",
    "CodeReview",
  ],
  openGraph: {
    title: "CodeReview - IT вакансии для джуниоров",
    description:
      "Найди свою первую работу в IT! Более 1000 актуальных вакансий, стажировки от топовых компаний, тестовые задания для практики.",
    type: "website",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "CodeReview - IT вакансии для джуниоров",
      },
    ],
  },
  twitter: {
    title: "CodeReview - IT вакансии для джуниоров",
    description:
      "Найди свою первую работу в IT! Более 1000 актуальных вакансий, стажировки от топовых компаний.",
    card: "summary_large_image",
    images: ["/og-home.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
  },
};

export default function Home() {
  return <HomePage />;
}
