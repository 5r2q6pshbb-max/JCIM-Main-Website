"use client";

import { FEATURED_SERMONS } from "@/lib/content/sermons";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

export function SermonsHeroFeatured() {
  const featured = FEATURED_SERMONS[0];

  return (
    <section className="relative bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Video placeholder */}
          <RevealOnScroll variant="slideLeft">
            <div className="relative aspect-video bg-navy border border-gold/15 rounded-sm overflow-hidden flex items-center justify-center group cursor-pointer">
              {/* Play icon */}
              <div className="relative z-10 w-20 h-20 rounded-full border-2 border-gold/40 flex items-center justify-center group-hover:border-gold/80 group-hover:bg-gold/10 transition-all duration-500">
                <svg
                  className="w-8 h-8 text-gold ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(199,163,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(199,163,79,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>
          </RevealOnScroll>

          {/* Sermon details */}
          <RevealOnScroll variant="slideRight" delay={0.15}>
            <div className="space-y-5">
              {/* Series badge */}
              {featured.series && (
                <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold font-mono">
                  &#x2756; {featured.series} &#x2756;
                </span>
              )}

              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-tight">
                {featured.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ivory/50">
                <span className="text-gold/80">{featured.speaker}</span>
                <span className="w-1 h-1 rounded-full bg-gold/30" />
                <span>
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {featured.duration && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span>{featured.duration}</span>
                  </>
                )}
              </div>

              <p className="text-ivory/50 leading-relaxed">
                {featured.description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="px-6 py-3 bg-gold text-dark-base text-sm tracking-wider uppercase font-mono hover:bg-gold/90 transition-colors duration-300">
                  Watch Sermon
                </button>
                <button className="px-6 py-3 border border-gold/30 text-gold text-sm tracking-wider uppercase font-mono hover:bg-gold/10 transition-colors duration-300">
                  Listen Audio
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-deep to-transparent pointer-events-none" />
    </section>
  );
}
