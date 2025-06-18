import React, { useId } from "react";
import { cn } from "@/core/utils";

const TickIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M11.7212 0.778745C11.3499 0.406968 10.747 0.407202 10.3752 0.778745L4.31744 6.83674L1.62503 4.14435C1.25325 3.77257 0.650609 3.77257 0.278832 4.14435C-0.0929441 4.51613 -0.0929441 5.11877 0.278832 5.49055L3.6442 8.85592C3.82998 9.04169 4.07357 9.13481 4.31718 9.13481C4.5608 9.13481 4.80463 9.04192 4.9904 8.85592L11.7212 2.12492C12.0929 1.7534 12.0929 1.1505 11.7212 0.778745Z"
      fill="currentColor"
    />
  </svg>
);

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  variant?: "default" | "error";
}

export function Checkbox({
  label,
  variant = "default",
  className,
  ...props
}: CheckboxProps) {
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <div className="relative h-[22px]">
        <input
          id={id}
          type="checkbox"
          className={cn(
            "peer w-[22px] h-[22px] appearance-none border-[1.5px] rounded-lg cursor-pointer",
            "transition-all duration-200 ease-in-out",
            variant === "default"
              ? "border-[#D4D5D7]"
              : "border-quaternary-400",
            "bg-white",
            "hover:border-[#86888E] hover:checked:bg-[#0560C9] hover:checked:border-[#0560C9]",
            "checked:bg-[#0560C9] checked:border-[#0560C9]",
            "focus:ring-2 focus:ring-blue-500/20 focus:outline-none",
            className
          )}
          {...props}
        />
        <div className="absolute inset-0 pt-[3px] flex items-center justify-center text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200">
          <TickIcon />
        </div>
      </div>
      {label && (
        <label
          className="text-[18px] font-medium text-[#232325] leading-[1.22] cursor-pointer select-none"
          style={{ letterSpacing: "-2.78%" }}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
}
