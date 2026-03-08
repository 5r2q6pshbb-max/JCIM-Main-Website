"use client";

import { useRef, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./reveal-on-scroll";
import type { TimelineMilestone } from "@/types/content";

interface TimelineProps {
  milestones: TimelineMilestone[];
  className?: string;
}

export function Timeline({ milestones, className }: TimelineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

    const initAnimation = async () => {
      const { gsap, ScrollTrigger } = await import("@/lib/animations");

      ctx = gsap.context(() => {
        if (!lineRef.current) return;

        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 0.5,
            },
          }
        );
      }, containerRef);
    };

    initAnimation();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Vertical line */}
      <div
        ref={lineRef}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/5 via-gold/20 to-gold/5 md:-translate-x-[0.5px]"
      />

      <div className="space-y-12 md:space-y-16">
        {milestones.map((milestone, i) => {
          const isLeft = i % 2 === 0;

          return (
            <RevealOnScroll
              key={milestone.year}
              variant={isLeft ? "slideLeft" : "slideRight"}
              delay={i * 0.1}
            >
              <div
                className={cn(
                  "relative flex items-start gap-6 md:gap-0",
                  "md:flex-row",
                  !isLeft && "md:flex-row-reverse"
                )}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 -translate-x-1/2 z-10">
                  <div className="w-3 h-3 border-2 border-gold bg-navy-deep rotate-45" />
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "ml-10 md:ml-0 md:w-[calc(50%-2rem)]",
                    isLeft ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"
                  )}
                >
                  <span className="inline-block font-mono text-xs tracking-[0.3em] text-gold mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-warm-white font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-ivory/45 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}
