"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { cn } from "@/lib/utils";
import type { StatItem } from "@/types/content";

interface StatCounterProps extends StatItem {
  className?: string;
}

export function StatCounter({
  value,
  suffix,
  label,
  className,
}: StatCounterProps) {
  const { count, ref } = useCounterAnimation(value);

  return (
    <div className={cn("text-center", className)} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold gold-text">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-ivory/50 tracking-wider uppercase">
        {label}
      </p>
    </div>
  );
}
