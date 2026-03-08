"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { OrnateFrame } from "@/components/shared/ornate-frame";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { FEATURED_SERMONS } from "@/lib/content/sermons";
import { Play, Clock } from "lucide-react";

export function SermonsPreview() {
  const featured = FEATURED_SERMONS[0];
  const sidebar = FEATURED_SERMONS.slice(1, 4);

  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(199,163,79,0.03)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <RevealOnScroll>
          <SectionHeader
            tag="Sermons & Teachings"
            title="Feed on the Word"
            subtitle="Messages that equip, convict, and transform. Listen to our latest teachings from the pulpit."
          />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured sermon (large) */}
          <RevealOnScroll variant="slideLeft" className="lg:col-span-3">
            {featured && (
              <OrnateFrame className="h-full bg-navy/50">
                <div className="space-y-6">
                  {/* Video placeholder */}
                  <div className="relative aspect-video bg-navy-deep flex items-center justify-center group cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent group-hover:from-gold/10 transition-colors duration-500" />
                    <div className="w-16 h-16 border-2 border-gold/40 rounded-full flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-gold ml-1" />
                    </div>
                    {/* Corner accents */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/20" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/20" />
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/50">
                      {featured.series} — Featured
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl text-warm-white font-semibold">
                      {featured.title}
                    </h3>
                    <p className="mt-2 text-sm text-ivory/40">
                      {featured.speaker}
                    </p>
                    <p className="mt-3 text-sm text-ivory/40 leading-relaxed">
                      {featured.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-ivory/30">
                      <Clock className="w-3 h-3 text-gold/40" />
                      {featured.duration}
                    </div>
                  </div>
                </div>
              </OrnateFrame>
            )}
          </RevealOnScroll>

          {/* Sidebar sermons */}
          <div className="lg:col-span-2 space-y-6">
            {sidebar.map((sermon, i) => (
              <RevealOnScroll key={sermon.id} delay={i * 0.1} variant="slideRight">
                <div className="group flex gap-4 p-4 border border-gold/10 hover:border-gold/25 bg-navy/30 hover:bg-navy/50 transition-all duration-300 cursor-pointer">
                  {/* Play icon */}
                  <div className="flex-shrink-0 w-12 h-12 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                    <Play className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] tracking-wider uppercase text-gold/40">
                      {sermon.series}
                    </span>
                    <h4 className="font-[family-name:var(--font-playfair)] text-sm text-warm-white font-medium mt-1 truncate">
                      {sermon.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[11px] text-ivory/30">
                        {sermon.speaker.split(" ").pop()}
                      </span>
                      <span className="text-[11px] text-ivory/20">
                        {sermon.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}

            <RevealOnScroll delay={0.3}>
              <div className="pt-4">
                <ChamferButton href="/sermons" variant="outline" className="w-full">
                  Browse All Sermons
                </ChamferButton>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
