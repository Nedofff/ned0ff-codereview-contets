"use client";
import Image from "next/image";
import bgGradient from "./bg-gradient.png";
import { usePathname } from "next/navigation";
import { cn } from "@/core/utils";
import { routes } from "@/core/router";
import { noSsrImport } from "@/core/no-ssr-import";

const BackgroundGradientComponent = () => {
  const pathname = usePathname();
  const isGetUp = [routes.home, routes.aboutUs].includes(pathname);
  return (
    <div
      className={cn(
        "absolute pointer-events-none left-0 w-full h-[674px] z-1  -top-[230px]",
        {
          "top-0": isGetUp,
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
};

export const BackgroundGradient = noSsrImport(
  BackgroundGradientComponent,
  () => null
);
