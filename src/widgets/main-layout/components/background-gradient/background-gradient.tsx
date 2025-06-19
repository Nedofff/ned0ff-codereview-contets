"use client";
import Image from "next/image";
import bgGradient from "./bg-gradient.png";
import { usePathname } from "next/navigation";
import { cn } from "@/core/utils";
import { routes } from "@/core/router";

export function BackgroundGradient() {
  const pathname = usePathname();
  const isHome = pathname === routes.home;

  return (
    <div
      className={cn(
        "absolute pointer-events-none left-0 w-full h-[674px] z-1",
        {
          "top-0": isHome,
          "-top-[230px]": !isHome,
        }
      )}
    >
      <Image
        src={bgGradient}
        alt="Background stars"
        fill
        className="object-cover h-full pointer-events-none"
        priority
        draggable={false}
      />
    </div>
  );
}
