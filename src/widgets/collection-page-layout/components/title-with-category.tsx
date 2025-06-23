"use client";
import { useCurrentSpecialty } from "@/widgets/category-switcher";

interface TitleWithCategoryProps {
  template: string;
  children?: React.ReactNode;
}

export const TitleWithCategory = ({
  template,
  children,
}: TitleWithCategoryProps) => {
  const { valueSpecialty } = useCurrentSpecialty();

  if (children) {
    return <>{children}</>;
  }

  return <>{template.replace("{category}", valueSpecialty)}</>;
};
