import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/content/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jesuscityint.org";

  const staticPages = [
    "",
    "/about",
    "/ministries",
    "/discipleship",
    "/sermons",
    "/events",
    "/berean",
    "/give",
    "/connect",
    "/blog",
  ];

  const routes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : ("weekly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog post pages
  BLOG_POSTS.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return routes;
}
