import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FellowshipPageContent } from "@/components/fellowship/fellowship-page-content";
import { COMMUNITY_FELLOWSHIPS } from "@/lib/content/ministries";

const fellowship = COMMUNITY_FELLOWSHIPS.find((f) => f.slug === "ladies-of-faith")!;

export const metadata: Metadata = {
  title: "Ladies of Faith",
  description: fellowship.description,
};

export default function LadiesOfFaithPage() {
  return (
    <>
      <PageHero
        tag="Community Fellowship"
        title={"Ladies of Faith"}
        subtitle={fellowship.tagline}
        scripture={fellowship.scripture}
        scriptureRef={fellowship.scriptureRef}
      />
      <FellowshipPageContent fellowship={fellowship} />
    </>
  );
}
