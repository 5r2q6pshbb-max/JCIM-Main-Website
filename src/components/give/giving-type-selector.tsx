"use client";

import { useState } from "react";
import { GIVING_TYPES } from "@/lib/content/giving";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { cn } from "@/lib/utils";

export function GivingTypeSelector() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Ways to Give" title="Choose Your Seed" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GIVING_TYPES.map((type, i) => (
            <RevealOnScroll key={type.id} variant="fadeUp" delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setActiveId(activeId === type.id ? null : type.id)}
                className={cn(
                  "w-full text-left p-6 border transition-all duration-300 group",
                  activeId === type.id
                    ? "border-gold bg-gold/5 shadow-[0_0_20px_rgba(199,163,79,0.1)]"
                    : "border-gold/10 hover:border-gold/30 bg-transparent"
                )}
              >
                {/* Icon placeholder */}
                <div className="mb-4">
                  <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold/50 font-mono">
                    {type.icon}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold mb-2">
                  {type.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-ivory/50 leading-relaxed mb-4">
                  {type.description}
                </p>

                {/* Scripture */}
                <div className="pt-4 border-t border-gold/10">
                  <p className="font-[family-name:var(--font-lora)] text-xs text-gold/50 italic leading-relaxed">
                    &ldquo;{type.scripture}&rdquo;
                  </p>
                  <p className="mt-1.5 text-[10px] tracking-widest uppercase text-gold/30 font-mono">
                    &mdash; {type.scriptureRef}
                  </p>
                </div>

                {/* Active indicator */}
                {activeId === type.id && (
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-xs text-gold font-mono tracking-wider">
                      Selected
                    </span>
                  </div>
                )}
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
