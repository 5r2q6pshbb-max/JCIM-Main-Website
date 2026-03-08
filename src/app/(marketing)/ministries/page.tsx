import type { Metadata } from "next";
import { MinistriesHero } from "@/components/ministries/ministries-hero";
import { DepartmentGrid } from "@/components/ministries/department-grid";
import { CommunityFellowships } from "@/components/ministries/community-fellowships";
import { SubMinistriesSection } from "@/components/ministries/fellowship-ministries";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Explore JCIM's 7 departments, 2 community fellowships, and 6 sub-ministries advancing the gospel across every sphere.",
};

export default function MinistriesPage() {
  return (
    <>
      <MinistriesHero />
      <DepartmentGrid />
      <CommunityFellowships />
      <SubMinistriesSection />
    </>
  );
}
