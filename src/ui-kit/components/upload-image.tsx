"use client";
import React, { useRef } from "react";
import { cn } from "@/core/utils";

interface UploadImageProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // в MB
  className?: string;
  preview?: string;
}

export function UploadImage({
  onFileSelect,
  accept = "image/*",
  maxSize = 5,
  className,
  preview,
}: UploadImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > maxSize * 1024 * 1024) {
        alert(`Файл слишком большой. Максимальный размер: ${maxSize}MB`);
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
        "border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center cursor-pointer transition-colors",
        "hover:border-primary-400 hover:bg-primary-50",
        className
      )}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {preview ? (
        <div className="space-y-4">
          <img
            src={preview}
            alt="Preview"
            className="max-h-32 mx-auto rounded"
          />
          <p className="text-sm text-neutral-600">Нажмите для изменения</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-4xl text-neutral-400">📷</div>
          <div>
            <p className="text-neutral-700 font-medium">
              Загрузить изображение
            </p>
            <p className="text-sm text-neutral-500">
              Перетащите файл или нажмите для выбора
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Максимальный размер: {maxSize}MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
