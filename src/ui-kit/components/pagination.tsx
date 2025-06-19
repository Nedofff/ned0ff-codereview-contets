import React from "react";
import { cn } from "@/core/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = totalPages > 1 ? getVisiblePages() : [1];

  return (
    <div
      className={cn("flex items-center justify-center gap-[6px]", className)}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-[10px] text-[18px] font-medium transition-all duration-200",
          "text-[#232325] leading-[1.22]",
          currentPage === 1
            ? "text-neutral-400 cursor-not-allowed"
            : "hover:bg-[#F6F6F6]"
        )}
        style={{ letterSpacing: "-2.78%" }}
      >
        ←
      </button>

      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <div className="flex items-center justify-center w-10 h-10 rounded-[10px]">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-[#232325] rounded-full"></div>
                <div className="w-1 h-1 bg-[#232325] rounded-full"></div>
                <div className="w-1 h-1 bg-[#232325] rounded-full"></div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-[10px] text-[18px] font-medium transition-all duration-200",
                "text-[#232325] leading-[1.22]",
                currentPage === page
                  ? "bg-gradient-to-r from-[#F4B8B8] via-[#EAD6B5] via-[#E3EAB3] to-[#C5F1D0]"
                  : "hover:bg-[#F6F6F6]"
              )}
              style={{ letterSpacing: "-2.78%" }}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-[10px] text-[18px] font-medium transition-all duration-200",
          "text-[#232325] leading-[1.22]",
          currentPage === totalPages
            ? "text-neutral-400 cursor-not-allowed"
            : "hover:bg-[#F6F6F6]"
        )}
        style={{ letterSpacing: "-2.78%" }}
      >
        →
      </button>
    </div>
  );
}
