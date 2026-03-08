"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { StatCounter } from "@/components/shared/stat-counter";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { SectionHeader } from "@/components/shared/section-header";
import { STATS } from "@/lib/content/site-config";

export function AboutPreview() {
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,163,79,0.03)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <RevealOnScroll>
          <SectionHeader
            tag="About Us"
            title="Built on the Word. Driven by Purpose."
            subtitle="Since 2020, JCIM has been raising leaders and building communities across nations through the transformative power of the Gospel."
          />
        </RevealOnScroll>

        {/* Stats Grid */}
        <RevealOnScroll delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </RevealOnScroll>

        {/* Content Split */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll variant="slideLeft">
            <div className="space-y-6">
              <p className="text-ivory/60 leading-relaxed">
                Jesus CITY International Ministries was born from a divine mandate to raise
                a generation of leaders who would transform nations. Under the apostolic leadership
                of Apostle Terry Paul Kwesi Yekple, JCIM has grown from a vision into a movement
                spanning 18+ nations.
              </p>
              <p className="text-ivory/60 leading-relaxed">
                Through our unique Themelios Discipleship System, we take every believer on a journey from
                foundation to leadership — equipping them with the Word, character, and skills to
                impact their world.
              </p>
              <div className="pt-4">
                <ChamferButton href="/about" variant="outline">
                  Our Full Story
                </ChamferButton>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="slideRight">
            <div className="relative">
              {/* Image placeholder with ornate border */}
              <div className="relative aspect-[4/3] bg-navy gold-border-glow overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 border border-gold/20 rotate-45 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-playfair)] text-gold text-2xl -rotate-45">
                        JCIM
                      </span>
                    </div>
                    <p className="text-[10px] tracking-[0.3em] text-gold/30 uppercase">
                      Est. 2020
                    </p>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold/30" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-gold/30" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-gold/30" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold/30" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
