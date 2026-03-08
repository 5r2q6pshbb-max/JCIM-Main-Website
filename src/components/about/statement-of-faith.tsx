"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { AccordionItem } from "@/components/shared/accordion-item";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { STATEMENT_OF_FAITH } from "@/lib/content/beliefs";

export function StatementOfFaith() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="What We Believe"
            title="Statement of Faith"
            subtitle="The foundational doctrines that anchor our ministry and guide our teaching."
          />
        </RevealOnScroll>

        <div className="mx-auto max-w-3xl space-y-3">
          {STATEMENT_OF_FAITH.map((belief, i) => (
            <RevealOnScroll key={belief.id} variant="fadeUp" delay={i * 0.05}>
              <AccordionItem
                number={belief.article}
                title={belief.title}
                defaultOpen={i === 0}
              >
                <p className="mb-3">{belief.description}</p>
                <div className="flex flex-wrap gap-2">
                  {belief.scriptures.map((ref) => (
                    <span
                      key={ref}
                      className="inline-block text-[11px] tracking-wider text-gold/60 border border-gold/15 px-2 py-0.5 font-mono"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </AccordionItem>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
