"use client";

import { cn } from "@/core/utils";
import { CATEGORIES } from "./model/consts";
import { useCategory } from "./model/category-state";

export const CategorySwitcher = () => {
  const { currentCategory, setCurrentCategory } = useCategory();

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <>
      {CATEGORIES.map((category) => {
        const isActive = category === currentCategory;

        return (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={cn(
              "flex items-center justify-center gap-2.5",
              "px-4 py-1.5 rounded-xl h-9",
              "text-[22px] font-normal leading-[1.18] tracking-[-0.023em]",
              "transition-all",
              {
                "gradient-primary text-white ring-1 ring-inset ring-black/10":
                  isActive,
                "bg-neutral-100 text-neutral-800 hover:bg-neutral-150":
                  !isActive,
              }
            )}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};
