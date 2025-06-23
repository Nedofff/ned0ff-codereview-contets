import { getAuthTokenServer } from "@/core/adapters/get-auth-token-server";
import { getVacanciesApiBackend } from "@/data/vacancies/vacancies-api";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const json = await request.json();

  const response = await getVacanciesApiBackend(
    await getAuthTokenServer(cookies())
  ).createVacancy(json);
  return NextResponse.json(response);
}
