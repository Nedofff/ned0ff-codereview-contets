"use client";

import { useState } from "react";
import { CopyIcon } from "@/ui-kit/icons";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-neutral-600 flex items-center gap-x-1 font-wix-display text-xs hover:text-neutral-500 font-medium"
    >
      <CopyIcon className="w-4.5 h-4.5" />
      {copied ? "Скопировано!" : "Копировать"}
    </button>
  );
}
