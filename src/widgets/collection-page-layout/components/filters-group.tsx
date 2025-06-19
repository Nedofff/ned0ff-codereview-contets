import { Dropdown, HorizontalScroll, Switch } from "@/ui-kit";

type Filter =
  | {
      id: string;
      type: "options";
      label: string;
      options: {
        label: string;
        value: string;
      }[];
    }
  | {
      id: string;
      type: "switch";
      label: string;
    };

export type FilterGroupData = Filter[];

export interface FiltersGroupProps {
  onChange: (id: string, value: string | boolean) => void;
  filters: FilterGroupData;
  action?: React.ReactNode;
}

export const FiltersGroup = ({
  filters,
  action,
  onChange,
}: FiltersGroupProps) => {
  return (
    <HorizontalScroll className="gap-x-[15px] md:gap-x-2.5">
      {action}
      {filters.map((filter) => {
        if (filter.type === "options") {
          return (
            <Dropdown
              key={filter.id}
              options={filter.options}
              placeholder={filter.label}
              onChange={(value) => onChange(filter.id, value)}
            />
          );
        }

        return (
          <Switch
            key={filter.id}
            label={filter.label}
            onChange={(value) => onChange(filter.id, value)}
          />
        );
      })}
    </HorizontalScroll>
  );
};
