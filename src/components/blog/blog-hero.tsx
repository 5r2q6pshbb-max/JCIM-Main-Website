"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content/blog-posts";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

export function BlogHero() {
  const featured = BLOG_POSTS[0];
  if (!featured) return null;

  const formattedDate = new Date(featured.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-8 text-center">
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-4 font-mono">
              &#x2756; Featured &#x2756;
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="relative overflow-hidden border border-gold/10 hover:border-gold/25 transition-all duration-500">
              {/* Image placeholder */}
              <div className="aspect-[2/1] bg-navy/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.08)_0%,transparent_70%)]" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8 md:p-12">
                  {/* Category badge */}
                  <span className="inline-block bg-gold/90 text-dark-base text-[10px] tracking-[0.15em] uppercase font-mono font-bold px-3 py-1 mb-4">
                    {featured.category}
                  </span>

                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-warm-white font-bold leading-tight group-hover:text-gold transition-colors duration-300">
                    {featured.title}
                  </h2>

                  <p className="mt-3 text-sm md:text-base text-ivory/50 max-w-2xl leading-relaxed line-clamp-2">
                    {featured.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-4 text-xs text-ivory/40 font-mono tracking-wider">
                    <span>{featured.author}</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span>{formattedDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
