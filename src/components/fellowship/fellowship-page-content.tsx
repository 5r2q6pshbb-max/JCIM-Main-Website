"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { GoldDivider } from "@/components/shared/gold-divider";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { OrnateFrame } from "@/components/shared/ornate-frame";
import type { CommunityFellowship } from "@/types/content";
import { cn } from "@/lib/utils";

interface FellowshipPageContentProps {
  fellowship: CommunityFellowship;
}

export function FellowshipPageContent({ fellowship }: FellowshipPageContentProps) {
  return (
    <>
      {/* Mission & Vision */}
      <section className="section-padding bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,163,79,0.03)_0%,transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <RevealOnScroll variant="slideLeft">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-gold/50 uppercase font-mono mb-3 block">
                  Our Mission
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-warm-white font-semibold mb-6">
                  Why We Exist
                </h2>
                <p className="text-ivory/50 leading-relaxed">{fellowship.mission}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="slideRight">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-gold/50 uppercase font-mono mb-3 block">
                  Our Vision
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-warm-white font-semibold mb-6">
                  Where We&rsquo;re Headed
                </h2>
                <p className="text-ivory/50 leading-relaxed">{fellowship.vision}</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.03)_0%,transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <GoldDivider className="mb-12" />
            <SectionHeader
              tag="Core Values"
              title="What We Stand On"
              subtitle={`The pillars that define every member of ${fellowship.name}.`}
            />
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fellowship.coreValues.map((value, i) => (
              <RevealOnScroll key={value.name} delay={i * 0.1}>
                <div className="border border-gold/10 bg-navy-deep/40 p-6 hover:border-gold/25 transition-colors duration-500 h-full flex flex-col">
                  {/* Number */}
                  <span className="text-3xl font-[family-name:var(--font-playfair)] text-gold/20 font-bold mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold mb-2">
                    {value.name}
                  </h3>
                  <p className="text-xs text-ivory/40 leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Activities */}
      <section className="section-padding bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(199,163,79,0.04)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <GoldDivider className="mb-12" />
            <SectionHeader
              tag="Programs"
              title="What We Do"
              subtitle={`${fellowship.name} is not just a fellowship — it's a formation ground.`}
            />
          </RevealOnScroll>

          <div className="space-y-0">
            {fellowship.programs.map((program, i) => (
              <RevealOnScroll key={program.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "border border-gold/10 px-6 py-5 hover:border-gold/25 transition-colors duration-500 bg-navy/30 flex flex-col sm:flex-row sm:items-start gap-4",
                    i > 0 && "-mt-[1px]"
                  )}
                >
                  {/* Number */}
                  <span className="text-gold/30 font-mono text-sm shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold">
                      {program.name}
                    </h3>
                    <p className="mt-2 text-sm text-ivory/40 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {program.schedule && (
                    <span className="text-[10px] tracking-[0.15em] text-gold/50 uppercase font-mono shrink-0 sm:text-right">
                      {program.schedule}
                    </span>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture & CTA */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.05)_0%,transparent_50%)]" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <OrnateFrame className="py-12 px-8">
              <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-gold/80 italic leading-relaxed mb-4">
                &ldquo;{fellowship.scripture}&rdquo;
              </p>
              <p className="text-xs text-gold/40 tracking-[0.2em] uppercase font-mono">
                — {fellowship.scriptureRef}
              </p>
            </OrnateFrame>

            <div className="mt-12 space-y-4">
              <p className="text-ivory/50 text-sm">
                Ready to be part of {fellowship.name}? Connect with us today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <ChamferButton href="/connect" variant="gold" size="md">
                  Join {fellowship.shortName}
                </ChamferButton>
                <ChamferButton href="/ministries" variant="outline" size="md">
                  All Ministries
                </ChamferButton>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
