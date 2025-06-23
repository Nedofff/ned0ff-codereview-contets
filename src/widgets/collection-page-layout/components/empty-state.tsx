import { cn } from "@/core/utils";

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
      <div className="mb-4">
        <svg
          className="w-16 h-16 text-neutral-300 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.464-.881-6.08-2.33m0 0L5 13m.927-.637-.464-.462M6.5 9L8 7.5m0 0L9.5 6M8 7.5L6.5 6m9.5 1.5L14 9.5M14 9.5L12.5 11M14 9.5L15.5 8"
          />
        </svg>
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
