"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { HERO_SCRIPTURE } from "@/lib/content/site-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ChevronDown } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function HeroFallback() {
  return (
    <div className="absolute inset-0 hero-fallback">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("HomePage");

  // Split the translated title into lines
  const heroLines = t("heroTitle").split("\n");

  useEffect(() => {
    const showAll = () => {
      textRefs.current.forEach((el) => {
        if (el) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }
      });
      if (subtitleRef.current) { subtitleRef.current.style.opacity = "1"; subtitleRef.current.style.transform = "translateY(0)"; }
      if (ctaRef.current) { ctaRef.current.style.opacity = "1"; ctaRef.current.style.transform = "translateY(0)"; }
    };

    if (prefersReducedMotion) { showAll(); return; }

    // Reset elements to initial state (handles React Strict Mode re-runs)
    textRefs.current.forEach((el) => {
      if (el) { gsap.set(el, { opacity: 0, y: 60 }); }
    });
    if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
    if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ delay: 0.5 });

    textRefs.current.forEach((el, i) => {
      if (el) {
        tl.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, i * 0.15);
      }
    });

    if (subtitleRef.current) {
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
    }

    if (ctaRef.current) {
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
    }

    return () => { tl.kill(); showAll(); };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep"
    >
      {/* Three.js background */}
      <HeroScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/60 via-transparent to-navy-deep/60 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center px-4 max-w-5xl mx-auto">
        {/* Ministry tag */}
        <div className="mb-8 mt-6 md:mt-10">
          <span className="inline-block text-[10px] tracking-[0.5em] uppercase text-gold/60 font-mono">
            {t("heroTag")}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
          {heroLines.map((line, i) => (
            <span
              key={i}
              ref={(el) => { textRefs.current[i] = el; }}
              className="block"
              style={{ opacity: 0, transform: "translateY(60px)" }}
            >
              {i === 1 ? (
                <span className="gold-text">{line}</span>
              ) : (
                <span className="text-warm-white">{line}</span>
              )}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-8 text-base sm:text-lg md:text-xl text-ivory/50 max-w-2xl mx-auto leading-relaxed"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          {t("heroSubtitle")}
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <ChamferButton href="/about" size="lg">
            {t("heroCta")}
          </ChamferButton>
          <ChamferButton href="/connect" variant="outline" size="lg">
            {t("heroCtaSecondary")}
          </ChamferButton>
        </div>

        {/* Scripture float */}
        <div className="mt-10 md:mt-14 mb-16">
          <p className="font-[family-name:var(--font-lora)] italic text-sm text-ivory/25 max-w-lg mx-auto">
            &ldquo;{HERO_SCRIPTURE.text}&rdquo;
          </p>
          <p className="mt-1 text-[10px] text-gold/30 tracking-wider">
            {HERO_SCRIPTURE.ref}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[9px] tracking-[0.3em] uppercase text-gold/30">
          {t("scroll")}
        </span>
        <ChevronDown className="w-4 h-4 text-gold/30" />
      </div>
    </section>
  );
}
