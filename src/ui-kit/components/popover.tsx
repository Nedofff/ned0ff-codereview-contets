import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PopupProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function Popover({
  trigger,
  children,
  className,
  contentClassName,
}: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={cn("relative inline-block", className)}>
      <div ref={triggerRef} onClick={togglePopup}>
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={contentRef}
          className={cn(
            "absolute top-full mt-5 left-1/2 -translate-x-1/2 z-50",
            "shadow-2xl border border-neutral-100",
            "min-w-max",
            contentClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
