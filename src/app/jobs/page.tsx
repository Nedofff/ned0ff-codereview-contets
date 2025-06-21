import { JobsPage } from "@/pages/jobs/jobs-page";
import { getVacanciesApi } from "@/data/vacancies";
import { PageWithQueryFilters } from "@/core/filters-type";
import { setupPaginationHandler } from "@/core/pagination";
import { notFound } from "next/navigation";
import { logger } from "@/core/logger";
import { cookies } from "next/headers";
import { getAuthTokenServer } from "@/core/get-auth-token-server";

const { getTotalPages, handlePagination } = setupPaginationHandler({
  itemsPerPage: 10,
  withAdvertising: true,
});

export default async function Jobs(
  props: PageWithQueryFilters<"source" | "location" | "remote" | "internship">
) {
  const { page, ...filters } = await props.searchParams;
  const { skip, limit } = handlePagination(page);

  const getAuthToken = await getAuthTokenServer(cookies());
  const vacanciesApi = getVacanciesApi(getAuthToken);

  try {
    const queryParams = { skip, limit, ...filters };
    const vacancies = await vacanciesApi.getAll({ skip, limit, ...filters });
    logger.info(
      "Запрос на получение вакансий page/jobs",
      queryParams,
      vacancies
    );

    const totalPages = getTotalPages(vacancies.total);
    const currentPage = +(page ?? 1);

    return (
      <JobsPage
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
