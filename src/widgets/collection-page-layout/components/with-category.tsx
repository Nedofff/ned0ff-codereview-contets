"use client";

import { useCurrentSpecialty } from "@/widgets/category-switcher";

export const WithCategory = ({ children }: { children: React.ReactNode }) => {
  const { valueSpecialty } = useCurrentSpecialty();

  return (
    <>
      {children} {valueSpecialty}
    </>
  );
};
