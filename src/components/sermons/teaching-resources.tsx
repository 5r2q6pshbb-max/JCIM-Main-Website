"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const RESOURCES = [
  {
    title: "Foundation School Study Guide",
    description:
      "Six-module workbook covering salvation, the Holy Spirit, prayer, the Word, the Church, and stewardship.",
  },
  {
    title: "Cell Leader's Handbook",
    description:
      "Comprehensive guide for hosting, facilitating, and multiplying cell group meetings.",
  },
  {
    title: "Daily Devotional",
    description:
      "365-day devotional companion with Scripture readings, reflections, and prayer prompts.",
  },
  {
    title: "Prayer Guide",
    description:
      "Structured prayer guide for personal intercession, warfare prayer, and corporate prayer meetings.",
  },
  {
    title: "Worship Songbook",
    description:
      "Collection of original worship songs, hymns, and choruses used in JCIM gatherings.",
  },
];

export function TeachingResources() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Resources" title="Grow Deeper" />

        <div className="max-w-3xl mx-auto">
          {RESOURCES.map((resource, i) => (
            <RevealOnScroll key={resource.title} variant="fadeUp" delay={i * 0.08}>
              <div className="flex items-center justify-between gap-6 border-b border-gold/10 py-5 group cursor-pointer">
                <div className="space-y-1 flex-1 min-w-0">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-warm-white group-hover:text-gold transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-ivory/40 leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                {/* Download icon */}
                <button className="flex-shrink-0 w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
