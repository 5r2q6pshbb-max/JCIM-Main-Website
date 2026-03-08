"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/shared/page-hero";

export function EventsHero() {
  const t = useTranslations("EventsPage");
  return (
    <PageHero
      tag={t("heroTag")}
      title={t("heroTitle")}
      subtitle={t("heroSubtitle")}
      scripture="Not forsaking the assembling of ourselves together"
      scriptureRef="Hebrews 10:25"
    />
  );
}
