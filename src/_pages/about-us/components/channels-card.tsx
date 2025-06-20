import { Card } from "@/ui-kit";
import Image from "next/image";
import Link from "next/link";
import { type Channel } from "../about-us-types";
import { cn } from "@/core/utils";

export const ChannelsCard = ({
  iconUrl,
  subscribersThousands,
  tagTelegram,
  title,
}: Channel) => (
  <Card
    className={cn(
      "font-ibm-plex-sans flex flex-col gap-y-[15px] items-center relative py-5 px-[15px] min-w-[222px]",
      "lg:p-7.5 lg:w-[280px]"
    )}
  >
    <Image
      src={iconUrl}
      alt={title}
      width={100}
      height={100}
      className="w-20 h-20 rounded-full lg:w-25 lg:h-25"
    />
    <div className="flex flex-col gap-y-0.5 items-center">
      <h3 className="font-semibold leading-[20px] tracking-[-0.8px] text-center max-w-[192px] text-wrap lg:text-lg lg:leading-[22px]">
        {title}
      </h3>
      <p className=" text-sm leading-[100%] tracking-[-0.8px] lg:text-lg">
        @{tagTelegram}
      </p>
    </div>
    <div className="font-wix-text font-medium text-sm leading-[18px] tracking-[-1px] bg-primary-100 px-[5px] py-0.5 rounded-full lg:text-base lg:leading-[16px]">
      {subscribersThousands}K+ подписчиков
    </div>
    <Link
      aria-label={title}
      href={`https://t.me/${tagTelegram}`}
      target="_blank"
      className="absolute inset-0 z-1"
    />
  </Card>
);
