import { cn } from "@/core/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const PeopleImage = ({
  src,
  className,
  loading = "eager",
}: {
  src: string | StaticImport;
  className?: string;
  loading?: "lazy" | "eager";
}) => (
  <Image
    src={src}
    alt="Стоковый человек"
    width={50}
    height={50}
    loading={loading}
    className={cn("object-fill object-center scale-120", className)}
  />
);
