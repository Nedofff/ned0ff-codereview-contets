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

const MenuItem = ({ title, href, Icon }: MenuItem) => {
  return (
    <Link
      href={href}
      className="
        flex items-center gap-1.5 px-0 py-0 rounded-md
        text-left hover:bg-gray-50 transition-colors
        group text-black
      "
    >
      <Icon
        viewBox="0 0 24 24"
        width={20}
        height={20}
        className="w-5 h-5 text-[#333333]"
      />
      <span
        className="
        font-['Wix_Madefor_Text'] font-normal 
        text-base md:text-lg leading-[1.25] md:leading-[1.22] 
        tracking-[-0.03125em] md:tracking-[-0.028em]
        group-hover:text-gray-700
      "
      >
        {title}
      </span>
    </Link>
  );
};

interface MenuItem {
  id: string;
  title: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "jobs",
    title: "Вакансии / Cтажировки",
    href: routes.jobs,
    Icon: BriefcaseIcon,
  },
  {
    id: "tests",
    title: "Тестовые задания",
    href: "/test-assignments",
    Icon: CodeIcon,
  },
  {
    id: "events",
    title: "IT-мероприятия",
    href: "/events",
    Icon: CalendarIcon,
  },
  {
    id: "contacts",
    title: "Контакты рекрутеров",
    href: "/recruiters",
    Icon: MessageIcon,
  },
  {
    id: "resumes",
    title: "Резюме соискателей",
    href: "/resumes",
    Icon: PersonIcon,
  },
  {
    id: "skills",
    title: "Необходимые навыки",
    href: "/skills",
    Icon: StackIcon,
  },
  {
    id: "interviews",
    title: "Собеседования",
    href: "/interviews",
    Icon: MicrophoneIcon,
  },
  {
    id: "projects",
    title: "Пет-проекты",
    href: "/projects",
    Icon: CodeAsteriskIcon,
  },
  {
    id: "ai-tools",
    title: "ИИ инструменты",
    href: "/ai-tools",
    Icon: SparklesIcon,
  },
];

export const PopupMenu = () => {
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
          {MENU_ITEMS.map((props) => (
            <MenuItem {...props} key={props.id} />
          ))}
        </div>
      </div>
    </Popover>
  );
};
