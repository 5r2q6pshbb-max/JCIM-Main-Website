import { BLOG_POSTS } from "@/lib/content/blog-posts";
import { FEATURED_SERMONS } from "@/lib/content/sermons";
import { SITE_CONFIG } from "@/lib/constants";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const siteUrl = SITE_CONFIG.url;

  // Combine blog posts and sermons into feed items
  const blogItems = BLOG_POSTS.map((post) => ({
    title: post.title,
    link: `${siteUrl}/blog/${post.slug}`,
    description: post.excerpt,
    pubDate: new Date(post.date).toUTCString(),
    category: post.category,
    author: post.author,
    date: post.date,
  }));

  const sermonItems = FEATURED_SERMONS.map((sermon) => ({
    title: sermon.title,
    link: `${siteUrl}/sermons#${sermon.id}`,
    description: sermon.description,
    pubDate: new Date(sermon.date).toUTCString(),
    category: sermon.series || "Sermons",
    author: sermon.speaker,
    date: sermon.date,
  }));

  // Combine and sort by date descending
  const allItems = [...blogItems, ...sermonItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)} — Blog &amp; Sermons</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(SITE_CONFIG.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/favicon.ico</url>
      <title>${escapeXml(SITE_CONFIG.name)}</title>
      <link>${siteUrl}</link>
    </image>
${allItems
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <author>${escapeXml(item.author)}</author>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
