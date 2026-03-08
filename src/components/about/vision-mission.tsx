"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { OrnateFrame } from "@/components/shared/ornate-frame";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { VISION_STATEMENT, MISSION_STATEMENT } from "@/lib/content/beliefs";

export function VisionMission() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Our Mandate"
            title="Vision & Mission"
            subtitle="The divine mandate that drives everything we do at JCIM."
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <RevealOnScroll variant="slideLeft" delay={0.1}>
            <OrnateFrame>
              <div className="space-y-4">
                <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold font-mono">
                  Our Vision
                </span>
                <p className="text-ivory/50 leading-relaxed">
                  {VISION_STATEMENT}
                </p>
              </div>
            </OrnateFrame>
          </RevealOnScroll>

          {/* Mission */}
          <RevealOnScroll variant="slideRight" delay={0.2}>
            <OrnateFrame>
              <div className="space-y-4">
                <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold font-mono">
                  Our Mission
                </span>
                <p className="text-ivory/50 leading-relaxed">
                  {MISSION_STATEMENT}
                </p>
              </div>
            </OrnateFrame>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
