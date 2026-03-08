"use client";

import { BOOKS } from "@/lib/content/books";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

export function BookPublications() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Publications" title="Books & Resources" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((book, i) => (
            <RevealOnScroll key={book.id} variant="fadeUp" delay={i * 0.12}>
              <div className="group cursor-pointer hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
                <div className="relative aspect-[2/3] bg-gradient-to-br from-navy via-navy-deep to-navy border border-gold/15 p-6 flex flex-col justify-end overflow-hidden">
                  {/* Decorative cross-hatch pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(199,163,79,0.03)_25%,transparent_25%,transparent_75%,rgba(199,163,79,0.03)_75%)] bg-[size:40px_40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Year tag */}
                  <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-gold/40 font-mono">
                    {book.year}
                  </div>

                  {/* Top decorative line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 space-y-3">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-warm-white leading-tight group-hover:text-gold transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gold/60">{book.author}</p>
                    <p className="text-sm text-ivory/40 leading-relaxed line-clamp-3">
                      {book.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/40 transition-colors duration-500" />

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/20 group-hover:border-gold/40 transition-colors duration-500" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/20 group-hover:border-gold/40 transition-colors duration-500" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
