import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { VisionQuote } from "@/components/home/vision-quote";
import { AboutPreview } from "@/components/home/about-preview";
import { PillarsGrid } from "@/components/home/pillars-grid";
import { BereanPreview } from "@/components/home/berean-preview";
import { EventsCarousel } from "@/components/home/events-carousel";
import { SermonsPreview } from "@/components/home/sermons-preview";
import { GivingSection } from "@/components/home/giving-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Jesus City International Ministry — a global apostolic ministry equipping believers through discipleship, worship, and service.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionQuote />
      <AboutPreview />
      <PillarsGrid />
      <BereanPreview />
      <EventsCarousel />
      <SermonsPreview />
      <GivingSection />
    </>
  );
}
