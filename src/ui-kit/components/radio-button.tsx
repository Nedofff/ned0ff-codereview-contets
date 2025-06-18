"use client";
import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  variant?: "default" | "error";
}

export function RadioButton({
  label,
  variant = "default",
  className,
  ...props
}: RadioButtonProps) {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        className={cn(
          "relative w-[22px] h-[22px] appearance-none border-[1.5px] rounded-full cursor-pointer",
          "transition-all duration-200 ease-in-out",
          "before:content-[''] before:absolute before:inset-0 before:rounded-full",
          variant === "default" ? "border-[#D4D5D7]" : "border-quaternary-400",
          // Default state
          "bg-white",
          // Hover state
          "hover:border-[#86888E]",
          // Active/checked state
          "checked:bg-[#0560C9] checked:border-[#0560C9] checked:border-2",
          // Inner dot - центрируем точно по середине
          "checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2",
          "checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full",
          "checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2",
          "focus:ring-2 focus:ring-blue-500/20 focus:outline-none",
          className
        )}
        {...props}
      />
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
