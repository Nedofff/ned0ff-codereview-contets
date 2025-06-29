import { RecruitersPage } from "@/_pages/recruiters";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <RecruitersPage />
    </Suspense>
  );
}
