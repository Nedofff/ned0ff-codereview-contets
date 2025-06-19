import Link from "next/link";
import React from "react";
import { cn } from "@/core/utils";

export interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "filter" | "default";
}

export const ButtonLink = ({
  href,
  children,
  className,
  variant = "default",
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center gap-2 px-3 py-[13px] rounded-xl font-medium text-lg leading-[1.11] tracking-[-0.03em] transition-colors duration-200",
        variant === "filter"
          ? "gradient-secondary-light text-neutral-800 hover:bg-neutral-300"
          : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200",
        className
      )}
    >
      {children}
    </Link>
  );
};
