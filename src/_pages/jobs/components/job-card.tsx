"use client";
import {
  BriefcaseIcon,
  BuildingIcon,
  Card,
  MoneyBagIcon,
  WebIcon,
} from "@/ui-kit";
import { cn } from "@/core/utils";
import Image from "next/image";
import { routes } from "@/core/router";
import { Vacancy } from "@/data/vacancies";
import { toRuble } from "../lib/to-rouble";

export const JobCard = ({
  id,
  title,
  remote,
  internship,
  salary,
  image,
  companyName,
  location,
  datePublication,
}: Vacancy) => {
  return (
    <Card className={cn("w-full  mx-auto", "grid grid-rows-[auto_1fr_auto] ")}>
      <h3 className="text-lg font-bold leading-[22px] text-neutral-800 mb-2.5">
        {title}
      </h3>
      <div className="flex flex-wrap items-center leading-[20px] text-neutral-800 gap-2 font-wix-display mb-7.5 md:mb-12.5">
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
          {salary ? `от ${toRuble(+salary)}` : "не указана"}
        </span>
      </div>
      <div className="flex flex-col gap-y-[15px] items-end  md:gap-y-0 md:justify-between md:flex-row">
        <div className="grid grid-cols-[max-content_auto] grid-rows-[max-content_auto] gap-x-2.5">
          {image && (
            <Image
              src={image}
              width={42}
              height={42}
              alt={`Лого ${companyName}`}
              className="w-10.5 h-10.5 object-cover row-span-2 rounded-lg"
            />
          )}
          <span className="font-semibold font-wix-display text-lg leading-[22px]">
            {companyName}
          </span>
          <span className="font-semibold font-wix-display leading-[20px] text-neutral-600">
            {location}
          </span>
        </div>
        <div className="text-neutral-500 font-wix-display leading-[20px]">
          {new Date(datePublication).toLocaleDateString()}
        </div>
      </div>
      <Card.Link title={title} href={routes.jobId(id.toString())} />
    </Card>
  );
};
