"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const DEPARTMENTS = [
  "Discipleship & Training",
  "Worship & Creative Arts",
  "Evangelism & Missions",
  "Welfare & Community",
  "Media & Communications",
  "Finance & Administration",
  "Protocol & Ushering",
];

export function GovernanceChart() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Governance"
            title="How We Are Led"
            subtitle="JCIM operates under an apostolic governance structure rooted in biblical order and accountability."
          />
        </RevealOnScroll>

        <div className="mx-auto max-w-4xl">
          {/* Top: Presiding Apostle */}
          <RevealOnScroll variant="scaleIn">
            <div className="flex justify-center mb-8">
              <div className="border-2 border-gold/30 bg-navy/50 px-8 py-5 text-center min-w-[260px]">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 font-mono mb-1">
                  Office of the
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold">
                  Presiding Apostle
                </h3>
              </div>
            </div>
          </RevealOnScroll>

          {/* Connecting line */}
          <RevealOnScroll variant="fadeIn" delay={0.1}>
            <div className="flex justify-center mb-8">
              <div className="w-[1px] h-10 bg-gold/20" />
            </div>
          </RevealOnScroll>

          {/* Council of Elders */}
          <RevealOnScroll variant="scaleIn" delay={0.15}>
            <div className="flex justify-center mb-8">
              <div className="border border-gold/15 bg-navy/50 px-8 py-4 text-center min-w-[220px]">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold">
                  Council of Elders
                </h3>
              </div>
            </div>
          </RevealOnScroll>

          {/* Connecting line with branches */}
          <RevealOnScroll variant="fadeIn" delay={0.2}>
            <div className="flex justify-center mb-8">
              <div className="w-[1px] h-10 bg-gold/20" />
            </div>
          </RevealOnScroll>

          {/* Department Heads — First row of 4 */}
          <RevealOnScroll variant="fadeUp" delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {DEPARTMENTS.slice(0, 4).map((dept) => (
                <div
                  key={dept}
                  className="border border-gold/15 bg-navy/50 px-4 py-3 text-center"
                >
                  <p className="text-warm-white text-sm font-medium leading-tight">
                    {dept}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Department Heads — Second row of 3, centered */}
          <RevealOnScroll variant="fadeUp" delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[75%] mx-auto">
              {DEPARTMENTS.slice(4).map((dept) => (
                <div
                  key={dept}
                  className="border border-gold/15 bg-navy/50 px-4 py-3 text-center"
                >
                  <p className="text-warm-white text-sm font-medium leading-tight">
                    {dept}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
