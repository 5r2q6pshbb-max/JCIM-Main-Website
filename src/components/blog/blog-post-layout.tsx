"use client";

import Link from "next/link";
import type { BlogPost } from "@/types/content";
import { BLOG_POSTS } from "@/lib/content/blog-posts";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";

interface BlogPostLayoutProps {
  post: BlogPost;
}

export function BlogPostLayout({ post }: BlogPostLayoutProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts (same category, excluding current post, max 3)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.id !== post.id
  ).slice(0, 3);

  // If not enough related posts from same category, fill from other posts
  const additionalNeeded = Math.max(0, 2 - relatedPosts.length);
  if (additionalNeeded > 0) {
    const additional = BLOG_POSTS.filter(
      (p) => p.id !== post.id && !relatedPosts.some((r) => r.id === p.id)
    ).slice(0, additionalNeeded);
    relatedPosts.push(...additional);
  }

  return (
    <article className="bg-navy-deep min-h-screen">
      {/* Header */}
      <section className="section-padding pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <RevealOnScroll>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold/60 font-mono hover:text-gold transition-colors duration-300 mb-10 group"
            >
              <svg
                className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back to Blog
            </Link>
          </RevealOnScroll>

          {/* Title */}
          <RevealOnScroll delay={0.1}>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl text-warm-white font-bold leading-tight">
              {post.title}
            </h1>
          </RevealOnScroll>

          {/* Meta */}
          <RevealOnScroll delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono tracking-wider">
              <span className="text-ivory/50">{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-gold/30" />
              <span className="text-ivory/40">{formattedDate}</span>
              <span className="w-1 h-1 rounded-full bg-gold/30" />
              <span className="inline-block bg-gold/90 text-dark-base text-[9px] tracking-[0.15em] uppercase font-bold px-2.5 py-0.5">
                {post.category}
              </span>
            </div>
          </RevealOnScroll>

          {/* Featured image placeholder */}
          <RevealOnScroll delay={0.2}>
            <div className="mt-10 aspect-[2/1] bg-navy/80 relative overflow-hidden border border-gold/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.06)_0%,transparent_70%)]" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll delay={0.1}>
            <div className="jcim-prose text-ivory/70 text-base md:text-lg leading-relaxed space-y-6">
              {post.content.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </RevealOnScroll>

          {/* Tags */}
          {post.tags.length > 0 && (
            <RevealOnScroll delay={0.15}>
              <div className="mt-12 pt-8 border-t border-gold/10">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold/40 font-mono">
                  Tags
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block border border-gold/15 px-3 py-1 text-xs text-ivory/40 font-mono tracking-wider hover:border-gold/30 hover:text-ivory/60 transition-colors duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-4 font-mono">
                  &#x2756; Keep Reading &#x2756;
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-warm-white font-bold">
                  Related Articles
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, i) => {
                const relatedDate = new Date(
                  relatedPost.date
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });

                return (
                  <RevealOnScroll key={relatedPost.id} delay={i * 0.1}>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="group block h-full border border-gold/10 hover:border-gold/25 transition-all duration-500 bg-navy-deep/50"
                    >
                      <div className="aspect-[3/2] bg-navy/80 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.06)_0%,transparent_70%)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-block bg-gold/90 text-dark-base text-[9px] tracking-[0.15em] uppercase font-mono font-bold px-2.5 py-0.5">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-[family-name:var(--font-playfair)] text-lg text-warm-white font-semibold leading-tight group-hover:text-gold transition-colors duration-300">
                          {relatedPost.title}
                        </h3>
                        <p className="mt-2 text-sm text-ivory/45 leading-relaxed line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gold/8 flex items-center justify-between text-xs text-ivory/35 font-mono tracking-wider">
                          <span>{relatedPost.author}</span>
                          <span>{relatedDate}</span>
                        </div>
                      </div>
                    </Link>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
