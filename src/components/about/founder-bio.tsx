"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { GoldDivider } from "@/components/shared/gold-divider";
import { FOUNDER } from "@/lib/content/leadership";

export function FounderBio() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Our Founder"
            title="The Visionary Behind JCIM"
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <RevealOnScroll variant="slideLeft">
            <div className="relative aspect-[3/4] bg-navy border border-gold/15 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 border border-gold/20 rotate-45 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-playfair)] text-gold text-lg -rotate-45">
                      AP
                    </span>
                  </div>
                  <p className="text-[10px] tracking-[0.3em] text-gold/30 uppercase">
                    Founder Photo
                  </p>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold/30" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-gold/30" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-gold/30" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold/30" />
            </div>
          </RevealOnScroll>

          {/* Right: Bio Content */}
          <RevealOnScroll variant="slideRight">
            <div className="space-y-6">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-warm-white">
                  {FOUNDER.name}
                </h2>
                <p className="mt-2 text-gold text-sm tracking-widest uppercase">
                  {FOUNDER.title}
                </p>
              </div>

              <GoldDivider className="!justify-start" />

              <p className="text-ivory/50 leading-relaxed">
                {FOUNDER.bio}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
