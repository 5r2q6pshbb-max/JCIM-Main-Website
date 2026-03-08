"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { THEMELIOS_STAGES } from "@/lib/content/themelios";
import { cn } from "@/lib/utils";

const tierColors: Record<string, { badge: string; border: string }> = {
  foundation: {
    badge: "bg-gold/10 text-gold border-gold/20",
    border: "border-gold/15",
  },
  intermediate: {
    badge: "bg-gold/15 text-gold border-gold/30",
    border: "border-gold/20",
  },
  advanced: {
    badge: "bg-gold/20 text-gold border-gold/40",
    border: "border-gold/25",
  },
};

export function ThemeliosPathway() {
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,163,79,0.04)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Growth Pathway"
            title="Six Stages of Maturity"
            subtitle="The Themelios system takes every believer through six progressive stages, each building on the last, from foundational faith to global influence."
          />
        </RevealOnScroll>

        {/* Desktop: horizontal pathway */}
        <div className="hidden lg:block">
          <div className="flex items-stretch gap-0">
            {THEMELIOS_STAGES.map((stage, i) => {
              const tier = tierColors[stage.tier];
              return (
                <RevealOnScroll
                  key={stage.id}
                  delay={i * 0.1}
                  className="flex items-stretch flex-1"
                >
                  {/* Card */}
                  <div
                    className={cn(
                      "flex-1 border p-5 hover:border-gold/30 transition-colors duration-500 bg-navy/30 group",
                      tier.border
                    )}
                  >
                    {/* Level number */}
                    <span className="text-xs font-mono text-gold/50 tracking-widest">
                      Level {stage.level}
                    </span>

                    {/* Greek name */}
                    <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-lg text-gold font-semibold">
                      {stage.greekName}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-1 text-xs text-ivory/40 italic">
                      {stage.subtitle}
                    </p>

                    {/* Tier badge */}
                    <span
                      className={cn(
                        "inline-block mt-3 px-2 py-0.5 text-[10px] tracking-wider uppercase border rounded-sm font-mono",
                        tier.badge
                      )}
                    >
                      {stage.tier}
                    </span>

                    {/* Duration */}
                    <p className="mt-3 text-xs text-ivory/30 font-mono">
                      {stage.duration}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {i < THEMELIOS_STAGES.length - 1 && (
                    <div className="flex items-center px-1 shrink-0">
                      <div className="w-6 h-[1px] bg-gold/15" />
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-gold/20" />
                    </div>
                  )}
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet: vertical stacked pathway */}
        <div className="lg:hidden space-y-0">
          {THEMELIOS_STAGES.map((stage, i) => {
            const tier = tierColors[stage.tier];
            return (
              <RevealOnScroll key={stage.id} delay={i * 0.08}>
                <div
                  className={cn(
                    "border p-5 hover:border-gold/30 transition-colors duration-500 bg-navy/30 group",
                    tier.border,
                    i > 0 && "-mt-[1px]"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Level number */}
                      <span className="text-xs font-mono text-gold/50 tracking-widest">
                        Level {stage.level}
                      </span>

                      {/* Greek name */}
                      <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-xl text-gold font-semibold">
                        {stage.greekName}
                      </h3>

                      {/* Subtitle */}
                      <p className="mt-1 text-sm text-ivory/40 italic">
                        {stage.subtitle}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      {/* Tier badge */}
                      <span
                        className={cn(
                          "inline-block px-2 py-0.5 text-[10px] tracking-wider uppercase border rounded-sm font-mono",
                          tier.badge
                        )}
                      >
                        {stage.tier}
                      </span>

                      {/* Duration */}
                      <p className="mt-2 text-xs text-ivory/30 font-mono">
                        {stage.duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vertical connector */}
                {i < THEMELIOS_STAGES.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-[1px] h-4 bg-gold/15" />
                  </div>
                )}
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
