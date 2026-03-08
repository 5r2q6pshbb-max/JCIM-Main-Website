"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { OrnateFrame } from "@/components/shared/ornate-frame";
import { PILLARS } from "@/lib/content/pillars";
import {
  BookOpen,
  Users,
  Crown,
  Heart,
  Globe,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  Crown,
  Heart,
  Globe,
  Zap,
};

export function PillarsGrid() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(199,163,79,0.04)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        <RevealOnScroll>
          <SectionHeader
            tag="Our Pillars"
            title="Six Pillars of the Kingdom"
            subtitle="The foundational pillars that guide every initiative, program, and expression of Jesus CITY International Ministries."
          />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon] || BookOpen;
            return (
              <RevealOnScroll key={pillar.id} delay={i * 0.1}>
                <OrnateFrame className="h-full bg-navy-deep/50 hover:bg-navy-deep/80 transition-colors duration-500">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 border border-gold/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-ivory/40 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Scripture */}
                    <div className="pt-3 border-t border-gold/5">
                      <p className="font-[family-name:var(--font-lora)] italic text-xs text-ivory/25">
                        &ldquo;{pillar.scripture}&rdquo;
                      </p>
                      <p className="mt-1 text-[10px] text-gold/30">
                        {pillar.scriptureRef}
                      </p>
                    </div>
                  </div>
                </OrnateFrame>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
