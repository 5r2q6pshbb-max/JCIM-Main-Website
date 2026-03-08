"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { OrnateFrame } from "@/components/shared/ornate-frame";
import { GoldDivider } from "@/components/shared/gold-divider";
import { CELL_SYSTEM } from "@/lib/content/themelios";

export function CellSystem() {
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.03)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <GoldDivider className="mb-12" />
          <SectionHeader
            tag="Cell Ministry"
            title="The Church in Every Home"
            subtitle="The cell group system is the heartbeat of community life at Jesus CITY. It is where discipleship becomes personal, accountability becomes natural, and the church becomes a family."
          />
        </RevealOnScroll>

        {/* A: Philosophy Quote */}
        <RevealOnScroll variant="fadeIn" delay={0.1}>
          <div className="max-w-3xl mx-auto mb-16">
            <OrnateFrame>
              <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-gold/80 italic text-center leading-relaxed">
                &ldquo;{CELL_SYSTEM.philosophy}&rdquo;
              </p>
            </OrnateFrame>
          </div>
        </RevealOnScroll>

        {/* B: The 5 W's */}
        <div className="mb-16">
          <RevealOnScroll>
            <h3 className="text-center font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-warm-white font-semibold mb-2">
              The 5 W&rsquo;s
            </h3>
            <p className="text-center text-sm text-ivory/40 mb-10">
              Every cell meeting follows this simple, powerful structure.
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CELL_SYSTEM.fiveWs.map((w, i) => (
              <RevealOnScroll key={w.name} delay={i * 0.08}>
                <div className="border border-gold/10 p-5 hover:border-gold/25 transition-colors duration-500 bg-navy/30 h-full flex flex-col">
                  {/* Large letter */}
                  <span className="font-[family-name:var(--font-playfair)] text-4xl text-gold font-bold leading-none">
                    {w.letter}
                  </span>

                  {/* Name */}
                  <h4 className="mt-2 text-base text-warm-white font-semibold">
                    {w.name}
                  </h4>

                  {/* Duration */}
                  <span className="mt-1 text-[10px] font-mono text-gold/40 tracking-wider">
                    {w.duration}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-xs text-ivory/40 leading-relaxed flex-1">
                    {w.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* C: Cell Types */}
        <div>
          <RevealOnScroll>
            <h3 className="text-center font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-warm-white font-semibold mb-2">
              Cell Types
            </h3>
            <p className="text-center text-sm text-ivory/40 mb-10">
              Multiple expressions for every context and community.
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CELL_SYSTEM.cellTypes.map((cell, i) => (
              <RevealOnScroll key={cell.name} delay={i * 0.08}>
                <div className="border border-gold/10 p-5 hover:border-gold/25 transition-colors duration-500 bg-navy/30 h-full">
                  {/* Name */}
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold">
                    {cell.name}
                  </h4>

                  {/* Location */}
                  <p className="mt-1 text-xs text-gold/50 font-mono tracking-wider">
                    {cell.location}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm text-ivory/50 leading-relaxed">
                    {cell.description}
                  </p>

                  {/* Best for */}
                  <div className="mt-4 pt-3 border-t border-gold/8">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/40 font-mono">
                      Best For
                    </span>
                    <p className="mt-1 text-xs text-ivory/40 leading-relaxed">
                      {cell.bestFor}
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
