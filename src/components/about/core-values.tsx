"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { CORE_VALUES } from "@/lib/content/beliefs";

export function CoreValues() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Our Values"
            title="What We Stand On"
            subtitle="These core values shape our culture, guide our decisions, and define the character of every JCIM member."
          />
        </RevealOnScroll>

        {/* First row: 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.slice(0, 3).map((value, i) => (
            <RevealOnScroll key={value.id} variant="fadeUp" delay={i * 0.1}>
              <ValueCard icon={value.icon} name={value.name} description={value.description} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Second row: 2 cards, centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {CORE_VALUES.slice(3).map((value, i) => (
            <RevealOnScroll key={value.id} variant="fadeUp" delay={(i + 3) * 0.1}>
              <ValueCard icon={value.icon} name={value.name} description={value.description} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  icon,
  name,
  description,
}: {
  icon: string;
  name: string;
  description: string;
}) {
  return (
    <div className="border border-gold/10 p-6 hover:border-gold/25 transition-colors duration-300 h-full">
      {/* Icon placeholder */}
      <div className="w-10 h-10 border border-gold/20 flex items-center justify-center mb-4">
        <span className="text-gold text-xs font-mono">{icon}</span>
      </div>

      <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold mb-2">
        {name}
      </h3>
      <p className="text-ivory/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
