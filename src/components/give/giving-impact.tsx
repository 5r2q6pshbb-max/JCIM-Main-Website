"use client";

import { GIVING_IMPACT_STATS, GIVING_TYPES } from "@/lib/content/giving";
import { SectionHeader } from "@/components/shared/section-header";
import { StatCounter } from "@/components/shared/stat-counter";
import { OrnateFrame } from "@/components/shared/ornate-frame";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const FUND_ALLOCATION = [
  { label: "Ministry Operations", percentage: 40 },
  { label: "Missions & Outreach", percentage: 20 },
  { label: "Capital Development", percentage: 15 },
  { label: "Staff & Benefits", percentage: 15 },
  { label: "Reserve Fund", percentage: 10 },
];

export function GivingImpact() {
  const firstGivingType = GIVING_TYPES[0];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Your Impact" title="Where Your Giving Goes" />

        {/* Stat counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {GIVING_IMPACT_STATS.map((stat, i) => (
            <RevealOnScroll key={stat.label} variant="fadeUp" delay={i * 0.1}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Scripture in OrnateFrame */}
        {firstGivingType && (
          <RevealOnScroll variant="fadeIn" delay={0.2}>
            <div className="mt-16 max-w-2xl mx-auto">
              <OrnateFrame>
                <div className="text-center py-4">
                  <p className="font-[family-name:var(--font-lora)] text-base md:text-lg text-gold/60 italic leading-relaxed">
                    &ldquo;{firstGivingType.scripture}&rdquo;
                  </p>
                  <p className="mt-3 text-xs tracking-widest uppercase text-gold/40 font-mono">
                    &mdash; {firstGivingType.scriptureRef}
                  </p>
                </div>
              </OrnateFrame>
            </div>
          </RevealOnScroll>
        )}

        {/* Fund allocation breakdown */}
        <RevealOnScroll variant="fadeUp" delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold text-center mb-8">
              Fund Allocation
            </h3>
            <div className="space-y-4">
              {FUND_ALLOCATION.map((fund, i) => (
                <RevealOnScroll key={fund.label} variant="slideRight" delay={i * 0.08}>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ivory/50">{fund.label}</span>
                      <span className="text-gold font-mono text-xs">
                        {fund.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-8 bg-navy-deep border border-gold/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold/80 to-gold/60 flex items-center px-3 transition-all duration-1000"
                        style={{ width: `${fund.percentage}%` }}
                      >
                        <span className="text-[10px] font-mono text-dark-base font-bold tracking-wider whitespace-nowrap">
                          {fund.label} &mdash; {fund.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
