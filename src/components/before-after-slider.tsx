"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className,
  aspectRatio = "video",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const aspectRatioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const step = 5;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSliderPosition((prev) => Math.max(0, prev - step));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSliderPosition((prev) => Math.min(100, prev + step));
      }
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-xl cursor-ew-resize select-none",
        aspectRatioClasses[aspectRatio],
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div
        className="absolute inset-y-0 w-1 bg-white shadow-lg cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label="Drag to compare before and after images"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
          <div className="flex gap-0.5">
            <div className="h-4 w-0.5 bg-charcoal-400 rounded-full" />
            <div className="h-4 w-0.5 bg-charcoal-400 rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
        Before
      </div>
      <div className="absolute bottom-4 right-4 rounded-full bg-gold-700 px-3 py-1 text-xs font-medium text-white">
        After
      </div>
    </div>
  );
}
