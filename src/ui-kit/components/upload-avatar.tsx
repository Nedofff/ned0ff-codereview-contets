"use client";
import React, { useRef } from "react";
import { cn } from "@/core/utils";

interface UploadAvatarProps {
  onFileSelect: (file: File) => void;
  currentAvatar?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
};

export function UploadAvatar({
  onFileSelect,
  currentAvatar,
  size = "md",
  className,
}: UploadAvatarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        return;
      }
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "rounded-full border-2 border-dashed border-neutral-300 cursor-pointer transition-all duration-200",
          "hover:border-primary-400 hover:bg-primary-50",
          "flex items-center justify-center overflow-hidden",
          sizeClasses[size]
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

        {currentAvatar ? (
          <img
            src={currentAvatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="text-2xl text-neutral-400 mb-1">👤</div>
            <p className="text-xs text-neutral-500">Фото</p>
          </div>
        )}
      </div>

      <div className="absolute -bottom-1 -right-1 bg-primary-400 text-white rounded-full p-1 text-xs">
        📷
      </div>
    </div>
  );
}
