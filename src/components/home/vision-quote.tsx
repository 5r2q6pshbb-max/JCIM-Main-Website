"use client";

import { useEffect, useRef } from "react";
import { VISION_QUOTE } from "@/lib/content/site-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { GoldDivider } from "@/components/shared/gold-divider";

export function VisionQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const words = VISION_QUOTE.split(" ");

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const loadGsap = async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/animations");

      gsap.fromTo(
        wordsRef.current.filter(Boolean),
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    loadGsap();
  }, [prefersReducedMotion]);

  return (
    <section className="relative py-24 md:py-32 bg-navy-deep overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.04)_0%,transparent_60%)]" />

      <div
        ref={containerRef}
        className="relative max-w-4xl mx-auto px-4 text-center"
      >
        <GoldDivider className="mb-12" />

        <blockquote className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-warm-white">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { wordsRef.current[i] = el; }}
              className={prefersReducedMotion ? "" : "inline-block mr-[0.3em]"}
              style={prefersReducedMotion ? {} : { opacity: 0.1 }}
            >
              {word}{" "}
            </span>
          ))}
        </blockquote>

        <GoldDivider className="mt-12" />

        <p className="mt-8 text-sm text-gold/40 tracking-[0.2em] uppercase">
          — Apostle Terry Paul Kwesi Yekple
        </p>
      </div>
    </section>
  );
}
