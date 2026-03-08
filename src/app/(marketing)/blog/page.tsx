import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogListing } from "@/components/blog/blog-listing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read insights, reflections, and kingdom perspectives from the Jesus City International Ministry community.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogListing />
    </>
  );
}
