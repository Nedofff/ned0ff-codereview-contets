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

export interface FiltersGroupProps {
  onChange: (id: string, value: string | boolean) => void;
  filters: Filter[];
  className?: string;
  action?: React.ReactNode;
}

export const FiltersGroup = ({
  filters,
  action,
  onChange,
  className,
}: FiltersGroupProps) => {
  return (
    <HorizontalScroll className={className}>
      {action}
      {filters.map((filter) => {
        if (filter.type === "options") {
          return (
            <Dropdown
              key={filter.id}
              options={filter.options}
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
