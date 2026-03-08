"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/shared/page-hero";

export function ConnectHero() {
  const t = useTranslations("ConnectPage");
  return (
    <PageHero
      tag={t("heroTag")}
      title={t("heroTitle")}
      subtitle={t("heroSubtitle")}
      scripture="And they continued stedfastly in the apostles' doctrine and fellowship"
      scriptureRef="Acts 2:42"
    />
  );
}
