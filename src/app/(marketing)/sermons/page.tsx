import type { Metadata } from "next";
import { LiveStream } from "@/components/sermons/live-stream";
import { SermonsHeroFeatured } from "@/components/sermons/sermons-hero-featured";
import { SermonArchive } from "@/components/sermons/sermon-archive";
import { BookPublications } from "@/components/sermons/book-publications";
import { TeachingResources } from "@/components/sermons/teaching-resources";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Watch and listen to powerful sermons from Jesus CITY International Ministries. Explore our sermon archive, book publications, and teaching resources.",
};

export default function SermonsPage() {
  return (
    <>
      <LiveStream />
      <SermonsHeroFeatured />
      <SermonArchive />
      <BookPublications />
      <TeachingResources />
    </>
  );
}
