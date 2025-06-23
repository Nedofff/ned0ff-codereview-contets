import { cn } from "@/core/utils";
import Image from "next/image";

interface EmptyStateProps {
  title: string;
  description?: string;
  className?: string;
}

export const EmptyState = ({
  title,
  description,
  className,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 px-4",
        "text-center",
        className
      )}
    >
      <div className="mb-4 ">
        <Image
          alt="sofi"
          width={1024}
          height={1024}
          src="/sofi.png"
          className="w-32 h-32 rounded-full"
          draggable={false}
        />
      </div>

      <h3
        className={cn("text-xl font-bold text-neutral-800 mb-2", "md:text-2xl")}
      >
        {title}
      </h3>

      {description && (
        <p
          className={cn(
            "text-neutral-600 font-medium leading-[20px] max-w-md",
            "md:text-lg md:leading-[22px]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
