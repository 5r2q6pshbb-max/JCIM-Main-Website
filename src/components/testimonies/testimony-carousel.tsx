"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIES } from "@/lib/content/testimonies";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

const featured = TESTIMONIES.filter((t) => t.featured);

export function TestimonyCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % featured.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + featured.length) % featured.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  if (featured.length === 0) return null;

  const testimony = featured[current]!;

  return (
    <section className="section-padding bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Featured Testimonies"
          title="What God Has Done"
          subtitle="Hear from lives that have been transformed by the power of God through JCIM."
        />

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card */}
          <div className="relative rounded-sm border border-gold/20 bg-navy p-8 md:p-12">
            {/* Large quote mark */}
            <div className="absolute top-4 left-6 font-[family-name:var(--font-playfair)] text-8xl md:text-9xl text-gold/10 leading-none select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative z-10">
              <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-ivory/80 leading-relaxed italic">
                &ldquo;{testimony.excerpt}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-playfair)] text-gold font-bold text-lg">
                    {testimony.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-warm-white text-lg font-semibold">
                    {testimony.name}
                  </p>
                  <p className="text-xs text-ivory/40 tracking-wider uppercase font-mono">
                    {testimony.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Gold accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>

          {/* Navigation arrows */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex items-center justify-center w-10 h-10 border border-gold/20 text-gold/60 hover:text-gold hover:border-gold/50 transition-colors"
              aria-label="Previous testimony"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i === current ? "bg-gold w-6" : "bg-gold/20"
                  )}
                  aria-label={`Go to testimony ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 border border-gold/20 text-gold/60 hover:text-gold hover:border-gold/50 transition-colors"
              aria-label="Next testimony"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
