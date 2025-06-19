import { HeroSection } from "./components/hero-section";
import { SectionsCards } from "./components/section-cards";
import { CategorySwitcher } from "@/widgets/category-switcher";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-wrap items-center justify-center gap-2.5 w-full mx-auto mb-5 ">
        <CategorySwitcher />
      </div>
      <SectionsCards />
    </>
  );
}
