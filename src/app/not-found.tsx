"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-navy-deep">
      {/* Crosshair decorative lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-8 left-8 h-12 w-12 border-t border-l border-gold/20 sm:top-12 sm:left-12" />
        <div className="absolute top-8 right-8 h-12 w-12 border-t border-r border-gold/20 sm:top-12 sm:right-12" />
        <div className="absolute bottom-8 left-8 h-12 w-12 border-b border-l border-gold/20 sm:bottom-12 sm:left-12" />
        <div className="absolute bottom-8 right-8 h-12 w-12 border-b border-r border-gold/20 sm:bottom-12 sm:right-12" />
      </div>

      <div className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(199,163,79,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="gold-text font-[family-name:var(--font-playfair)] text-[8rem] leading-none font-black tracking-tight sm:text-[12rem]">
          {t("title")}
        </h1>

        <div className="my-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wide text-ivory sm:text-3xl">
          {t("heading")}
        </h2>

        <p className="mt-4 max-w-md font-[family-name:var(--font-inter)] text-sm leading-relaxed text-warm-white/50 sm:text-base">
          {t("description")}
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="chamfer-clip inline-flex items-center justify-center bg-gold px-7 py-3 text-sm font-semibold tracking-wider text-dark-base uppercase transition-all duration-300 hover:bg-gold-light"
          >
            {t("backHome")}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.3em] text-gold/20 uppercase">
        ERR::404 // RESOURCE_NOT_FOUND
      </div>
    </div>
  );
}
