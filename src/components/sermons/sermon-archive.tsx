"use client";

import { useState } from "react";
import { FEATURED_SERMONS } from "@/lib/content/sermons";
import { SectionHeader } from "@/components/shared/section-header";
import { TabFilter } from "@/components/shared/tab-filter";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { AudioPlayer } from "@/components/sermons/audio-player";

const CATEGORIES = ["All", "Series"] as const;

export function SermonArchive() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSermons =
    activeCategory === "All"
      ? FEATURED_SERMONS
      : FEATURED_SERMONS.filter((s) => {
          if (activeCategory === "Series") return !!s.series;
          return true;
        });

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Sermons" title="The Word Archive" />

        <TabFilter
          categories={CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSermons.map((sermon, i) => (
            <RevealOnScroll key={sermon.id} variant="fadeUp" delay={i * 0.1}>
              <div className="group cursor-pointer">
                {/* Image / Video placeholder */}
                <div className="relative aspect-video bg-navy/80 border border-gold/15 overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-500">
                      <svg
                        className="w-5 h-5 text-gold/60 ml-0.5 group-hover:text-gold transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Duration badge */}
                  {sermon.duration && (
                    <div className="absolute bottom-2 right-2 bg-navy-deep/80 border border-gold/20 px-2 py-0.5 text-[10px] tracking-wider uppercase text-gold/70 font-mono">
                      {sermon.duration}
                    </div>
                  )}
                </div>

                {/* Audio Player */}
                {sermon.audioUrl && (
                  <div className="mb-4">
                    <AudioPlayer
                      audioUrl={sermon.audioUrl}
                      title={sermon.title}
                      speaker={sermon.speaker}
                    />
                  </div>
                )}

                {/* Info */}
                <div className="space-y-2">
                  {sermon.series && (
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-mono">
                      {sermon.series}
                    </span>
                  )}
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-warm-white group-hover:text-gold transition-colors duration-300 leading-tight">
                    {sermon.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-ivory/40">
                    <span>{sermon.speaker}</span>
                    <span className="w-1 h-1 rounded-full bg-gold/20" />
                    <span>
                      {new Date(sermon.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
