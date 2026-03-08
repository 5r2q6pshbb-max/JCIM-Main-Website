"use client";

import { useState } from "react";
import { TESTIMONIES, TESTIMONY_CATEGORIES } from "@/lib/content/testimonies";
import type { TestimonyItem } from "@/lib/content/testimonies";
import { TabFilter } from "@/components/shared/tab-filter";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { cn } from "@/lib/utils";

const CATEGORY_BADGE_COLORS: Record<TestimonyItem["category"], string> = {
  salvation: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  healing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  deliverance: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  provision: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  transformation: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  family: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export function TestimonyGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? TESTIMONIES
      : TESTIMONIES.filter(
          (t) => t.category === activeCategory.toLowerCase()
        );

  return (
    <section className="section-padding bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="All Testimonies"
          title="Stories of Grace"
          subtitle="Browse through testimonies of salvation, healing, deliverance, provision, transformation, and family restoration."
        />

        <TabFilter
          categories={TESTIMONY_CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((testimony, i) => (
            <RevealOnScroll key={testimony.id} variant="fadeUp" delay={i * 0.08}>
              <div className="group relative rounded-sm border border-gold/10 bg-navy p-6 hover:border-gold/25 transition-all duration-300 h-full flex flex-col">
                {/* Category badge */}
                <span
                  className={cn(
                    "inline-block self-start px-3 py-1 text-[10px] uppercase tracking-widest font-mono border rounded-sm mb-4",
                    CATEGORY_BADGE_COLORS[testimony.category]
                  )}
                >
                  {testimony.category}
                </span>

                {/* Quote */}
                <p className="font-[family-name:var(--font-lora)] text-sm md:text-base text-ivory/70 leading-relaxed flex-1">
                  &ldquo;{testimony.excerpt}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-gold/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <span className="font-[family-name:var(--font-playfair)] text-gold text-sm font-bold">
                      {testimony.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-warm-white font-semibold text-base">
                      {testimony.name}
                    </p>
                    <p className="text-[10px] text-ivory/40 tracking-wider uppercase font-mono">
                      {testimony.location}
                    </p>
                  </div>
                </div>

                {/* Gold accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-ivory/40 font-mono text-sm">
              No testimonies found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
