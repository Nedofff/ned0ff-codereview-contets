import { cn } from "@/core/utils";
import { PeopleIcon } from "./compoonents/people-icon";
import { PeopleImage } from "./compoonents/people-image";
import Person1 from "./assets/person-1.jpg";
import Person2 from "./assets/person-2.jpg";
import Person3 from "./assets/person-3.jpg";

export const PeopleIcons = ({ className }: { className?: string }) => (
  <span className={cn("flex -space-x-3", className)}>
    <PeopleIcon>
      <PeopleImage src={Person1} className="object-[0_-6px]" />
    </PeopleIcon>
    <PeopleIcon className="z-1">
      <PeopleImage src={Person2} />
    </PeopleIcon>
    <PeopleIcon className="z-2">
      <PeopleImage src={Person3} />
    </PeopleIcon>
    <PeopleIcon className="z-3 border-none p-0.5 bg-gradient-to-r from-[#E25377] via-[#EEB902] to-[#62B4FF]">
      <span
        className={cn(
          "w-full h-full grid place-items-center pr-1",
          "bg-neutral-100  rounded-[calc(70%-2px)]",
          "text-xs font-semibold leading-[14px]"
        )}
      >
        +293
      </span>
    </PeopleIcon>
  </span>
);
