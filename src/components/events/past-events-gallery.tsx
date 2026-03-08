"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { PhotoGrid } from "@/components/shared/photo-grid";

const GALLERY_PHOTOS = [
  { src: "/images/events/event-1.jpg", alt: "Worship Night" },
  { src: "/images/events/event-2.jpg", alt: "Kingdom Conference" },
  { src: "/images/events/event-3.jpg", alt: "Campus Outreach", span: "wide" as const },
  { src: "/images/events/event-4.jpg", alt: "Prayer Vigil" },
  { src: "/images/events/event-5.jpg", alt: "Foundation School" },
  { src: "/images/events/event-6.jpg", alt: "Cell Group Fellowship" },
];

export function PastEventsGallery() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Gallery" title="Moments That Matter" />
        <PhotoGrid photos={GALLERY_PHOTOS} columns={3} />
      </div>
    </section>
  );
}
