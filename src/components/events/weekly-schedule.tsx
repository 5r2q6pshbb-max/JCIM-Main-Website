"use client";

import { cn } from "@/lib/utils";
import {
  WEEKLY_SCHEDULE,
  SERVICE_TIMES,
} from "@/lib/content/weekly-schedule";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

export function WeeklySchedule() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Weekly Rhythm" title="Our Weekly Schedule" />

        {/* Desktop: 7-column grid */}
        <RevealOnScroll variant="fadeUp">
          <div className="hidden lg:grid lg:grid-cols-7 gap-3">
            {WEEKLY_SCHEDULE.map((day, i) => (
              <div
                key={day.day}
                className={cn(
                  "border border-gold/10 bg-navy/30 p-4 hover:border-gold/25 transition-colors duration-500",
                  day.day === "Sunday" && "border-gold/20 bg-navy/50"
                )}
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-sm font-bold text-gold mb-1">
                  {day.day}
                </h3>
                <p className="text-[10px] tracking-widest uppercase text-ivory/30 font-mono mb-4">
                  {day.theme}
                </p>

                <div className="space-y-3">
                  {day.activities.map((act) => (
                    <div key={act.activity} className="space-y-0.5">
                      <span className="block text-[10px] tracking-wider text-gold/50 font-mono">
                        {act.time}
                      </span>
                      <span className="block text-xs text-warm-white leading-snug">
                        {act.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Mobile: Stacked cards */}
        <div className="lg:hidden space-y-3">
          {WEEKLY_SCHEDULE.map((day, i) => (
            <RevealOnScroll key={day.day} variant="fadeUp" delay={i * 0.05}>
              <div
                className={cn(
                  "border border-gold/10 bg-navy/30 p-4 hover:border-gold/25 transition-colors duration-500",
                  day.day === "Sunday" && "border-gold/20 bg-navy/50"
                )}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-gold">
                    {day.day}
                  </h3>
                  <span className="text-[10px] tracking-widest uppercase text-ivory/30 font-mono">
                    {day.theme}
                  </span>
                </div>

                <div className="space-y-2">
                  {day.activities.map((act) => (
                    <div
                      key={act.activity}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[11px] tracking-wider text-gold/50 font-mono min-w-[60px] pt-0.5">
                        {act.time}
                      </span>
                      <div>
                        <span className="text-sm text-warm-white">
                          {act.activity}
                        </span>
                        <p className="text-xs text-ivory/30 mt-0.5 leading-relaxed">
                          {act.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Service times row */}
        <div className="mt-12 md:mt-16">
          <RevealOnScroll variant="fadeUp" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_TIMES.map((service, i) => (
                <div
                  key={service.name}
                  className="border border-gold/15 bg-navy/40 p-5 text-center group hover:border-gold/30 hover:bg-navy/60 transition-all duration-500"
                >
                  <span className="block text-[10px] tracking-[0.3em] uppercase text-gold/50 font-mono mb-2">
                    {service.day}
                  </span>
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-warm-white mb-1 group-hover:text-gold transition-colors duration-300">
                    {service.name}
                  </h4>
                  <span className="block text-xl font-mono text-gold font-bold mb-2">
                    {service.time}
                  </span>
                  <p className="text-xs text-ivory/35 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
