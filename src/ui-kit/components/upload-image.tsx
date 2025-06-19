"use client";
import React, { useRef } from "react";
import { cn } from "@/core/utils";
import { type UseFormRegisterReturn } from "react-hook-form";
import { DownloadIcon } from "../icons";

interface UploadImageProps<T extends string> {
  accept?: string;
  maxSize?: number; // в MB
  className?: string;
  preview?: string;
  register?: UseFormRegisterReturn<T>;
  title?: string;
}

export function UploadImage<T extends string>({
  accept = "image/*",
  maxSize = 10,
  className,
  preview,
  register,
  title = "Скриншоты",
}: UploadImageProps<T>) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { ref, ...restRegister } = register || {};

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="text-base font-medium text-[#232325]">{title}</div>

      <div
        className={cn(
          "border border-dashed border-[#ACAEB2] rounded-xl p-[30px_20px] text-center cursor-pointer transition-colors",
          "hover:border-[#C546FA] group",
          "flex flex-col items-center justify-center gap-2.5 min-h-[150px]"
        )}
        onClick={handleClick}
      >
        <input
          ref={(e) => {
            ref?.(e);
            fileInputRef.current = e;
          }}
          type="file"
          multiple
          accept={accept}
          {...restRegister}
          className="hidden"
        />

        {preview ? (
          <div className="flex flex-col items-center gap-2.5">
            <img
              src={preview}
              alt="Preview"
              className="max-h-32 mx-auto rounded"
            />
            <p className="text-base font-medium text-[#ACAEB2]">
              не более {maxSize} MB
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2.5">
            <div className="text-neutral-400 group-hover:text-[#C546FA] transition-colors">
              <DownloadIcon className="w-[60px] h-[60px] hover:stroke-[#C546FA]" />
            </div>
            <p className="text-base font-medium text-neutral-400 group-hover:text-[#C546FA] transition-colors">
              не более {maxSize} MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
