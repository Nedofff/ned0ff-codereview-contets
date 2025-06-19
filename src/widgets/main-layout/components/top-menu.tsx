import React from "react";
import { cn } from "@/core/utils";
import { AuthModalButton } from "../../auth-modal/auth-modal";
import { PopupMenu } from "./popup-menu";
import { Logo } from "@/ui-kit";
import Link from "next/link";
import { ActionOnPageButton } from "./action-on-page-button";
import { BackButton } from "./back-button";

export function TopMenu() {
  return (
    <div
      className={cn(
        "fixed left-1/2 transform -translate-x-1/2 z-50",
        "sm:top-[29px]"
      )}
    >
      <nav
        className={cn(
          "flex items-center gap-2.5",
          "bg-transparent h-[56px]",
          "rounded-[18px]"
        )}
      >
        <BackButton />

        <div
          className={cn(
            "flex items-center gap-5",
            "px-5 py-[17px] rounded-[18px]",
            "bg-white/92 backdrop-blur-[8px]",
            "shadow-[0px_0px_12px_0px_rgba(24,44,194,0.05)]"
          )}
        >
          <Link href="/">
            <Logo
              classNameText="hidden md:inline "
              className="gradient-primary text-transparent bg-clip-text  md:bg-none md:text-neutral-600 leading-[22px] "
            />
          </Link>

          <PopupMenu />

          <AuthModalButton />
        </div>
        <ActionOnPageButton />
      </nav>
    </div>
  );
}
