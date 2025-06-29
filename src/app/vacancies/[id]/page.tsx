import { getAuthTokenServer } from "@/core/adapters/get-auth-token-server";
import { logger } from "@/core/logger";
import { PageWithParams } from "@/core/next-types";
import { getVacanciesApiBackend } from "@/data/vacancies";
import { VacancyDetailPage } from "@/_pages/vacancy-detail";
import { cookies } from "next/headers";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fillDataWithMock } from "@/data/mocks/fill-data-with-mock";
export async function generateMetadata({
  params,
}: PageWithParams<"id">): Promise<Metadata> {
  const { id } = await params;
  try {
    const vacanciesApi = getVacanciesApiBackend(
      await getAuthTokenServer(cookies())
    );
    const vacancy = await vacanciesApi.get(Number(id));
    const title = `${vacancy.title} в ${vacancy.companyName}`;
    const description = vacancy.description
      ? `${vacancy.description.slice(0, 160)}...`
      : `Вакансия ${vacancy.title} в компании ${vacancy.companyName}. Зарплата: ${vacancy.salary}. Локация: ${vacancy.location}.`;
    return {
      title,
      description,
      keywords: [
        vacancy.title,
        vacancy.companyName,
        vacancy.specialty,
        vacancy.location || "remote",
        "IT вакансия",
        "работа программист",
        "junior developer",
      ].filter(Boolean),
      openGraph: {
        title,
        description,
        type: "article",
        images: vacancy.image
          ? [
              {
                url: vacancy.image,
                alt: `Вакансия ${vacancy.title}`,
                width: 1200,
                height: 630,
              },
            ]
          : undefined,
      },
      twitter: {
        title,
        description,
        card: "summary_large_image",
        images: vacancy.image ? [vacancy.image] : undefined,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/vacancies/${id}`,
      },
    };
  } catch {
    return {
      title: "Вакансия не найдена",
      description: "Запрашиваемая вакансия не найдена или была удалена",
    };
  }
}
export default async function JobDetail({ params }: PageWithParams<"id">) {
  const { id } = await params;
  try {
    const vacanciesApi = getVacanciesApiBackend(
      await getAuthTokenServer(cookies())
    );
    const vacancy = fillDataWithMock.vacancyDetailed(
      await vacanciesApi.get(Number(id))
    );
    logger.info(`Vacancy id=${id} fetched`, { vacancy });
    return <VacancyDetailPage {...vacancy} />;
  } catch (error) {
    logger.error(`Vacancy id=${id} not found`, error);
    return notFound();
  }
}
