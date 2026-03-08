"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/shared/page-hero";

export function AboutHero() {
  const t = useTranslations("AboutPage");
  return (
    <PageHero
      tag={t("heroTag")}
      title={t("heroTitle")}
      subtitle={t("heroSubtitle")}
      scripture="Ye are the light of the world. A city that is set on a hill cannot be hid."
      scriptureRef="Matthew 5:14"
    />
  );
}
