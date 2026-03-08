import Fuse from "fuse.js";
import { BLOG_POSTS } from "@/lib/content/blog-posts";
import { FEATURED_SERMONS } from "@/lib/content/sermons";
import { getAllEvents } from "@/lib/content/yearly-calendar";

export interface SearchResult {
  type: "blog" | "sermon" | "event";
  title: string;
  description: string;
  href: string;
  score: number;
}

interface SearchEntry {
  type: "blog" | "sermon" | "event";
  title: string;
  description: string;
  content: string;
  href: string;
}

function buildEntries(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  // Blog posts
  for (const post of BLOG_POSTS) {
    entries.push({
      type: "blog",
      title: post.title,
      description: post.excerpt,
      content: `${post.content} ${post.tags.join(" ")} ${post.category}`,
      href: `/blog/${post.slug}`,
    });
  }

  // Sermons
  for (const sermon of FEATURED_SERMONS) {
    entries.push({
      type: "sermon",
      title: sermon.title,
      description: sermon.description,
      content: `${sermon.speaker} ${sermon.series || ""} ${sermon.description}`,
      href: `/sermons#${sermon.id}`,
    });
  }

  // Events
  const events = getAllEvents();
  for (const event of events) {
    entries.push({
      type: "event",
      title: event.title,
      description: event.description,
      content: `${event.location} ${event.category} ${event.description}`,
      href: `/events#${event.id}`,
    });
  }

  return entries;
}

let fuseInstance: Fuse<SearchEntry> | null = null;

function getFuse(): Fuse<SearchEntry> {
  if (!fuseInstance) {
    const entries = buildEntries();
    fuseInstance = new Fuse(entries, {
      threshold: 0.4,
      keys: [
        { name: "title", weight: 2 },
        { name: "description", weight: 1 },
        { name: "content", weight: 0.5 },
      ],
      includeScore: true,
    });
  }
  return fuseInstance;
}

export function searchSite(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const fuse = getFuse();
  const results = fuse.search(query, { limit: 20 });

  return results.map((r) => ({
    type: r.item.type,
    title: r.item.title,
    description: r.item.description,
    href: r.item.href,
    score: r.score ?? 1,
  }));
}
