"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./reveal-on-scroll";
import { LightboxGallery } from "./lightbox-gallery";

interface PhotoItem {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "default";
}

interface PhotoGridProps {
  photos: PhotoItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export function PhotoGrid({
  photos,
  className,
  columns = 3,
}: PhotoGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className={cn(
          "grid gap-3 md:gap-4",
          columns === 2 && "grid-cols-1 sm:grid-cols-2",
          columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          className
        )}
      >
        {photos.map((photo, i) => (
          <RevealOnScroll key={i} variant="scaleIn" delay={i * 0.05}>
            <div
              className={cn(
                "relative overflow-hidden group cursor-pointer",
                photo.span === "wide" && "sm:col-span-2",
                photo.span === "tall" && "sm:row-span-2",
                photo.span === "wide"
                  ? "aspect-[2/1]"
                  : photo.span === "tall"
                    ? "aspect-[1/2]"
                    : "aspect-square"
              )}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-warm-white text-sm font-medium">{photo.alt}</p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <LightboxGallery
        photos={photos.map((p) => ({ src: p.src, alt: p.alt }))}
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
