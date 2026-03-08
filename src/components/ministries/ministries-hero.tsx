"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/shared/page-hero";

export function MinistriesHero() {
  const t = useTranslations("MinistriesPage");
  return (
    <PageHero
      tag={t("heroTag")}
      title={t("heroTitle")}
      subtitle={t("heroSubtitle")}
      scripture="And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers"
      scriptureRef="Ephesians 4:11"
    />
  );
}
