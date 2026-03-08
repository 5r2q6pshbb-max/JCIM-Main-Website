"use client";

import { SERVICE_TIMES } from "@/lib/content/weekly-schedule";
import { SectionHeader } from "@/components/shared/section-header";
import { OrnateFrame } from "@/components/shared/ornate-frame";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { MapPin } from "lucide-react";

export function ServiceTimes() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Services" title="Join Us This Week" />

        {/* Service time cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_TIMES.map((service, i) => (
            <RevealOnScroll key={service.name} variant="fadeUp" delay={i * 0.1}>
              <OrnateFrame>
                <div className="text-center space-y-3">
                  <p className="text-gold text-sm tracking-widest uppercase font-mono">
                    {service.day}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold">
                    {service.name}
                  </h3>
                  <p className="font-mono text-2xl md:text-3xl text-warm-white font-bold tracking-wider">
                    {service.time}
                  </p>
                  <p className="text-sm text-ivory/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </OrnateFrame>
            </RevealOnScroll>
          ))}
        </div>

        {/* Location box */}
        <RevealOnScroll variant="fadeUp" delay={0.3}>
          <div className="mt-16 border border-gold/15 bg-navy p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Location info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold">
                    Location
                  </h3>
                </div>
                <p className="text-ivory/50 leading-relaxed">
                  Accra, Greater Accra Region, Ghana
                </p>
                <p className="text-xs text-ivory/30 tracking-wider uppercase font-mono">
                  Exact address coming soon
                </p>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[16/9] bg-navy border border-gold/15 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-8 h-8 text-gold/30 mx-auto" />
                  <p className="text-sm text-ivory/30 font-mono tracking-wider">
                    Map Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
