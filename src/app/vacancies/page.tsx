import { VacanciesPage } from "@/pages/vacancies";
import { getVacanciesApi } from "@/data/vacancies";
import { PageWithQueryFilters } from "@/core/filters-type";
import { setupPaginationHandler } from "@/core/pagination";
import { getAuthTokenServer } from "@/core/get-auth-token-server";
import { logger } from "@/core/logger";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { fillDataWithMock } from "@/data/mocks/fill-data-with-mock";

const { getTotalPages, handlePagination } = setupPaginationHandler({
  itemsPerPage: 8,
  withAdvertising: true,
});

export default async function Vacancies(
  props: PageWithQueryFilters<"source" | "location" | "remote" | "internship">
) {
  const { page, ...filters } = await props.searchParams;
  const { skip, limit } = handlePagination(page);

  const getAuthToken = await getAuthTokenServer(cookies());
  const vacanciesApi = getVacanciesApi(getAuthToken);

  try {
    const queryParams = { skip, limit, ...filters };
    const vacancies = fillDataWithMock.vacancies(
      await vacanciesApi.getAll(queryParams)
    );
    // logger.info(
    //   "Запрос на получение вакансий page/jobs",
    //   queryParams,
    //   vacancies
    // );

    const totalPages = getTotalPages(vacancies.total);
    const currentPage = +(page ?? 1);

    return (
      <VacanciesPage
        currentPage={currentPage}
        totalPages={totalPages}
        vacancies={vacancies.items}
      />
    );
  } catch (error) {
    logger.error("Ошибка при получении вакансий", error);
    return notFound();
  }
}
