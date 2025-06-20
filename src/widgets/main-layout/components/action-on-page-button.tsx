"use client";
import { externalLinks, routes } from "@/core/router";
import { cn } from "@/core/utils";
import { ButtonLink } from "@/ui-kit";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const actions = {
  [routes.jobs]: {
    text: "Автоотклик",
    href: externalLinks.sofi,
  },
  [routes.questions]: {
    text: "Тренажер вопросов",
    href: externalLinks.testing,
  },
  [routes.requirements]: {
    text: "Конструктор резюме",
    href: routes.notNow,
  },
  [routes.testTasks]: {
    text: "Тренажер заданий",
    href: routes.notNow,
  },
  [routes.aboutUs]: {
    text: "Заказать подбор",
    href: routes.notNow,
  },
};

export const ActionOnPageButton = () => (
  <>
    <ActionOnPageButtonInner className="hidden h-full sm:flex" />
    {createPortal(
      <ActionOnPageButtonInner className="fixed bottom-[15px] h-[54px] right-[15px] z-20 sm:hidden" />,
      document.body
    )}
  </>
);

const ActionOnPageButtonInner = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const action = actions[pathname];

  if (!action) {
    return null;
  }

  return (
    <ButtonLink
      className={cn("gap-2.5 text-nowrap", className)}
      href={externalLinks.sofi}
    >
      {action.text}
    </ButtonLink>
  );
};
