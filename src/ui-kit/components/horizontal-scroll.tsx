import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/core/utils";

interface HorizontalScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showScrollbar?: boolean;
  gap?: number;
  enableDragScroll?: boolean;
}

export function HorizontalScroll({
  children,
  className,
  showScrollbar = false,
  gap = 16,
  enableDragScroll = true,
  ...props
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(false);

  // Проверяем необходимость скроллинга
  useEffect(() => {
    const checkOverflow = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        setHasOverflow(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [children]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enableDragScroll || !hasOverflow) return;

    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !enableDragScroll || !hasOverflow) return;

    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex",
        hasOverflow && "overflow-x-auto",
        !showScrollbar && hasOverflow && "scrollbar-hide",
        enableDragScroll && hasOverflow && "cursor-grab select-none",
        isDragging && "cursor-grabbing",
        className
      )}
      style={{ gap: `${gap}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}
