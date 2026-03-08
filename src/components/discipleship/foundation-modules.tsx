"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { GoldDivider } from "@/components/shared/gold-divider";
import { FOUNDATION_MODULES } from "@/lib/content/themelios";
import { cn } from "@/lib/utils";

export function FoundationModules() {
  // Group modules by book number
  const bookGroups: Record<number, typeof FOUNDATION_MODULES> = {};
  FOUNDATION_MODULES.forEach((mod) => {
    if (!bookGroups[mod.bookNumber]) {
      bookGroups[mod.bookNumber] = [];
    }
    bookGroups[mod.bookNumber].push(mod);
  });

  const bookNumbers = Object.keys(bookGroups)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Foundation School"
            title="18 Modules. 6 Books. One Transformation."
            subtitle="The Foundation School is the entry point of discipleship at Jesus CITY, grounding every believer in the essential truths of faith, identity, leadership, and Kingdom mandate."
          />
        </RevealOnScroll>

        <div className="space-y-10">
          {bookNumbers.map((bookNum, groupIdx) => {
            const modules = bookGroups[bookNum];
            const bookTitle = modules[0].bookTitle;

            return (
              <div key={bookNum}>
                {/* Book group divider */}
                {groupIdx > 0 && (
                  <GoldDivider className="mb-8" />
                )}

                {/* Book title */}
                <RevealOnScroll>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-xs font-mono text-gold/50 tracking-widest">
                      Book {bookNum}
                    </span>
                    <div className="h-[1px] flex-1 bg-gold/10" />
                    <span className="text-sm font-[family-name:var(--font-playfair)] text-gold/70 italic">
                      {bookTitle}
                    </span>
                  </div>
                </RevealOnScroll>

                {/* Module cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modules.map((mod, i) => (
                    <RevealOnScroll
                      key={mod.id}
                      delay={(groupIdx * 3 + i) * 0.05}
                    >
                      <div
                        className={cn(
                          "border border-gold/10 p-5 hover:border-gold/25 transition-colors duration-500 h-full",
                          groupIdx % 2 === 0
                            ? "bg-navy-deep/40"
                            : "bg-navy-deep/60"
                        )}
                      >
                        {/* Module number */}
                        <span className="text-xs font-mono text-gold tracking-widest">
                          {String(mod.moduleNumber).padStart(2, "0")}
                        </span>

                        {/* Book title (small) */}
                        <p className="mt-1 text-[10px] tracking-wider uppercase text-gold/40 font-mono">
                          {mod.bookTitle}
                        </p>

                        {/* Module title */}
                        <h3 className="mt-3 text-base text-warm-white font-medium leading-snug">
                          {mod.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm text-ivory/50 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
