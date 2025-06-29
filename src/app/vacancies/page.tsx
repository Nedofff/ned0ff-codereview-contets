import { VacanciesPage } from "@/_pages/vacancies";
import { getVacanciesApiBackend } from "@/data/vacancies";
import { PageWithQueryFilters } from "@/core/filters-type";
import { setupPaginationHandler } from "@/core/pagination";
import { getAuthTokenServer } from "@/core/adapters/get-auth-token-server";
import { logger } from "@/core/logger";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { fillDataWithMock } from "@/data/mocks/fill-data-with-mock";
import { Metadata } from "next";
import { parseFilters } from "@/core/parse-filters";
import { COOKIE_SPECIALTY } from "@/core/consts";
import { Suspense } from "react";

const { getTotalPages, handlePagination } = setupPaginationHandler({
  itemsPerPage: 8,
  withAdvertising: true,
  countAdvertising: 4,
});

export const metadata: Metadata = {
  title: "IT Вакансии для джуниоров",
  description:
    "Лучшие IT вакансии и стажировки для начинающих разработчиков. Более 1000 актуальных предложений от ведущих компаний. Найди свою первую работу в IT!",
  keywords: [
    "IT вакансии",
    "джуниор разработчик",
    "стажировки программист",
    "junior developer",
    "первая работа в IT",
    "вакансии без опыта",
    "стажер программист",
  ],
  openGraph: {
    title: "IT Вакансии для джуниоров - CodeReview",
    description:
      "Лучшие IT вакансии и стажировки для начинающих разработчиков. Более 1000 актуальных предложений от ведущих компаний.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/vacancies`,
  },
};

async function VacanciesContent(
  props: PageWithQueryFilters<"source" | "location" | "remote" | "internship">
) {
  const { page, ...filters } = await props.searchParams;
  const { skip, limit } = handlePagination(page);
  const cookieStore = await cookies();
  const specialty = cookieStore.get(COOKIE_SPECIALTY)?.value;

  const getAuthToken = await getAuthTokenServer(cookies());
  const vacanciesApi = getVacanciesApiBackend(getAuthToken);
  try {
    const queryParams = { skip, limit, ...filters, specialty };
    const vacancies = fillDataWithMock.vacancies(
      await vacanciesApi.getAll(queryParams)
    );
    const filtersOptions = parseFilters(vacancies.items, [
      "source",
      "location",
    ]);
    const totalPages = getTotalPages(vacancies.total);
    const currentPage = +(page ?? 1);
    return (
      <Suspense fallback={<div>Загрузка...</div>}>
        <VacanciesPage
          currentPage={currentPage}
          totalPages={totalPages}
          vacancies={vacancies.items}
          filtersOptions={filtersOptions}
        />
      </Suspense>
    );
  } catch (error) {
    logger.error("Ошибка при получении вакансий", error);
    return notFound();
  }
}

export default function Page(
  props: PageWithQueryFilters<"source" | "location" | "remote" | "internship">
) {
  return <VacanciesContent {...props} />;
}
