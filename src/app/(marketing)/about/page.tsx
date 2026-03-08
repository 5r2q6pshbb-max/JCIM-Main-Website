import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutTimeline } from "@/components/about/about-timeline";
import { FounderBio } from "@/components/about/founder-bio";
import { VisionMission } from "@/components/about/vision-mission";
import { CoreValues } from "@/components/about/core-values";
import { StatementOfFaith } from "@/components/about/statement-of-faith";
import { GovernanceChart } from "@/components/about/governance-chart";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jesus City International Ministry — our story, vision, mission, leadership, and statement of faith.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutTimeline />
      <FounderBio />
      <VisionMission />
      <CoreValues />
      <StatementOfFaith />
      <GovernanceChart />
    </>
  );
}
