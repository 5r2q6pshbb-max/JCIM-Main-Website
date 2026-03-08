"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { GoldDivider } from "@/components/shared/gold-divider";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { COMMUNITY_FELLOWSHIPS } from "@/lib/content/ministries";
import { Shield, Crown, ArrowRight, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Shield, Crown };

export function CommunityFellowships() {
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(199,163,79,0.04)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <GoldDivider className="mb-12" />
          <SectionHeader
            tag="Community Fellowships"
            title="Brotherhood & Sisterhood"
            subtitle="Our two flagship community fellowships bring men and women together for discipleship, accountability, and purpose-driven living."
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {COMMUNITY_FELLOWSHIPS.map((fellowship, i) => {
            const Icon = iconMap[fellowship.icon] || Shield;
            return (
              <RevealOnScroll
                key={fellowship.id}
                delay={i * 0.15}
              >
                <div className="border border-gold/15 bg-navy/40 hover:border-gold/30 transition-all duration-500 group h-full flex flex-col">
                  {/* Header */}
                  <div className="px-6 pt-6 pb-4 border-b border-gold/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 border border-gold/25 flex items-center justify-center shrink-0 group-hover:border-gold/50 transition-colors">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold">
                          {fellowship.name}
                        </h3>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-gold/50 font-mono">
                          {fellowship.shortName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Motto */}
                  <div className="px-6 py-3 bg-gold/5 border-b border-gold/10">
                    <p className="text-sm italic text-gold/70 font-[family-name:var(--font-lora)]">
                      &ldquo;{fellowship.motto}&rdquo;
                    </p>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-5 flex-1">
                    <p className="text-sm text-ivory/50 leading-relaxed line-clamp-4">
                      {fellowship.description}
                    </p>
                  </div>

                  {/* Scripture */}
                  <div className="px-6 pb-3">
                    <p className="text-xs text-gold/40 italic font-[family-name:var(--font-lora)]">
                      &ldquo;{fellowship.scripture.split(".")[0]}.&rdquo;
                    </p>
                    <p className="text-[10px] text-gold/30 font-mono tracking-wider mt-1">
                      — {fellowship.scriptureRef}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6 mt-auto">
                    <Link
                      href={`/${fellowship.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors group/link"
                    >
                      <span className="font-mono text-xs tracking-wider uppercase">
                        Learn More
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
