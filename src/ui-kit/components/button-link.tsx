import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export const ButtonLink = ({ href, children, className }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "bg-[#F0F1F1] text-[#232325] flex items-center justify-center gap-2 px-3 py-[13px] rounded-xl font-medium text-lg leading-[1.11] tracking-[-0.03em] hover:bg-[#E6E7E7] transition-colors duration-200",
        className
      )}
    >
      {children}
    </Link>
  );
};
