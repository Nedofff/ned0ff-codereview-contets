"use client";
import { externalLinks, routes } from "@/core/router";
import { cn } from "@/core/utils";
import { ButtonLink } from "@/ui-kit";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";

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
    href: routes.underConstruction,
  },
  [routes.testTasks]: {
    text: "Тренажер заданий",
    href: routes.underConstruction,
  },
  [routes.aboutUs]: {
    text: "Заказать подбор",
    href: routes.underConstruction,
  },
};

export const ActionOnPageButton = dynamic(
  () => Promise.resolve(ActionOnPageButtonClient),
  {
    ssr: false,
  }
);

const ActionOnPageButtonClient = () => (
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
      variant="accent"
    >
      {action.text}
    </ButtonLink>
  );
};
