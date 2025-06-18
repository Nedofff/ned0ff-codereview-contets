"use client";
import React, { useEffect } from "react";
import { cn } from "@/core/utils";
import { Portal } from "./portal";
import { CrossIcon } from "../icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Popup({ isOpen, onClose, children, className }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        <div
          className={cn(
            "relative bg-white rounded-3xl shadow-2xl max-w-[838px] w-full mx-4 max-h-[90vh] ",
            "sm:mx-4 xs:mx-2 xs:rounded-2xl",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-[5px] -right-[38px] z-10 w-7 h-7 bg-neutral-100 backdrop-blur-xl rounded-full flex items-center justify-center transition-colors hover:bg-neutral-200/80"
          >
            <CrossIcon className="w-[14px] h-[14px]" />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
}
