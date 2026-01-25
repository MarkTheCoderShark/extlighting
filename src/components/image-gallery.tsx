"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  showFilters?: boolean;
  columns?: 2 | 3 | 4;
}

const categoryLabels: Record<string, string> = {
  all: "All",
  residential: "Residential",
  commercial: "Commercial",
  holiday: "Holiday",
  security: "Security",
};

export function ImageGallery({
  images,
  className,
  showFilters = true,
  columns = 3,
}: ImageGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", ...Array.from(new Set(images.map((img) => img.category)))];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const columnClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={cn("gallery-dark rounded-2xl p-6 md:p-10", className)}>
      {showFilters && categories.length > 2 && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === category
                  ? "bg-gold-700 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>
      )}

      <div className={cn("grid gap-4", columnClasses[columns])}>
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="text-sm font-medium text-white">{image.alt}</p>
              {image.location && (
                <p className="text-xs text-white/70">{image.location}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <p className="text-center text-gallery-muted py-12">
          No images found for this category.
        </p>
      )}
    </div>
  );
}
