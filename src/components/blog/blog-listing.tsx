"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/content/blog-posts";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { TabFilter } from "@/components/shared/tab-filter";

export function BlogListing() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Blog"
            title="Latest Articles"
            subtitle="Insights, teachings, and reflections from the heart of Jesus CITY International Ministries."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <TabFilter
            categories={BLOG_CATEGORIES}
            active={activeCategory}
            onChange={setActiveCategory}
            className="mb-12"
          />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, i) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );

            return (
              <RevealOnScroll key={post.id} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full border border-gold/10 hover:border-gold/25 transition-all duration-500 bg-navy-deep/50"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[3/2] bg-navy/80 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.06)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-block bg-gold/90 text-dark-base text-[9px] tracking-[0.15em] uppercase font-mono font-bold px-2.5 py-0.5">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold leading-tight group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="mt-2 text-sm text-ivory/45 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gold/8 flex items-center justify-between text-xs text-ivory/35 font-mono tracking-wider">
                      <span>{post.author}</span>
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <RevealOnScroll>
            <div className="text-center py-16">
              <p className="text-ivory/40 text-sm">
                No articles found in this category.
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
