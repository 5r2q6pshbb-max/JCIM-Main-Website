"use client";

import { cn } from "@/lib/utils";

interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function OrnateFrame({
  children,
  className,
  hoverGlow = true,
}: OrnateFrameProps) {
  return (
    <div
      className={cn(
        "relative group",
        hoverGlow && "hover:shadow-[0_0_30px_rgba(199,163,79,0.1)]",
        className
      )}
    >
      {/* Double border */}
      <div className="absolute inset-0 border border-gold/15 group-hover:border-gold/30 transition-colors duration-500" />
      <div className="absolute inset-[3px] border border-gold/8 group-hover:border-gold/15 transition-colors duration-500" />

      {/* Corner accents */}
      <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-gold/40 group-hover:w-8 group-hover:h-8 group-hover:border-gold/60 transition-all duration-500" />
      <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t-2 border-r-2 border-gold/40 group-hover:w-8 group-hover:h-8 group-hover:border-gold/60 transition-all duration-500" />
      <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b-2 border-l-2 border-gold/40 group-hover:w-8 group-hover:h-8 group-hover:border-gold/60 transition-all duration-500" />
      <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-gold/40 group-hover:w-8 group-hover:h-8 group-hover:border-gold/60 transition-all duration-500" />

      {/* Content */}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
