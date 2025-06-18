import React from "react";
import { cn } from "@/lib/utils";
import { Portal } from "./portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Popup({ isOpen, onClose, children, className }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal content */}
        <div
          className={cn(
            "relative bg-white rounded-3xl shadow-2xl max-w-[838px] w-full mx-4 max-h-[90vh] overflow-y-auto",
            "sm:mx-4 xs:mx-2 xs:rounded-2xl",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-1 right-1 z-10 w-7 h-7 bg-neutral-100/80 backdrop-blur-xl rounded-full flex items-center justify-center transition-colors hover:bg-neutral-200/80"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="rgba(0,0,0,0.8)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {children}
        </div>
      </div>
    </Portal>
  );
}
