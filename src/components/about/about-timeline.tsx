"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { Timeline } from "@/components/shared/timeline";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { TIMELINE } from "@/lib/content/leadership";

export function AboutTimeline() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Our Journey"
            title="From Vision to Establishment"
            subtitle="Trace the hand of God from 2020, when a divine vision was born on the campus of KNUST, to 2026 and the establishment of The Berean Church as JCIM's flagship expression."
          />
        </RevealOnScroll>

        <div className="mx-auto max-w-5xl">
          <Timeline milestones={TIMELINE} />
        </div>
      </div>
    </section>
  );
}
