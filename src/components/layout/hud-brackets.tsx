"use client";

import { useIsMobile } from "@/hooks/use-media-query";

export function HudBrackets() {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 z-[40] pointer-events-none">
      {/* Top-left */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-gold/20 transition-all duration-500 hover:w-12 hover:h-12 hover:border-gold/40 pointer-events-auto" />
      {/* Top-right */}
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-gold/20 transition-all duration-500 hover:w-12 hover:h-12 hover:border-gold/40 pointer-events-auto" />
      {/* Bottom-left */}
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-gold/20 transition-all duration-500 hover:w-12 hover:h-12 hover:border-gold/40 pointer-events-auto" />
      {/* Bottom-right */}
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-gold/20 transition-all duration-500 hover:w-12 hover:h-12 hover:border-gold/40 pointer-events-auto" />
    </div>
  );
}
