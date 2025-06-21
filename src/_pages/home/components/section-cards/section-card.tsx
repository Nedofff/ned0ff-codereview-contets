import BgImg from "./assets/background-category.png";
import Image from "next/image";
import { Card } from "@/ui-kit";
import { cn } from "@/core/utils";

export const SectionCard = ({
  children,
  href,
  label,
  className,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
  className?: string;
}) => (
  <Card
    className={cn(
      "overflow-hidden group h-min-content",
      "md:h-[280px] md:p-5",
      className
    )}
  >
    <div
      className={cn(
        "overflow-hidden absolute inset-0 w-full justify-self-start",
        "transition-transform ease-section-card duration-300",
        "-translate-x-[91px] translate-y-[61px] opacity-0",
        "group-hover:opacity-100 group-hover:translate-x-[0] group-hover:-translate-y-[0]",
        "group-active:opacity-100 group-active:translate-x-[0] group-active:-translate-y-[0] active:delay-500"
      )}
    >
      <Image src={BgImg} alt="background" fill className="object-cover" />
    </div>

    <div className="relative grid grid-rows-[max-content_1fr_max-content] h-full">
      {children}
    </div>
    <Card.Link href={href} title={label} />
  </Card>
);

SectionCard.Icon = ({ children }: { children: React.ReactNode }) => (
  <div
    className={cn(
      "mb-2 lg:mb-3.5",
      "transition-all ease-initial duration-450",
      "group-hover:translate-y-2.5"
    )}
  >
    <div className="size-6">{children}</div>
  </div>
);

SectionCard.Description = ({ children }: { children: React.ReactNode }) => (
  <div
    className={cn(
      "mb-4",
      "relative md:opacity-0",
      "transition-all ease-initial duration-300",
      "group-hover:opacity-100 group-hover:translate-y-3.5"
    )}
  >
    <p className="text-sm md:text-base font-medium text-gray-800 mb-2 leading-tight">
      {children}
    </p>
  </div>
);

SectionCard.Title = ({ children }: { children: React.ReactNode }) => (
  <h3
    className={cn(
      "font-wix-text font-semibold text-gray-800 leading-[18px]",
      "md:text-xl md:leading-[20px]"
    )}
  >
    {children}
  </h3>
);
