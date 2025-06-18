import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/core/utils";

interface PopupProps {
  renderTrigger: (isOpen: boolean) => React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function Popover({
  renderTrigger,
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
        {renderTrigger(isOpen)}
      </div>

      {isOpen && (
        <div
          ref={contentRef}
          className={cn(
            "absolute top-full mt-5 left-1/2 -translate-x-1/2 z-50",
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
