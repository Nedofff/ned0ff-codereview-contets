"use client";
import { Button } from "@/ui-kit";
import { usePathname } from "next/navigation";

export const ActionOnPageButton = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return (
    <Button className="flex items-center justify-center gap-2.5 h-full">
      Автоотклик
    </Button>
  );
};
