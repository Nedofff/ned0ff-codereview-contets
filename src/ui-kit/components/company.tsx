import { cn } from "@/core/utils";
import Image from "next/image";

export const Company = ({
  companyName,
  image,
  location,
  className,
  classNameImage,
}: {
  companyName: string;
  image?: string;
  location: string;
  className?: string;
  classNameImage?: string;
}) => (
  <div
    className={cn(
      "grid grid-cols-[max-content_auto] grid-rows-[max-content_auto] gap-x-2.5 font-semibold font-wix-display",
      className
    )}
  >
    {image && (
      <div className="w-10.5 h-10.5 relative row-span-2">
        <Image
          src={image}
          fill
          alt={`Лого ${companyName}`}
          className={cn("object-cover rounded-lg", classNameImage)}
        />
      </div>
    )}
    <span className="text-lg leading-[22px]">{companyName}</span>
    <span className="leading-[20px] text-neutral-600">{location}</span>
  </div>
);
