"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { ArrowRight } from "lucide-react";

export function JourneyCta() {
  const t = useTranslations("AboutPage");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-deep" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Decorative border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          tag={t("journeyTag")}
          title={t("journeyTitle")}
          subtitle={t("journeySubtitle")}
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ChamferButton href="/discipleship" size="lg">
            {t("journeyButton")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </ChamferButton>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
