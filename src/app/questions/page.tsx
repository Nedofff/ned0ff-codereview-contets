import { QuestionsPage } from "@/_pages/questions";
import { PageWithQueryFilters } from "@/core/filters-type";
import { getAuthTokenServer } from "@/core/adapters/get-auth-token-server";
import { setupPaginationHandler } from "@/core/pagination";
import { getQuestionsApi } from "@/data/questions";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { parseFilters } from "@/core/parse-filters";
import { COOKIE_SPECIALTY } from "@/core/consts";
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
const { getTotalPages, handlePagination } = setupPaginationHandler({
  itemsPerPage: 8,
  withAdvertising: true,
});
export default async function Questions(
  props: PageWithQueryFilters<"stack" | "grade">
) {
  const { page, ...filters } = await props.searchParams;
  const { skip, limit } = handlePagination(page);
  const cookieStore = await cookies();
  const specialty = cookieStore.get(COOKIE_SPECIALTY)?.value;
  const getAuthToken = await getAuthTokenServer(cookies());
  const questionsApi = getQuestionsApi(getAuthToken);
  try {
    const queryParams = { skip, limit, ...filters, specialty };
    const questions = await questionsApi.getAll(queryParams);
    const filtersOptions = parseFilters(questions.items, ["stack", "grade"]);
    const totalPages = getTotalPages(questions.total);
    const currentPage = +(page ?? 1);
    return (
      <QuestionsPage
        currentPage={currentPage}
        totalPages={totalPages}
        questions={questions.items}
        filtersOptions={filtersOptions}
      />
    );
  } catch {
    return notFound();
  }
}
