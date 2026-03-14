"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./use-reduced-motion";

export function useCounterAnimation(
  end: number,
  duration: number = 2,
  triggerOnView: boolean = true
) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let rafId: number;

    if (prefersReducedMotion) {
      setCount(end);
      setHasAnimated(true);
      return;
    }

    if (!triggerOnView) {
      animateCount();
      return () => cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.8 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };

    function animateCount() {
      const startTime = performance.now();
      const step = (currentTime: number) => {
        const elapsed = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * end));
        if (progress < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration, triggerOnView, prefersReducedMotion]);

  return { count, ref };
}
