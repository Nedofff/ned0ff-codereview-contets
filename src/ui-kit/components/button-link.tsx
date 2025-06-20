import Link from "next/link";
import React, { createElement } from "react";
import { cn } from "@/core/utils";

export interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "filter" | "default" | "second";
}

export const ButtonLink = ({
  href,
  children,
  className,
  variant = "default",
}: ButtonLinkProps) => {
  const content =
    variant === "second"
      ? createElement(
          "span",
          {
            className: cn(
              "bg-neutral-100 px-4 py-3 rounded-[calc(10px-1px)]",
              className
            ),
          },
          children
        )
      : children;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center gap-2 px-3 py-[13px] rounded-xl font-medium text-lg leading-[1.11] tracking-[-0.03em] transition-colors duration-200",
        {
          "bg-neutral-100 text-neutral-800 hover:bg-neutral-200":
            variant === "default",
          "gradient-secondary-light text-neutral-800 hover:bg-neutral-300":
            variant === "filter",
          "rounded-[10px] p-px gradient-tertiary hover:text-primary-500":
            variant === "second",
          [className ?? ""]: variant !== "second",
        }
      )}
    >
      {content}
    </Link>
  );
};
