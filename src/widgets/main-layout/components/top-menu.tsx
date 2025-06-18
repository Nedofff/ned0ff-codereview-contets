"use client";
import React from "react";
import { cn } from "@/core/utils";
import { AuthModal } from "../../auth-modal/auth-modal";
import { PopupMenu } from "./popup-menu";
import { Logo } from "@/ui-kit";

interface TopMenuProps {
  className?: string;
}

export function TopMenu({ className }: TopMenuProps) {
  return (
    <div
      className={cn(
        "fixed left-1/2 transform -translate-x-1/2 z-50",
        "lg:top-[29px]",
        className
      )}
    >
      <nav
        className={cn(
          "lg:flex items-center gap-2.5",
          "bg-transparent",
          "rounded-[18px]"
        )}
      >
        {/* Кнопка назад */}
        <button
          className={cn(
            "flex items-center justify-center",
            "px-6 py-5 rounded-[18px]",
            "bg-white/92 backdrop-blur-[8px]",
            "shadow-[0px_0px_12px_0px_rgba(24,44,194,0.05)]",
            "hover:bg-white/100 transition-colors"
          )}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="#636469"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Основное меню */}
        <div
          className={cn(
            "flex items-center gap-5",
            "px-5 py-[17px] rounded-[18px]",
            "bg-white/92 backdrop-blur-[8px]",
            "shadow-[0px_0px_12px_0px_rgba(24,44,194,0.05)]"
          )}
        >
          <Logo className="gradient-primary text-transparent bg-clip-text  md:bg-none md:text-neutral-600" />

          {/* Меню с выпадающим списком */}
          <div className="relative">
            <PopupMenu />
          </div>

          {/* Кнопка Войти */}
          <AuthModal />
        </div>

        {/* Кнопка Автоотклик */}
        <button
          className={cn(
            "flex items-center justify-center gap-2.5",
            "px-5 py-[18px] rounded-[18px]",
            "bg-gradient-to-r from-[#2093FE] to-[#C217FE]",
            "backdrop-blur-[8px]",
            "hover:opacity-90 transition-opacity"
          )}
        >
          <span
            className={cn(
              "text-[18px] font-medium leading-[1.11] tracking-[-2.78%]",
              "text-white",
              "font-['Wix_Madefor_Text']"
            )}
          >
            Автоотклик
          </span>
        </button>
      </nav>
    </div>
  );
}
