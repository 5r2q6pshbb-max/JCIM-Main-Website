"use client";

import { cn } from "@/lib/utils";

interface TabFilterProps {
  categories: readonly string[] | string[];
  active: string;
  onChange: (category: string) => void;
  className?: string;
}

export function TabFilter({
  categories,
  active,
  onChange,
  className,
}: TabFilterProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex flex-wrap gap-2 justify-center",
        className
      )}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={cn(
            "px-4 py-2 text-xs md:text-sm tracking-wider uppercase font-mono transition-all duration-300 border",
            active === cat
              ? "bg-gold text-dark-base border-gold"
              : "bg-transparent text-ivory/50 border-gold/15 hover:border-gold/40 hover:text-ivory/80"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
