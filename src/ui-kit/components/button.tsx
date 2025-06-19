import React, { createElement } from "react";
import { cn } from "@/core/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "base" | "accent" | "second" | "filter" | "ghost";
  fullWidth?: boolean;
}

const buttonVariants = {
  base: {
    base: "bg-neutral-100 text-neutral-800 border-0 font-medium rounded-xl",
    hover: "hover:bg-neutral-150",
  },
  accent: {
    base: "gradient-primary text-neutral-10",
    hover: "hover:opacity-90",
  },
  second: {
    base: "rounded-[10px] p-px bg-gradient-to-r from-[#E25377] via-[#EEB902] to-[#62B4FF]",
    hover: "hover:text-primary-500",
  },
  filter: {
    base: "gradient-secondary-light text-neutral-800 border-0 font-medium rounded-xl",
    hover: "hover:opacity-90",
  },
  ghost: {
    base: "bg-transparent text-neutral-800 border-0 font-medium rounded-xl p-0",
    hover: "hover:bg-transparent",
  },
};

export function Button({
  variant = "accent",
  className,
  children,
  fullWidth,
  ...props
}: ButtonProps) {
  const content =
    variant === "second"
      ? createElement(
          "span",
          {
            className: "bg-neutral-100 px-4 py-3 rounded-[calc(10px-1px)]",
          },
          children
        )
      : children;

  return (
    <button
      className={cn(
        "cursor-pointer",
        "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        "px-4 py-3 text-base",
        buttonVariants[variant].base,
        buttonVariants[variant].hover,
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
}
