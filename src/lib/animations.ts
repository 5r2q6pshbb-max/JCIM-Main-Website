"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Easing presets
export const EASE = {
  smooth: "power2.out",
  smoothInOut: "power2.inOut",
  snap: "power3.out",
  elastic: "elastic.out(1, 0.5)",
  expo: "expo.out",
  back: "back.out(1.7)",
  circ: "circ.out",
} as const;

// Duration presets
export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  reveal: 0.8,
  hero: 1.2,
  counter: 2,
} as const;

// Stagger presets
export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
  text: 0.03,
} as const;

// Common animation variants for Framer Motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export { gsap, ScrollTrigger };
