import { cn } from "@/core/utils";

export const Logo = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "font-wix-display font-bold text-[22px] text-neutral-600",
      className
    )}
  >
    &lt;
    <span className="hidden md:inline">
      <span className="font-normal">code</span>
      review
    </span>
    /&gt;
  </span>
);
