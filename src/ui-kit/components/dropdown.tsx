import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export function Dropdown({
  options = [],
  value,
  placeholder = "Выберите опцию",
  disabled = false,
  className,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрытие дропдауна при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  return (
    <div className={cn("relative w-full", className)} ref={dropdownRef}>
      {/* Основная кнопка дропдауна */}
      <button
        type="button"
        className={cn(
          "w-full px-4 py-3 text-left rounded-xl border transition-all duration-200",
          "bg-neutral-100 border-neutral-200 text-neutral-800",
          "hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          isOpen && "border-blue-500 ring-2 ring-blue-500",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <div className="flex items-center justify-between">
          <span
            className={cn(
              selectedOption ? "text-neutral-800" : "text-neutral-500"
            )}
          >
            {selectedOption?.label || placeholder}
          </span>
          <svg
            className={cn(
              "w-5 h-5 transition-transform duration-200",
              isOpen && "transform rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Выпадающий список */}
      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-xl border border-neutral-200 shadow-lg max-h-60 overflow-auto">
          {options.length === 0 ? (
            <div className="px-4 py-3 text-neutral-500 text-center">
              Нет доступных опций
            </div>
          ) : (
            options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={cn(
                  "w-full px-4 py-3 text-left transition-colors duration-150",
                  "hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-none",
                  selectedValue === option.value && "bg-blue-50 text-blue-600",
                  option.disabled && "opacity-50 cursor-not-allowed"
                )}
                onClick={() => !option.disabled && handleSelect(option.value)}
                disabled={option.disabled}
              >
                {option.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
