"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { GoldDivider } from "@/components/shared/gold-divider";
import { SUB_MINISTRIES } from "@/lib/content/ministries";
import {
  BookOpen,
  Users,
  Heart,
  Globe,
  Mountain,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  Heart,
  Globe,
  Mountain,
  Lightbulb,
};

export function SubMinistriesSection() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.03)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <GoldDivider className="mb-12" />
          <SectionHeader
            tag="Sub-Ministries"
            title="Specialized Arms of Impact"
            subtitle="Beyond our seven departments, JCIM operates through dedicated sub-ministries — each with a focused mandate to extend the Kingdom in specific areas of discipleship, missions, community, and innovation."
          />
        </RevealOnScroll>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-4 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {SUB_MINISTRIES.map((ministry, i) => {
            const Icon = iconMap[ministry.icon] || BookOpen;
            return (
              <RevealOnScroll key={ministry.id} delay={i * 0.08}>
                <div className="min-w-[280px] md:min-w-0 snap-start border border-gold/10 p-5 hover:border-gold/25 transition-colors duration-500 bg-navy-deep/40 group flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center mb-3 group-hover:border-gold/40 transition-colors">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>

                  {/* Name */}
                  <h3 className="font-[family-name:var(--font-playfair)] text-base text-warm-white font-semibold leading-tight">
                    {ministry.name}
                  </h3>

                  {/* Short name */}
                  <span className="mt-1 text-[10px] tracking-[0.2em] uppercase text-gold/40 font-mono">
                    {ministry.shortName}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-xs text-ivory/40 leading-relaxed line-clamp-4 flex-1">
                    {ministry.description}
                  </p>

                  {/* Motto */}
                  {ministry.motto && (
                    <p className="mt-3 pt-3 border-t border-gold/8 text-xs italic text-gold/60 leading-relaxed">
                      &ldquo;{ministry.motto}&rdquo;
                    </p>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
