import { cn } from "@/core/utils";
export const Logo = ({
  className,
  classNameText,
}: {
  className?: string;
  classNameText?: string;
}) => (
  <span
    className={cn(
      "font-wix-display font-semibold text-[22px] text-neutral-600",
      className
    )}
  >
    &lt;
    {/*
     */}
    <span className={classNameText}>
      {/*
       */}
      <span className="font-normal">code</span>
      review
    </span>
    /&gt;
  </span>
);
