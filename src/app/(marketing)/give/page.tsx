import type { Metadata } from "next";
import { GiveHero } from "@/components/give/give-hero";
import { GivingTypeSelector } from "@/components/give/giving-type-selector";
import { GivingForm } from "@/components/give/giving-form";
import { GivingImpact } from "@/components/give/giving-impact";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the work of Jesus City International Ministry. Give tithes, offerings, and donations to advance the kingdom.",
};

export default function GivePage() {
  return (
    <>
      <GiveHero />
      <GivingTypeSelector />
      <GivingForm />
      <GivingImpact />
    </>
  );
}
