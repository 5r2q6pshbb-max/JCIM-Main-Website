import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FellowshipPageContent } from "@/components/fellowship/fellowship-page-content";
import { COMMUNITY_FELLOWSHIPS } from "@/lib/content/ministries";

const fellowship = COMMUNITY_FELLOWSHIPS.find((f) => f.slug === "men-of-valor")!;

export const metadata: Metadata = {
  title: "Men of Valor",
  description: fellowship.description,
};

export default function MenOfValorPage() {
  return (
    <>
      <PageHero
        tag="Community Fellowship"
        title={"Men of Valor"}
        subtitle={fellowship.tagline}
        scripture={fellowship.scripture}
        scriptureRef={fellowship.scriptureRef}
      />
      <FellowshipPageContent fellowship={fellowship} />
    </>
  );
}
