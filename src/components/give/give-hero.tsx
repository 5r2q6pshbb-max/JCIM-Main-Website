"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/shared/page-hero";

export function GiveHero() {
  const t = useTranslations("GivePage");
  return (
    <PageHero
      tag={t("heroTag")}
      title={t("heroTitle")}
      subtitle={t("heroSubtitle")}
      scripture="Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
      scriptureRef="2 Corinthians 9:7"
    />
  );
}
