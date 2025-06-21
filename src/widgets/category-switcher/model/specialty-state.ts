"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { COOKIE_SPECIALTY_PERSIST, specialtyDict } from "@/core/consts";
import {
  cookieService,
  setSpecialtyCookie,
  getSpecialtyCookie,
} from "@/core/cookie";

interface SpecialtyState {
  currentSpecialty: string;
  setCurrentSpecialty: (category: string) => void;
  getSpecialty: () => string;
}

export const useSpecialty = create<SpecialtyState>()(
  persist(
    (set, get) => ({
      currentSpecialty: "default-specialty",
      setCurrentSpecialty: (specialty) => {
        setSpecialtyCookie(specialty);
        return set({ currentSpecialty: specialty });
      },
      getSpecialty: () => {
        const specialty = get().currentSpecialty;
        const specialtyValue =
          specialtyDict[specialty as keyof typeof specialtyDict] ??
          "default-specialty";
        return specialtyValue;
      },
    }),
    {
      name: COOKIE_SPECIALTY_PERSIST,
      storage: createJSONStorage(() => cookieService),
    }
  )
);

export const useCurrentSpecialty = () => {
  const { getSpecialty: getSpecialtyKey } = useSpecialty();
  const specialtyKey = getSpecialtyCookie();
  const keySpecialty = specialtyKey ?? getSpecialtyKey();

  if (keySpecialty === "default-specialty") {
    return { keySpecialty: "python", valueSpecialty: specialtyDict.python };
  }

  const valueSpecialty =
    specialtyDict[keySpecialty as keyof typeof specialtyDict];

  return { keySpecialty, valueSpecialty };
};
