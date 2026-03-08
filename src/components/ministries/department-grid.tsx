"use client";

import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { DEPARTMENTS } from "@/lib/content/ministries";
import { cn } from "@/lib/utils";

export function DepartmentGrid() {
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Departments"
            title="Structured for Kingdom Impact"
            subtitle="Each department operates under the leadership of a dedicated head, with specialised sub-units that ensure no aspect of ministry is left unattended."
          />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept, i) => (
            <RevealOnScroll
              key={dept.id}
              delay={i * 0.08}
              className={cn(
                // Center the last card when there are 7 items (7 % 3 = 1 remainder)
                i === DEPARTMENTS.length - 1 && "sm:col-span-2 lg:col-span-1 lg:col-start-2"
              )}
            >
              <div className="h-full border border-gold/10 p-6 hover:border-gold/25 transition-colors duration-500 bg-navy/30 group">
                {/* Department number */}
                <span className="text-xs font-mono text-gold tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold leading-tight">
                  {dept.name}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-sm italic text-gold/70">
                  {dept.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-ivory/50 leading-relaxed line-clamp-4">
                  {dept.description}
                </p>

                {/* Sub-units list */}
                <div className="mt-5 pt-4 border-t border-gold/8">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/40 font-mono">
                    Sub-Units
                  </span>
                  <ul className="mt-2 space-y-1.5">
                    {dept.subUnits.map((unit) => (
                      <li
                        key={unit.name}
                        className="flex items-start gap-2 text-xs text-ivory/40"
                      >
                        <span className="mt-1.5 block w-1 h-1 rounded-full bg-gold/30 shrink-0" />
                        {unit.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
