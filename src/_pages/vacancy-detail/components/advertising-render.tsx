"use client";
import { noSsrImport } from "@/core/no-ssr-import";
import { externalLinks } from "@/core/router";
import { cn } from "@/core/utils";
import { ArrowTopRightIcon, Card } from "@/ui-kit";
import Image from "next/image";
import { createPortal } from "react-dom";

const AdvertisingRenderClient = () => {
  const advertising = document.getElementById("advertising");

  if (!advertising) {
    return null;
  }

  return createPortal(<AdvertisingBlock />, advertising);
};

const AdvertisingBlock = () => (
  <Card
    className={cn(
      "bg-primary-100 rounded-xl flex items-center gap-x-2.5 font-wix-display",
      "mt-7.5 py-4 pl-[11px] pr-2.5",
      "md:py-3 md:pl-[15px] md:pr-7.5 md:gap-x-[15px]"
    )}
  >
    <Image
      src="/sofi-scaled.png"
      alt=""
      width={730}
      height={752}
      className="rounded-full w-12 h-12"
    />

    <p className="text-sm font-medium !m-0 leading-[18px] md:!text-base md:!leading-[20px]">
      Подключи автоотклики — и пусть Софи работает за тебя 24/7
      <br />
      <span className="font-bold text-primary-500">Попробовать бесплатно</span>
    </p>

    <ArrowTopRightIcon
      className="w-4 h-4 hidden ml-auto md:block"
      viewBox="0 0 12 12"
    />
    <Card.Link title="Софи" href={externalLinks.sofi} />
  </Card>
);

export const AdvertisingRender = noSsrImport(
  AdvertisingRenderClient,
  () => null
);
