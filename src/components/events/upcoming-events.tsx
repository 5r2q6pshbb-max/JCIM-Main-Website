"use client";

import { useState } from "react";
import { UPCOMING_EVENTS } from "@/lib/content/events";
import { SectionHeader } from "@/components/shared/section-header";
import { TabFilter } from "@/components/shared/tab-filter";
import { CountdownTimer } from "@/components/shared/countdown-timer";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const CATEGORIES = ["All", "Service", "Training", "Conference", "Outreach"] as const;

const CATEGORY_LABELS: Record<string, string> = {
  service: "Service",
  training: "Training",
  conference: "Conference",
  outreach: "Outreach",
  fellowship: "Fellowship",
};

export function UpcomingEvents() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredEvents =
    activeCategory === "All"
      ? UPCOMING_EVENTS
      : UPCOMING_EVENTS.filter(
          (e) => e.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Upcoming" title="What's Coming Up" />

        <TabFilter
          categories={CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {filteredEvents.map((event, i) => (
            <RevealOnScroll key={event.id} variant="fadeUp" delay={i * 0.1}>
              <div className="group cursor-pointer border border-gold/10 hover:border-gold/25 transition-colors duration-500 bg-navy/30">
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] bg-navy/80 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(199,163,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(199,163,79,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-gold/90 text-dark-base px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-mono font-semibold">
                    {CATEGORY_LABELS[event.category] ?? event.category}
                  </div>

                  {/* Date overlay */}
                  <div className="absolute bottom-3 right-3 bg-navy-deep/80 border border-gold/20 px-3 py-2 text-center">
                    <span className="block text-xl font-bold text-gold font-mono leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="block text-[9px] tracking-widest uppercase text-ivory/50 mt-1">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-white group-hover:text-gold transition-colors duration-300 leading-tight">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 text-sm text-ivory/40">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-3.5 h-3.5 text-gold/50 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {" at "}
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-3.5 h-3.5 text-gold/50 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-ivory/35 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  {/* Countdown */}
                  <CountdownTimer targetDate={event.date} />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
