"use client";
import { Card, Company } from "@/ui-kit";
import { cn } from "@/core/utils";
import { routes } from "@/core/router";
import { Vacancy } from "@/data/vacancies";
import { getLocalDate } from "@/core/time";
import { VacancySpecs } from "@/widgets/vacancy-specs";

export const VacancyCard = ({
  id,
  title,
  remote,
  internship,
  salary,
  image,
  companyName,
  location,
  datePublication,
  className,
}: Vacancy & { className?: string }) => (
  <Card
    className={cn(
      "w-full  mx-auto",
      "grid grid-rows-[auto_1fr_auto] ",
      className
    )}
  >
    <h3 className="text-lg font-bold leading-[22px] text-neutral-800 mb-2.5 z-1">
      {title}
    </h3>
    <VacancySpecs
      remote={remote}
      internship={internship}
      salary={salary}
      className="mb-7.5 md:mb-12.5"
    />
    <div className="flex flex-col gap-y-[15px] items-end  md:gap-y-0 md:justify-between md:flex-row">
      <Company
        companyName={companyName}
        image={image ?? "/placeholder-logo.png"}
        location={location ?? ""}
      />
      <div className="text-neutral-500 font-wix-display leading-[20px]">
        {getLocalDate(datePublication)}
      </div>
    </div>
    <Card.Link title={title} href={routes.vacancyId(id.toString())} />
  </Card>
);
