import { AboutUsPage } from "@/_pages/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас - CodeReview",
  description:
    "CodeReview помогает IT компаниям находить талантливых джуниор-специалистов. Более 150,000 подписчиков, 80% релевантных откликов, бесплатное размещение вакансий.",
  keywords: [
    "CodeReview",
    "IT рекрутинг",
    "поиск программистов",
    "джуниор специалисты",
    "IT таланты",
    "бесплатные вакансии",
    "телеграм каналы IT",
  ],
  openGraph: {
    title: "О нас - CodeReview",
    description:
      "CodeReview помогает IT компаниям находить талантливых джуниор-специалистов. Более 150,000 подписчиков в телеграм каналах.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/about-us`,
  },
};

export default AboutUsPage;
