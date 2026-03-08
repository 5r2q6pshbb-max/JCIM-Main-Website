"use client";

import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./reveal-on-scroll";

interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  scripture?: string;
  scriptureRef?: string;
  className?: string;
  overlay?: "dark" | "gradient";
  backgroundImage?: string;
}

export function PageHero({
  tag,
  title,
  subtitle,
  scripture,
  scriptureRef,
  className,
  overlay = "gradient",
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center min-h-[50vh] md:min-h-[55vh] overflow-hidden",
        className
      )}
    >
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
      )}

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          overlay === "dark"
            ? "bg-navy-deep/80"
            : "bg-gradient-to-b from-navy-deep/90 via-navy-deep/70 to-navy-deep"
        )}
      />

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center py-24 md:py-32">
        <RevealOnScroll variant="fadeUp">
          {tag && (
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-mono">
              &#x2756; {tag} &#x2756;
            </span>
          )}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-[1.1]">
            {title}
          </h1>
        </RevealOnScroll>

        {subtitle && (
          <RevealOnScroll variant="fadeUp" delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-ivory/50 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </RevealOnScroll>
        )}

        {scripture && (
          <RevealOnScroll variant="fadeIn" delay={0.3}>
            <div className="mt-8 pt-6 border-t border-gold/10 inline-block">
              <p className="font-[family-name:var(--font-lora)] text-sm md:text-base text-gold/60 italic max-w-xl mx-auto">
                &ldquo;{scripture}&rdquo;
              </p>
              {scriptureRef && (
                <p className="mt-2 text-xs tracking-widest uppercase text-gold/40 font-mono">
                  — {scriptureRef}
                </p>
              )}
            </div>
          </RevealOnScroll>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-deep to-transparent" />
    </section>
  );
}
