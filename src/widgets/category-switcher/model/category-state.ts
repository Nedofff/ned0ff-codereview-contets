import { create } from "zustand";
import { CATEGORIES } from "./consts";

interface CategoryState {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

export const useCategory = create<CategoryState>((set) => ({
  currentCategory: CATEGORIES[0],
  setCurrentCategory: (category) => set({ currentCategory: category }),
}));

export const useCurrentCategory = () => {
  const { currentCategory } = useCategory();

  return currentCategory;
};
