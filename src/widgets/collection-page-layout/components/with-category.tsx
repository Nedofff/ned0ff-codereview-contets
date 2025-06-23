"use client";
import { useCurrentSpecialty } from "@/widgets/category-switcher";

export const WithCategory = ({
  renderTitle,
}: {
  renderTitle: (category: string) => React.ReactNode;
}) => {
  const { valueSpecialty } = useCurrentSpecialty();
  return renderTitle(valueSpecialty);
};
