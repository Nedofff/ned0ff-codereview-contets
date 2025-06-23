import { cn } from "@/core/utils";
import { toRuble } from "./utils/to-rouble";
import {
  BriefcaseIcon,
  BuildingIcon,
  MoneyBagIcon,
  WebIcon,
} from "@/ui-kit/icons";

export const VacancySpecs = ({
  remote,
  internship,
  salary,
  className,
}: {
  remote: boolean;
  internship: boolean;
  salary: string | null;
  className?: string;
}) => (
  <div
    className={cn(
      "flex flex-wrap items-center leading-[20px] text-neutral-800 gap-2 font-wix-display h-max",
      className
    )}
  >
    {remote ? (
      <span className="flex items-center">
        <WebIcon className="mr-0.5" /> удаленно
      </span>
    ) : (
      <span className="flex items-center">
        <BuildingIcon className="mr-0.5" /> в офис
      </span>
    )}
    {internship && (
      <span className="flex items-center">
        <BriefcaseIcon
          width={18}
          height={18}
          viewBox="0 0 26 26"
          className="mr-0.5"
        />{" "}
        стажировка
      </span>
    )}
    <span className="flex items-center">
      <MoneyBagIcon className="mr-0.5" />{" "}
      {salary && !isNaN(+salary) ? `от ${toRuble(+salary)}` : "не указана"}
    </span>
  </div>
);
