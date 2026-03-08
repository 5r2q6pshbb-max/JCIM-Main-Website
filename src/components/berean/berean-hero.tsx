"use client";

import { useRef, useLayoutEffect } from "react";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

export function BereanHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalLineRef = useRef<HTMLDivElement>(null);
  const verticalLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

    const initAnimation = async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/animations");

      ctx = gsap.context(() => {
        if (!horizontalLineRef.current || !verticalLineRef.current) return;

        // Horizontal line moves slower — parallax depth
        gsap.to(horizontalLineRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Vertical line moves at a different speed for depth
        gsap.to(verticalLineRef.current, {
          yPercent: -35,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }, sectionRef);
    };

    initAnimation();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />

      {/* Decorative cross lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={horizontalLineRef}
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/8 to-transparent"
        />
        <div
          ref={verticalLineRef}
          className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/6 to-transparent"
        />
      </div>

      {/* Gothic arch frame */}
      <div className="absolute inset-8 md:inset-16 lg:inset-24 gothic-arch border border-gold/8 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center py-24 md:py-32">
        <RevealOnScroll variant="fadeUp">
          <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-6 font-mono">
            &#x2720; A Church Expression of Jesus City International Ministries &#x2720;
          </span>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeUp" delay={0.1}>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-warm-white leading-[1.05] tracking-tight">
            THE BEREAN
            <br />
            CHURCH
          </h1>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeUp" delay={0.2}>
          <p className="mt-6 font-[family-name:var(--font-lora)] text-lg md:text-xl text-gold italic">
            Raising Tomorrow&apos;s Leaders Today
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="fadeIn" delay={0.35}>
          <div className="mt-10 pt-6 border-t border-gold/10 inline-block max-w-xl">
            <p className="font-[family-name:var(--font-lora)] text-sm md:text-base text-ivory/50 italic leading-relaxed">
              &ldquo;Now the Berean Jews were of more noble character than those in
              Thessalonica, for they received the message with great eagerness and
              examined the Scriptures every day to see if what Paul said was true.&rdquo;
            </p>
            <p className="mt-3 text-xs tracking-widest uppercase text-gold/40 font-mono">
              &mdash; Acts 17:11
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-deep to-transparent" />
    </section>
  );
}
