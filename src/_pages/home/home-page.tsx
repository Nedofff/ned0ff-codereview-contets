import { HeroSection } from "./components/hero-section";
import { SectionsCards } from "./components/section-cards";
import { SpecialtySwitcher } from "@/widgets/category-switcher";
import { Suspense } from "react";

// Компонент для некритического контента (можно загрузить позже)
const BelowFoldContent = () => (
  <>
    <div className="flex flex-wrap items-center justify-center gap-2.5 w-full mx-auto mb-5">
      <SpecialtySwitcher />
    </div>
    <SectionsCards />
  </>
);

export function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense
        fallback={
          <div className="h-[400px] flex items-center justify-center"></div>
        }
      >
        <BelowFoldContent />
      </Suspense>
    </>
  );
}
