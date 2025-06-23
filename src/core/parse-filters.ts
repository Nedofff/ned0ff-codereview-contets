import { FilterGroupData } from "@/widgets/collection-page-layout/components/filters-group";
import { AllFilters } from "./filters-type";

const keyToLabel: Record<string, string> = {
  location: "Город",
  source: "Источник",
  stack: "Стек",
};

export const parseFilters = <T extends Array<object>>(
  data: T,
  keys: AllFilters[]
) => {
  const uniqueValues: Record<string, Set<unknown>> = {};
  keys.forEach((key) => (uniqueValues[key] = new Set()));

  data.forEach((item) => {
    keys.forEach((key) => {
      const element = item[key as keyof typeof item];
      if (element) {
        uniqueValues[key].add(element);
      }
    });
  });

  const filtersOptions: FilterGroupData = [];

  for (const key in uniqueValues) {
    const element = uniqueValues[key as keyof typeof uniqueValues];
    const options: { label: string; value: string }[] = [];
    element.forEach((item) => {
      if (typeof item === "string") {
        options.push({ label: item, value: item });
      }
    });

    filtersOptions.push({
      name: key as AllFilters,
      type: "options",
      label: keyToLabel[key as AllFilters],
      options,
    });
  }

  return filtersOptions;
};
