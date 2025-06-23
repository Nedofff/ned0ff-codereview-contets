"use client";
import { Dropdown, HorizontalScroll, Switch } from "@/ui-kit";
import { SpecialtyChange } from "./specialty-change";
import { useQueryParams } from "@/core/use-query-params";
import { specialtyDict } from "@/core/consts";
import { useCurrentSpecialty } from "@/widgets/category-switcher";
import { useEffect } from "react";
import { AllFilters } from "@/core/filters-type";
import { logger } from "@/core/logger";

type Filter =
  | {
      name: AllFilters;
      type: "options";
      label: string;
      options: {
        label: string;
        value: string;
      }[];
    }
  | {
      name: AllFilters;
      type: "switch";
      label: string;
    };

export type FilterGroupData = Filter[];

export const FILTER_DATA_SPECIALTY: Filter & { type: "options" } = {
  name: "specialty",
  type: "options",
  label: "Специальность",
  options: Object.entries(specialtyDict).map(([key, value]) => ({
    label: value,
    value: key,
  })),
};

export interface FiltersGroupProps {
  filters: FilterGroupData;
  action?: React.ReactNode;
}

export const FiltersGroup = ({ filters, action }: FiltersGroupProps) => {
  const { setSearchParams, searchParams } = useQueryParams(false);
  const { keySpecialty } = useCurrentSpecialty();

  useEffect(() => {
    // setSearchParams("specialty", keySpecialty);
    logger.info("Смена specialty component/category-switcher", keySpecialty);
  }, [keySpecialty]);

  return (
    <HorizontalScroll className="gap-x-[15px] md:gap-x-2.5">
      {action}
      {filters.map((filter) => {
        if (filter.type === "options") {
          if (filter.name === "specialty") {
            return (
              <SpecialtyChange
                key={filter.name}
                label={filter.label}
                options={filter.options}
              />
            );
          }

          return (
            <Dropdown
              key={filter.name}
              options={filter.options}
              placeholder={filter.label}
              onChange={(value) => setSearchParams(filter.name, value)}
              value={searchParams.get(filter.name) ?? undefined}
            />
          );
        }

        return (
          <Switch
            key={filter.name}
            label={filter.label}
            onChange={(value) => setSearchParams(filter.name, value.toString())}
          />
        );
      })}
    </HorizontalScroll>
  );
};
