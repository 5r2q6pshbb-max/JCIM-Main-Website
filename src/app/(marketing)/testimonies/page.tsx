import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { TestimonyCarousel } from "@/components/testimonies/testimony-carousel";
import { TestimonyGrid } from "@/components/testimonies/testimony-grid";
import { SubmitTestimony } from "@/components/testimonies/submit-testimony";

export const metadata: Metadata = {
  title: "Testimonies",
  description:
    "Read and share testimonies of what God has done through Jesus CITY International Ministries. Stories of salvation, healing, deliverance, provision, transformation, and family restoration.",
};

export default async function TestimoniesPage() {
  const t = await getTranslations("TestimoniesPage");
  return (
    <>
      <PageHero
        tag={t("heroTag")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        scripture="And they overcame him by the blood of the Lamb, and by the word of their testimony"
        scriptureRef="Revelation 12:11"
      />
      <TestimonyCarousel />
      <TestimonyGrid />
      <SubmitTestimony />
    </>
  );
}
