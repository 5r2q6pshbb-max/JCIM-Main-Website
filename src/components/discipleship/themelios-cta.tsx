"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { ChamferButton } from "@/components/shared/chamfer-button";
import { ArrowRight, LogIn } from "lucide-react";

export function ThemeliosCta() {
  const t = useTranslations("DiscipleshipPage");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-deep" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Decorative border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          tag={t("themeliosCtaTag")}
          title={t("themeliosCtaTitle")}
          subtitle={t("themeliosCtaSubtitle")}
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ChamferButton
            href="https://themelios.app/signup"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("themeliosCtaButton")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </ChamferButton>

          <ChamferButton
            href="https://themelios.app/login"
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogIn className="mr-2 w-4 h-4" />
            {t("themeliosCtaSecondary")}
          </ChamferButton>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
