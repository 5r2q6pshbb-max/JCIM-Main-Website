"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { MapPin, Clock, Calendar } from "lucide-react";

export function BereanPreview() {
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Gothic arch card */}
            <div className="gothic-arch relative bg-navy overflow-hidden min-h-[500px] flex items-end gold-border-glow">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-navy-deep/80" />

              {/* Content at bottom */}
              <div className="relative p-8 md:p-12 w-full">
                <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-4 font-mono">
                  &#x2720; Est. March 2026
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-warm-white font-bold leading-tight">
                  The Berean Church
                </h3>
                <p className="mt-4 text-ivory/40 leading-relaxed max-w-md">
                  A community of believers committed to searching the Scriptures daily,
                  rooted in noble character, and dedicated to the pursuit of truth.
                </p>
              </div>

              {/* Decorative cross */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2">
                <div className="w-[1px] h-16 bg-gradient-to-b from-gold/30 to-transparent" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              </div>
            </div>

            {/* Info side */}
            <div className="space-y-8">
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4 block font-mono">
                  &#x2756; JCIM&apos;s First Physical Campus &#x2756;
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-warm-white font-bold">
                  Where Noble Hearts Gather
                </h2>
              </div>

              <p className="text-ivory/50 leading-relaxed">
                Named after the Bereans of Acts 17:11 — who received the Word with great
                eagerness and examined the Scriptures daily — The Berean Church is JCIM&apos;s
                flagship campus, launched at KNUST, Kumasi.
              </p>

              {/* Service details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white font-medium">
                      Sunday Services
                    </p>
                    <p className="text-xs text-ivory/40">Every Sunday</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white font-medium">
                      8:00 AM — First Service
                    </p>
                    <p className="text-xs text-ivory/40">
                      10:30 AM — Second Service
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white font-medium">
                      KNUST Campus, Kumasi
                    </p>
                    <p className="text-xs text-ivory/40">Ghana, West Africa</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <ChamferButton href="/berean">
                  Plan Your Visit
                </ChamferButton>
                <ChamferButton href="/connect" variant="outline">
                  Get Directions
                </ChamferButton>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
