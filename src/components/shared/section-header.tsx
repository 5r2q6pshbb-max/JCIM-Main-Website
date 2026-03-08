"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {tag && (
        <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-4 font-mono">
          &#x2756; {tag} &#x2756;
        </span>
      )}
      <h2
        className={cn(
          "font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
          light ? "text-dark-base" : "text-warm-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-dark-base/60" : "text-ivory/50"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
