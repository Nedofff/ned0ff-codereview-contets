import { cn } from "@/core/utils";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-neutral-100 rounded-lg p-[15px]", className)}>
      {children}
    </div>
  );
};
