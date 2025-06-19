"use client";
import { cn } from "@/core/utils";
import { BigArrowLeftIcon } from "@/ui-kit";
import { usePathname } from "next/navigation";

export const BackButton = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return (
    <button
      className={cn(
        "hidden sm:flex items-center justify-center",
        "px-6 py-5 rounded-[18px]",
        "bg-white/92 backdrop-blur-[8px]",
        "shadow-[0px_0px_12px_0px_rgba(24,44,194,0.05)]",
        "hover:bg-white/100 transition-colors"
      )}
    >
      <BigArrowLeftIcon className="mt-1" />
    </button>
  );
};
