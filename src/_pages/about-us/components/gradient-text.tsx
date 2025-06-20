import { cn } from "@/core/utils";

export const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "gradient-about-us bg-clip-text text-transparent box-decoration-clone",
      className
    )}
  >
    {children}
  </span>
);
