"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { PhotoGrid } from "@/components/shared/photo-grid";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const CAMPUS_PHOTOS = [
  { src: "/images/berean/campus-1.jpg", alt: "Worship Hall" },
  { src: "/images/berean/campus-2.jpg", alt: "Prayer Room", span: "wide" as const },
  { src: "/images/berean/campus-3.jpg", alt: "Fellowship Area" },
  { src: "/images/berean/campus-4.jpg", alt: "Sunday Service" },
  { src: "/images/berean/campus-5.jpg", alt: "Youth Meeting" },
  { src: "/images/berean/campus-6.jpg", alt: "Community Outreach" },
];

export function CampusGallery() {
  return (
    <section className="section-padding bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Campus" title="Our Space" />

        <RevealOnScroll variant="fadeIn">
          <PhotoGrid photos={CAMPUS_PHOTOS} columns={3} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
