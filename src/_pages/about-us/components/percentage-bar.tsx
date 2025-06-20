import { cn } from "@/core/utils";
import { type Audience } from "../about-us-types";

export const PercentageBar = ({
  title,
  percentage,
  barClassName,
}: Audience) => (
  <div
    className={cn(
      "grid grid-cols-1 grid-rows-2 gap-x-2.5 gap-y-[5px] font-wix-display font-medium",
      "lg:grid-cols-2 lg:grid-rows-1"
    )}
  >
    <p className="text-sm leading-[18px] md:text-base lg:text-lg lg:leading-[22px]">
      {title}
    </p>
    <div className="flex items-center gap-x-2.5">
      <div className={cn("h-2.5 rounded-full", barClassName)} />
      <p className="text-lg leading-[18px] bg-transparent">{percentage}%</p>
    </div>
  </div>
);
