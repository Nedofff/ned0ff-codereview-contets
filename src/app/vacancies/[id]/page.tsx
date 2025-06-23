import { getAuthTokenServer } from "@/core/get-auth-token-server";
import { logger } from "@/core/logger";
import { PageWithParams } from "@/core/next-types";
import { getVacanciesApi } from "@/data/vacancies";
import { VacancyDetailPage } from "@/_pages/vacancy-detail";
import { cookies } from "next/headers";
import { fillDataWithMock } from "@/data/mocks/fill-data-with-mock";

export default async function JobDetail({ params }: PageWithParams<"id">) {
  const { id } = await params;
  const vacanciesApi = getVacanciesApi(await getAuthTokenServer(cookies()));
  const vacancy = fillDataWithMock.vacancyDetailed(
    await vacanciesApi.get(Number(id))
  );
  logger.info(`Vacancy id=${id} fetched`, { vacancy });
  return <VacancyDetailPage {...vacancy} />;
}
