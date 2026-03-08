"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const SUNDAY_FLOW = [
  {
    time: "6:00 AM",
    activity: "Leadership Prayer",
    description: "Pre-service prayer with all leaders and workers, setting the spiritual tone for the day.",
  },
  {
    time: "8:00 AM",
    activity: "Worship & Praise",
    description: "Corporate worship led by the music team — a time to encounter God through song and adoration.",
  },
  {
    time: "8:45 AM",
    activity: "The Word",
    description: "Expository teaching from the Scriptures, grounded in truth and applied to life.",
  },
  {
    time: "9:45 AM",
    activity: "Ministry & Altar Call",
    description: "A sacred time of prayer, prophetic ministry, and personal response to the Word.",
  },
  {
    time: "10:00 AM",
    activity: "Fellowship & Refreshments",
    description: "Connect with the church family over light refreshments and genuine conversation.",
  },
];

export function WhatToExpect() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Sunday Experience" title="What Happens on Sunday" />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/30 via-gold/15 to-transparent" />

          <div className="space-y-8 md:space-y-10">
            {SUNDAY_FLOW.map((item, i) => (
              <RevealOnScroll key={item.time} variant="fadeUp" delay={i * 0.08}>
                <div className="flex gap-6 md:gap-8 items-start">
                  {/* Time column */}
                  <div className="flex-shrink-0 w-[50px] md:w-[65px] text-right">
                    <span className="font-mono text-xs md:text-sm text-gold tracking-wider">
                      {item.time}
                    </span>
                  </div>

                  {/* Gold dot connector */}
                  <div className="relative flex-shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full border-2 border-gold bg-navy-deep relative z-10" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-gold/20 animate-ping" style={{ animationDuration: "3s" }} />
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-warm-white font-semibold">
                      {item.activity}
                    </h3>
                    <p className="mt-1.5 text-sm text-ivory/50 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
