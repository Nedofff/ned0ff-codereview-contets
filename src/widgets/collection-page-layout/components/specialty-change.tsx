"use client";
import { Dropdown } from "@/ui-kit";
import { useCategory } from "@/widgets/category-switcher";
import { FILTER_DATA_SPECIALTY } from "./filters-group";

export const SpecialtyChange = (props: {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}) => {
  const { currentCategory, setCurrentCategory } = useCategory();
  const labelToValue = FILTER_DATA_SPECIALTY.options.reduce((acc, option) => {
    acc[option.label] = option.value;
    return acc;
  }, {} as Record<string, string>);

  return (
    <Dropdown
      placeholder={props.label}
      options={props.options}
      value={labelToValue[currentCategory]}
      onChange={(value) => setCurrentCategory(value)}
    />
  );
};
