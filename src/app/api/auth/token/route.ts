import { getAuthApiBackend } from "@/data/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const response = await getAuthApiBackend(() => null).login({
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  });
  return NextResponse.json(response);
}
