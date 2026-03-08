"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/shared/page-hero";

export function DiscipleshipHero() {
  const t = useTranslations("DiscipleshipPage");
  return (
    <PageHero
      tag={t("heroTag")}
      title={t("heroTitle")}
      subtitle={t("heroSubtitle")}
      scripture="Go therefore and make disciples of all nations"
      scriptureRef="Matthew 28:19"
    />
  );
}
