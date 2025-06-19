"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/core/utils";
import { ArrowDownIcon, TickIcon } from "../icons";
import { Portal } from "./portal";

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
  const [selectedValue, setSelectedValue] = useState(value ?? "");
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const updateDropdownPosition = useCallback(() => {
    if (dropdownRef.current && dropdownContainerRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      dropdownContainerRef.current.style.top = `${
        rect.bottom + window.scrollY + 8
      }px`;
      dropdownContainerRef.current.style.left = `${
        rect.left + window.scrollX
      }px`;
      dropdownContainerRef.current.style.width = `${rect.width}px`;
    }
  }, []);

  useEffect(() => {
    setSelectedValue(value ?? "");
  }, [value]);

  // Закрытие дропдауна при клике вне его и обновление позиции
  useEffect(() => {
    updateDropdownPosition();
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !dropdownRef.current?.contains(event.target as Node) &&
        !dropdownContainerRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (isOpen) {
        updateDropdownPosition();
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        updateDropdownPosition();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, updateDropdownPosition]);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          "p-3 pl-[15px] text-left rounded-xl border transition-all duration-200 ",
          "bg-neutral-100 border-neutral-200 text-neutral-800",
          "hover:border-neutral-300 focus:outline-none  ",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        onClick={handleToggle}
        disabled={disabled}
      >
        <div className="flex items-center font-medium">
          <span className="text-neutral-800 text-lg text-nowrap leading-[20px] md:leading-[22px]">
            {selectedOption?.label ?? placeholder}
          </span>
          <ArrowDownIcon
            width={16}
            height={16}
            className={cn(
              "ml-[5px]",
              "transition-transform duration-200",
              isOpen && "transform rotate-180",
              "text-neutral-500"
            )}
          />
        </div>
      </button>

      {isOpen && !disabled && (
        <Portal>
          <div
            ref={dropdownContainerRef}
            className="absolute z-20 bg-white rounded-xl border border-neutral-200 shadow-lg max-h-60 p-[10px_0px_5px] overflow-auto"
          >
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
                    "flex justify-between items-center",
                    selectedValue === option.value && "bg-neutral-200",
                    option.disabled && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  disabled={option.disabled}
                >
                  {option.label}
                  {selectedValue === option.value && <TickIcon />}
                </button>
              ))
            )}
          </div>
        </Portal>
      )}
    </div>
  );
}
