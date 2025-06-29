import { UnderConstructionPage } from "@/_pages/under-construction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Резюме IT специалистов",
  description:
    "Лучшие резюме джуниор разработчиков. Примеры резюме программистов, дизайнеров, аналитиков. Найди кандидатов или опубликуй свое резюме бесплатно.",
  keywords: [
    "резюме программиста",
    "резюме разработчика",
    "CV junior developer",
    "резюме IT специалиста",
    "примеры резюме",
    "составить резюме",
    "поиск кандидатов",
    "IT рекрутинг",
  ],
  openGraph: {
    title: "Резюме IT специалистов - CodeReview",
    description:
      "Лучшие резюме джуниор разработчиков. Найди кандидатов или опубликуй свое резюме бесплатно.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/resumes`,
  },
};

export default function Page() {
  return <UnderConstructionPage />;
}
