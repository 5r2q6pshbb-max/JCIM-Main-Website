import type { Metadata } from "next";
import { BereanHero } from "@/components/berean/berean-hero";
import { ServiceTimes } from "@/components/berean/service-times";
import { PlanYourVisit } from "@/components/berean/plan-your-visit";
import { WhatToExpect } from "@/components/berean/what-to-expect";
import { CampusGallery } from "@/components/berean/campus-gallery";

export const metadata: Metadata = {
  title: "The Berean Church",
  description:
    "Visit The Berean Church — JCIM's flagship congregation in Accra. View service times, plan your visit, and see our campus.",
};

export default function BereanPage() {
  return (
    <>
      <BereanHero />
      <ServiceTimes />
      <PlanYourVisit />
      <WhatToExpect />
      <CampusGallery />
    </>
  );
}
