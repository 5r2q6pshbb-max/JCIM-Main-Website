"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxPhoto {
  src: string;
  alt: string;
}

interface LightboxGalleryProps {
  photos: LightboxPhoto[];
  open: boolean;
  index: number;
  onClose: () => void;
}

export function LightboxGallery({
  photos,
  open,
  index,
  onClose,
}: LightboxGalleryProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={photos.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
      }))}
      styles={{
        container: {
          backgroundColor: "rgba(15, 15, 26, 0.95)",
        },
        button: {
          color: "#C7A34F",
          filter: "none",
        },
        navigationPrev: {
          color: "#C7A34F",
        },
        navigationNext: {
          color: "#C7A34F",
        },
      }}
      render={{
        iconPrev: () => (
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C7A34F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        ),
        iconNext: () => (
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C7A34F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        ),
        iconClose: () => (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C7A34F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ),
        slideFooter: ({ slide }) => (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 pointer-events-none">
            <p className="font-[family-name:var(--font-lora)] text-sm md:text-base text-gold/90 italic tracking-wide bg-navy-deep/60 px-6 py-2 border border-gold/15">
              {"alt" in slide ? (slide.alt as string) : ""}
            </p>
          </div>
        ),
      }}
      carousel={{ finite: false }}
      animation={{ fade: 300 }}
      controller={{ closeOnBackdropClick: true }}
    />
  );
}
