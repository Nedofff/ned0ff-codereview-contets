"use client";

import { cn } from "@/core/utils";
import React, { useState } from "react";

interface CategorySwitcherProps {
  categories: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const CategorySwitcher: React.FC<CategorySwitcherProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState(
    selectedCategory ?? categories[0]
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <>
      {categories.map((category) => {
        const isActive = category === activeCategory;

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
