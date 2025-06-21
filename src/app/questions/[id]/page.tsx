import { QuestionDetailedPage } from "@/pages/question-detailed";
import { getQuestionsApi } from "@/data/questions/questions-api";
import { getAuthTokenServer } from "@/core/get-auth-token-server";
import { cookies } from "next/headers";
import { PageWithParams } from "@/core/next-types";

export default async function QuestionDetailed(props: PageWithParams<"id">) {
  const { id } = await props.params;
  const questionsApi = getQuestionsApi(await getAuthTokenServer(cookies()));
  const question = await questionsApi.getQuestion(Number(id));

  return <QuestionDetailedPage {...question} />;
}
