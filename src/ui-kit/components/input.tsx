"use client";
import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error" | "success" | "focused" | "disabled";
  label?: string;
  errors?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Input({
  label,
  errors,
  className,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  // Автоматически устанавливаем variant="disabled" если передан disabled prop
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          className={cn(
            "block font-medium mb-2 font-wix-display",
            "after:bg-quaternary-400 after:w-[6px] after:h-[6px] after:rounded-full after:inline-block after:ml-1 after:mb-px"
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-4 top-0 bottom-0 z-10 pointer-events-none flex items-center justify-center">
            {leftIcon}
          </div>
        )}
        <input
          id={id}
          className={cn(
            "w-full py-3 border border-neutral-300 rounded-xl transition-colors duration-100",
            "font-wix-display text-lg placeholder:text-neutral-300",
            "hover:border-neutral-400",
            !!errors && "border-quaternary-400",
            "focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500 focus:outline-none",
            "disabled:border-neutral-200 disabled:bg-neutral-100",
            leftIcon ? "pl-12 pr-4" : rightIcon ? "pl-4 pr-12" : "px-4",
            leftIcon && rightIcon && "pl-12 pr-12",
            className
          )}
          disabled={disabled}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 top-0 bottom-0 z-10 flex items-center justify-center">
            {rightIcon}
          </div>
        )}
      </div>
      {errors && (
        <p className="font-wix-display font-medium text-quaternary-400 mt-1">
          {errors}
        </p>
      )}
    </div>
  );
}
