import React from "react";
import { Card, ButtonLink, BriefcaseIcon, ArrowTopRightIcon } from "@/ui-kit";
import Image from "next/image";
import Link from "next/link";

interface ResumeCardProps {
  title: string;
  grade: string;
  experience: string;
  stack: string[];
  resumeUrl: string;
  avatarUrl: string;
  name: string;
  telegram: string;
  email: string;
}

export function ResumeCard({
  title,
  grade,
  experience,
  stack,
  resumeUrl,
  avatarUrl,
  name,
  telegram,
  email,
}: ResumeCardProps) {
  return (
    <Card className="grid grid-rows-[max-content_max-content_max-content] grid-cols-1 gap-y-[15px] font-wix-display">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[22px] font-bold text-neutral-800 leading-[26px] truncate mb-.5">
            {title}
          </h3>
          <span className="block leading-[18px] font-medium text-neutral-500">
            {grade}
          </span>
        </div>

        <div className="flex items-center gap-1 font-medium text-neutral-400">
          {experience}
          <BriefcaseIcon viewBox="0 0 26 26" className="w-[18px] h-[18px]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-[15px] lg:mb-[19px]">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="bg-white px-1.5 py-0.5 rounded-md text-sm font-medium text-neutral-700 leading-[18px]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="flex justify-start gap-2.5">
          <Image
            src={avatarUrl}
            alt={name}
            width={42}
            height={42}
            className="w-[42px] h-[42px] rounded-lg object-cover"
          />
          <div className="flex flex-col items-start h-full">
            <span className="block text-lg font-semibold text-neutral-800 truncate leading-[22px]">
              {name}
            </span>
            <p className="font-medium text-primary-500 truncate">
              <Link href={telegram}>telegram</Link>
              <span className="text-primary-300 px-1">•</span>
              <Link href={`mailto:${email}`}>email</Link>
            </p>
          </div>
        </div>

        <ButtonLink
          variant="second"
          href={resumeUrl}
          className="flex items-center gap-x-2 px-3 py-2.5 text-base"
        >
          <span>Резюме</span>
          <ArrowTopRightIcon />
        </ButtonLink>
      </div>
    </Card>
  );
}
