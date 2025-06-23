import { PetProjectsPage } from "@/_pages/pet-projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet проекты для разработчиков",
  description:
    "Лучшие идеи pet проектов для портфолио джуниор разработчиков. Frontend, Backend, Full-stack проекты с исходным кодом и описанием. Создай свое портфолио!",
  keywords: [
    "pet проекты",
    "портфолио разработчика",
    "проекты для резюме",
    "идеи проектов",
    "pet project junior",
    "frontend проекты",
    "backend проекты",
    "github проекты",
  ],
  openGraph: {
    title: "Pet проекты для разработчиков - CodeReview",
    description:
      "Лучшие идеи pet проектов для портфолио джуниор разработчиков. Создай свое портфолио!",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/pet-projects`,
  },
};

export default function PetProjects() {
  return <PetProjectsPage />;
}
