"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { OrnateFrame } from "@/components/shared/ornate-frame";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { UPCOMING_EVENTS } from "@/lib/content/events";
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";

export function EventsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
      year: date.getFullYear(),
    };
  };

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(199,163,79,0.03)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              tag="Upcoming Events"
              title="Join the Gathering"
              align="left"
              className="mb-0"
            />
            <div className="hidden md:flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {UPCOMING_EVENTS.map((event) => {
                const date = formatDate(event.date);
                return (
                  <div
                    key={event.id}
                    className="flex-none w-[300px] sm:w-[350px] md:w-[400px]"
                  >
                    <OrnateFrame className="h-full bg-navy-deep/50">
                      <div className="space-y-4">
                        {/* Date badge */}
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 text-center border border-gold/20 p-3 min-w-[64px]">
                            <span className="block font-[family-name:var(--font-playfair)] text-2xl text-gold font-bold">
                              {date.day}
                            </span>
                            <span className="block text-[10px] tracking-wider text-ivory/40">
                              {date.month}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-gold/50">
                              {event.category}
                            </span>
                            <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold mt-1">
                              {event.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm text-ivory/40 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="space-y-2 pt-2">
                          <div className="flex items-center gap-2 text-xs text-ivory/30">
                            <Clock className="w-3 h-3 text-gold/40" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-ivory/30">
                            <MapPin className="w-3 h-3 text-gold/40" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </OrnateFrame>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mt-10 text-center">
            <ChamferButton href="/events" variant="outline">
              View All Events
            </ChamferButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
