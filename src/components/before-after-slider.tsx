"use client";

import { useState } from "react";
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
  const [showAfter, setShowAfter] = useState(true);

  const aspectRatioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {/* After image (shown by default) */}
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        className={cn(
          "object-cover transition-opacity duration-500",
          showAfter ? "opacity-100" : "opacity-0"
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Before image */}
      <Image
        src={beforeImage}
        alt={beforeAlt}
        fill
        className={cn(
          "object-cover transition-opacity duration-500",
          showAfter ? "opacity-0" : "opacity-100"
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Toggle button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex rounded-full bg-black/80 p-1 backdrop-blur-sm">
        <button
          onClick={() => setShowAfter(false)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-all",
            !showAfter
              ? "bg-white text-charcoal-900"
              : "text-white hover:text-white/80"
          )}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-all",
            showAfter
              ? "bg-gold-600 text-white"
              : "text-white hover:text-white/80"
          )}
        >
          After
        </button>
      </div>
    </div>
  );
}
