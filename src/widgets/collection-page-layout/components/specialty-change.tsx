"use client";
import { Dropdown } from "@/ui-kit";
import { useSpecialty } from "@/widgets/category-switcher";

export const SpecialtyChange = (props: {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}) => {
  const { currentSpecialty, setCurrentSpecialty } = useSpecialty();

  return (
    <Dropdown
      placeholder={props.label}
      options={props.options}
      value={currentSpecialty}
      onChange={(value) => setCurrentSpecialty(value)}
    />
  );
};
