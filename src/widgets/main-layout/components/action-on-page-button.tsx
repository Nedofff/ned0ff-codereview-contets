"use client";
import { routes } from "@/core/router";
import { cn } from "@/core/utils";
import { Button } from "@/ui-kit";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const actions = {
  [routes.home]: {
    text: "Автоотклик",
    onClick: () => {},
  },
  [routes.requirements]: {
    text: "Конструктор резюме",
    onClick: () => {},
  },
  [routes.testTasks]: {
    text: "Тренажер заданий",
    onClick: () => {},
  },
  [routes.questions]: {
    text: "Тренажер вопросов",
    onClick: () => {},
  },
  [routes.aboutUs]: {
    text: "Заказать подбор",
    onClick: () => {},
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
    <Button
      className={cn("gap-2.5 text-nowrap", className)}
      onClick={action.onClick}
    >
      {action.text}
    </Button>
  );
};
