"use client";
import { externalLinks } from "@/core/router";
import { cn } from "@/core/utils";
import { Card } from "@/ui-kit";
import Image from "next/image";

export const AdvertisingCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card
      className={cn(
        "gradient-secondary-light grid grid-cols-[auto_max-content] grid-rows-2 items-center",
        className
      )}
    >
      <p className="font-wix-display text-lg font-bold leading-[22px] md:text-[22px] md:leading-[24px] ">
        {children}
      </p>
      <button className="text-neutral-10 col-start-1 w-max mt-auto bg-neutral-800 px-[15px] py-2.5 rounded-xl font-semibold leading-[18px]">
        Попробовать бесплатно
      </button>
      <Image
        src="/sofi-scaled.png"
        alt="sofi"
        width={730}
        height={752}
        className="rounded-full w-[72px] ml-auto mt-auto row-span-2 col-start-2 md:w-[95px]"
        quality={100}
      />
      <Card.Link title="AI ассистент Софи" href={externalLinks.sofi} />
    </Card>
  );
};
