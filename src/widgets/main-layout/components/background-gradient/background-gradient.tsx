"use client";
import Image from "next/image";
import bgGradientWebp from "./bg-gradient.webp";
import { usePathname } from "next/navigation";
import { cn } from "@/core/utils";
import { routes } from "@/core/router";

export const BackgroundGradient = () => {
  const pathname = usePathname();
  const isGetUp = [routes.home, routes.aboutUs].includes(pathname);

  const isEagerLoading = isGetUp;

  return (
    <div
      className={cn(
        "absolute pointer-events-none left-0 w-full h-[674px] z-1 -top-[230px]",
        {
          "top-0": isGetUp,
        }
      )}
    >
      <Image
        src={bgGradientWebp}
        alt="Background stars gradient"
        fill
        className="object-cover h-full pointer-events-none"
        priority={isEagerLoading}
        loading={isEagerLoading ? "eager" : "lazy"}
        quality={75}
        sizes="100vw"
        draggable={false}
      />
    </div>
  );
};
