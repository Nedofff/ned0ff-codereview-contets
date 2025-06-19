"use client";
import React, { useId, useState } from "react";
import { cn } from "@/core/utils";

interface SwitchProps {
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label: string;
}

export function Switch({
  onChange,
  disabled = false,
  className,
  label,
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();

  const handleToggle = () => {
    if (disabled) return;
    onChange?.(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-center justify-center gap-2 py-3 px-[15px] bg-neutral-100 rounded-xl cursor-pointer",
        disabled && "opacity-50",
        className
      )}
    >
      <div className="text-lg font-medium leading-[1.22] tracking-[-0.5px] text-neutral-800">
        {label}
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        disabled={disabled}
        className={cn(
          "relative w-9 h-[22px] rounded-[18px] border-2 transition-all duration-300",
          {
            "border-neutral-800": isChecked,
            "border-neutral-500": !isChecked,
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
              " bg-[#232325]": isChecked,
              "-translate-x-[14px]  bg-[#D4D5D7]": !isChecked,
            }
          )}
        />
      </button>
    </label>
  );
}
