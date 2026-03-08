"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

const VISIT_STEPS = [
  {
    number: "01",
    title: "What to Wear",
    description: "Come as you are. Smart casual is fine.",
  },
  {
    number: "02",
    title: "What to Expect",
    description: "Vibrant worship, powerful teaching, warm community.",
  },
  {
    number: "03",
    title: "Where to Park",
    description: "Parking details coming soon. Ask an usher!",
  },
  {
    number: "04",
    title: "Children Welcome",
    description: "Kids ministry available during service.",
  },
];

export function PlanYourVisit() {
  return (
    <section className="section-padding bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="New Here?" title="Plan Your Visit" />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Dotted connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[1px] border-t border-dashed border-gold/20" />

          {VISIT_STEPS.map((step, i) => (
            <RevealOnScroll key={step.number} variant="fadeUp" delay={i * 0.1}>
              <div className="relative text-center space-y-4">
                {/* Numbered badge */}
                <div className="mx-auto w-12 h-12 border-2 border-gold/40 flex items-center justify-center relative bg-navy-deep z-10">
                  <span className="text-gold font-mono text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ivory/50 leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
