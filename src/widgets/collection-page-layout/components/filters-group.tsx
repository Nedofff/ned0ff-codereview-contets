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

export const FILTER_DATA_SPECIALTY: Filter = {
  id: "specialty",
  type: "options",
  label: "Специальность",
  options: [
    {
      label: "Python",
      value: "python",
    },
    {
      label: "Java",
      value: "java",
    },
    {
      label: "JavaScript",
      value: "javascript",
    },
    {
      label: "Data Science",
      value: "data-science",
    },
    {
      label: "QA",
      value: "qa",
    },
    {
      label: "C#",
      value: "csharp",
    },
  ],
};

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
