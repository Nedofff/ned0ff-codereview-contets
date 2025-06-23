"use client";

import React, { SVGProps } from "react";
import {
  SpecialtySwitcher,
  useCurrentSpecialty,
} from "@/widgets/category-switcher";
import {
  ArrowDownIcon,
  BriefcaseIcon,
  Button,
  CalendarIcon,
  CodeAsteriskIcon,
  CodeIcon,
  HorizontalScroll,
  MenuIcon,
  MessageIcon,
  MicrophoneIcon,
  PersonIcon,
  Popover,
  SparklesIcon,
  StackIcon,
} from "@/ui-kit";
import { cn } from "@/core/utils";
import Link from "next/link";
import { routes } from "@/core/router";
import { noSsrImport } from "@/core/no-ssr-import";

const MenuItem = ({ title, href, Icon }: MenuItem) => {
  return (
    <Link
      href={href}
      className="
        flex items-center gap-1.5 px-0 py-0 rounded-md
        text-left transition-opacity
        group text-black w-fit
      "
    >
      <Icon
        viewBox="0 0 24 24"
        width={20}
        height={20}
        className="w-5 h-5 text-neutral-1000"
      />
      <span
        className={cn(
          "font-wix-text leading-[22px]",
          "md:text-lg",
          "group-hover:opacity-70"
        )}
      >
        {title}
      </span>
    </Link>
  );
};

interface MenuItem {
  title: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
}

const MENU_ITEMS: MenuItem[] = [
  {
    title: "Вакансии / Cтажировки",
    href: routes.vacancies,
    Icon: BriefcaseIcon,
  },
  {
    title: "Тестовые задания",
    href: routes.testTasks,
    Icon: CodeIcon,
  },
  {
    title: "IT-мероприятия",
    href: routes.events,
    Icon: CalendarIcon,
  },
  {
    title: "Контакты рекрутеров",
    href: routes.recruiters,
    Icon: MessageIcon,
  },
  {
    title: "Резюме соискателей",
    href: routes.resumes,
    Icon: PersonIcon,
  },
  {
    title: "Необходимые навыки",
    href: routes.requirements,
    Icon: StackIcon,
  },
  {
    title: "Собеседования",
    href: routes.questions,
    Icon: MicrophoneIcon,
  },
  {
    title: "Пет-проекты",
    href: routes.petProjects,
    Icon: CodeAsteriskIcon,
  },
  {
    title: "ИИ инструменты",
    href: routes.aiTools,
    Icon: SparklesIcon,
  },
];

const PopupMenuClient = () => {
  const { valueSpecialty } = useCurrentSpecialty();

  return (
    <Popover
      renderTrigger={(isOpen) => (
        <Button
          variant="ghost"
          className="grid grid-cols-[max-content_auto_max-content]  items-center gap-2"
        >
          <MenuIcon />
          <div className="w-max leading-[22px] md:text-lg">
            {valueSpecialty}
          </div>
          <span className="text-center">
            <ArrowDownIcon
              className={cn(
                "text-neutral-500",
                "w-4 h-4 mt-px",
                isOpen && "transform rotate-180"
              )}
            />
          </span>
        </Button>
      )}
    >
      <div
        className={cn(
          "bg-white rounded-xl shadow-[0px_1px_12px_2px_rgba(36,36,36,0.07)]",
          "max-w-[350px] p-5 md:max-w-[95vw]",
          " h-auto max-h-[90vh] overflow-hidden"
        )}
      >
        <div className="overflow-x-auto scrollbar-hide ">
          <HorizontalScroll className="flex items-center gap-2.5 w-max min-w-max">
            <SpecialtySwitcher />
          </HorizontalScroll>
        </div>

        <div
          className={cn(
            "mt-5 md:mt-8",
            "grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-x-20"
          )}
        >
          {MENU_ITEMS.map((props, index) => (
            <MenuItem {...props} key={index} />
          ))}
        </div>
      </div>
    </Popover>
  );
};

const Loader = () => (
  <Button
    variant="ghost"
    className="grid grid-cols-[max-content_auto_max-content]  items-center gap-2"
  >
    <MenuIcon />
    <div className="leading-[22px] md:text-lg w-12.5 bg-neutral-200 rounded-sm h-5 animate-pulse" />
    <span className="text-center">
      <ArrowDownIcon className={cn("text-neutral-500", "w-4 h-4 mt-px")} />
    </span>
  </Button>
);

export const PopupMenu = noSsrImport(PopupMenuClient, () => <Loader />);
