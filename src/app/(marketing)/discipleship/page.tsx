import type { Metadata } from "next";
import { DiscipleshipHero } from "@/components/discipleship/discipleship-hero";
import { ThemeliosPathway } from "@/components/discipleship/themelios-pathway";
import { FoundationModules } from "@/components/discipleship/foundation-modules";
import { CellSystem } from "@/components/discipleship/cell-system";

export const metadata: Metadata = {
  title: "Discipleship",
  description:
    "Discover the Themelios Discipleship System — JCIM's structured pathway for spiritual growth, foundation modules, and cell groups.",
};

export default function DiscipleshipPage() {
  return (
    <>
      <DiscipleshipHero />
      <ThemeliosPathway />
      <FoundationModules />
      <CellSystem />
    </>
  );
}
