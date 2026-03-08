"use client";

import { ChamferButton } from "./chamfer-button";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export function CtaBanner({
  title,
  subtitle,
  buttonText,
  buttonHref,
  className,
}: CtaBannerProps) {
  return (
    <section
      className={cn(
        "relative py-20 overflow-hidden",
        className
      )}
    >
      {/* Animated gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-deep to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.08)_0%,transparent_70%)]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-warm-white font-bold">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-ivory/50 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-8">
          <ChamferButton href={buttonHref} size="lg">
            {buttonText}
          </ChamferButton>
        </div>
      </div>
    </section>
  );
}
