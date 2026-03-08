"use client";

import { useState } from "react";
import { toast } from "sonner";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { SITE_CONFIG } from "@/lib/constants";

const SOCIAL_LINKS = [
  { name: "YouTube", href: SITE_CONFIG.socials.youtube, icon: "YT" },
  { name: "Instagram", href: SITE_CONFIG.socials.instagram, icon: "IG" },
  { name: "Facebook", href: SITE_CONFIG.socials.facebook, icon: "FB" },
  { name: "Twitter", href: SITE_CONFIG.socials.twitter, icon: "X" },
  { name: "TikTok", href: SITE_CONFIG.socials.tiktok, icon: "TT" },
];

export function ContactInfo() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Newsletter signup:", email);
    toast.success("You've been subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Reach Us"
            title="Get in Touch"
            subtitle="We'd love to connect with you. Reach out through any of the channels below."
          />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <RevealOnScroll variant="slideLeft" delay={0.1}>
            <div className="space-y-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold">
                Contact Details
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/20 bg-gold/5">
                    <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/50 font-mono">
                      Email
                    </span>
                    <p className="mt-1 text-sm text-ivory/70">
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="hover:text-gold transition-colors duration-300"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/20 bg-gold/5">
                    <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/50 font-mono">
                      Phone
                    </span>
                    <p className="mt-1 text-sm text-ivory/70">
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="hover:text-gold transition-colors duration-300"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/20 bg-gold/5">
                    <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/50 font-mono">
                      Address
                    </span>
                    <p className="mt-1 text-sm text-ivory/70">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Social Media */}
          <RevealOnScroll variant="slideRight" delay={0.1}>
            <div className="space-y-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold">
                Follow Us
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 border border-gold/10 p-4 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                  >
                    <span className="flex h-8 w-8 items-center justify-center bg-gold/10 text-gold text-xs font-bold font-mono group-hover:bg-gold group-hover:text-dark-base transition-all duration-300">
                      {social.icon}
                    </span>
                    <span className="text-sm text-ivory/60 group-hover:text-ivory/90 transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Newsletter */}
        <RevealOnScroll delay={0.25}>
          <div className="mt-16 pt-12 border-t border-gold/10">
            <div className="mx-auto max-w-xl text-center">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-warm-white font-semibold">
                Stay Connected
              </h3>
              <p className="mt-3 text-sm text-ivory/50">
                Subscribe to our newsletter for updates, devotionals, and event announcements.
              </p>

              <form
                onSubmit={handleNewsletter}
                className="mt-6 flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-navy-deep/80 border border-gold/15 px-4 py-3 text-sm text-warm-white placeholder:text-ivory/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="chamfer-clip bg-gold text-dark-base px-7 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
