"use client";
import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label: string;
}

export function Switch({
  checked = false,
  onChange,
  disabled = false,
  className,
  label,
}: SwitchProps) {
  const id = useId();
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-center justify-center gap-2 py-3 px-[15px] bg-[#F6F6F6] rounded-xl cursor-pointer",
        disabled && "opacity-50",
        className
      )}
    >
      <div className="text-lg font-medium leading-[1.22] tracking-[-0.5px] text-[#232325]">
        {label}
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        disabled={disabled}
        className={cn(
          "relative w-9 h-[22px] rounded-[18px] border-2 transition-all duration-300",
          {
            "border-[#232325]": checked,
            "border-[#D4D5D7]": !checked,
          },
          disabled && "cursor-not-allowed",
          !disabled && "cursor-pointer"
        )}
      >
        <span
          className={cn(
            "absolute top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full transition-all duration-300",
            {
              //   "left-[18px] bg-[#232325]": checked,
              " bg-[#232325]": checked,
              "-translate-x-[14px]  bg-[#D4D5D7]": !checked,
            }
          )}
        />
      </button>
    </label>
  );
}
