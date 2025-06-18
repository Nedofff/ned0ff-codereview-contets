"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface UploadLogoProps {
  onFileSelect: (file: File) => void;
  currentLogo?: string;
  className?: string;
}

export function UploadLogo({
  onFileSelect,
  currentLogo,
  className,
}: UploadLogoProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        alert("Файл слишком большой. Максимальный размер: 1MB");
        return;
      }
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={cn(
        "w-24 h-24 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer transition-all duration-200",
        "hover:border-primary-400 hover:bg-primary-50",
        "flex items-center justify-center overflow-hidden",
        className
      )}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {currentLogo ? (
        <img
          src={currentLogo}
          alt="Logo"
          className="w-full h-full object-contain p-2"
        />
      ) : (
        <div className="text-center">
          <div className="text-2xl text-neutral-400 mb-1">🏢</div>
          <p className="text-xs text-neutral-500">Логотип</p>
        </div>
      )}
    </div>
  );
}
