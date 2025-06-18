import { cn } from "@/core/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const BannerIcon = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "w-10 h-10 rounded-full overflow-hidden border-2 border-neutral-100 object-center",
      className
    )}
  >
    {children}
  </div>
);

export const BannerImage = ({
  src,
  className,
}: {
  src: string | StaticImport;
  className?: string;
}) => (
  <Image
    src={src}
    alt="Стоковый человек"
    width={50}
    height={50}
    className={cn("object-fill object-center scale-120", className)}
  />
);
