"use client";
import Image from "next/image";
import bgGradient from "./bg-gradient.png";
import { usePathname } from "next/navigation";
import { cn } from "@/core/utils";

export function BackgroundGradient() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={cn("absolute  left-0 w-full h-[674px] z-1", {
        "top-0": isHome,
        "-top-[230px]": !isHome,
      })}
    >
      <Image
        src={bgGradient}
        alt="Background stars"
        fill
        className="object-cover h-full"
        priority
        draggable={false}
      />
    </div>
  );
}
