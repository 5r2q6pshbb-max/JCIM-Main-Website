"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { SITE_CONFIG, CAMPUSES, SCRIPTURE_FOOTER } from "@/lib/constants";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const socialIcons = [
  { icon: Youtube, href: SITE_CONFIG.socials.youtube, label: "YouTube" },
  { icon: Instagram, href: SITE_CONFIG.socials.instagram, label: "Instagram" },
  { icon: Facebook, href: SITE_CONFIG.socials.facebook, label: "Facebook" },
  { icon: Twitter, href: SITE_CONFIG.socials.twitter, label: "Twitter" },
];

const QUICK_LINK_KEYS = [
  { key: "foundationSchool", href: "/discipleship" },
  { key: "cellGroups", href: "/connect" },
  { key: "prayerRequest", href: "/connect#prayer" },
  { key: "sermons", href: "/sermons" },
  { key: "give", href: "/give" },
  { key: "volunteer", href: "/connect#volunteer" },
] as const;

export function Footer() {
  const t = useTranslations("Footer");
  const tCommon = useTranslations("Common");

  return (
    <footer className="relative bg-navy-deep border-t border-gold/10">
      {/* Gold accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-warm-white">
                JCIM
              </h3>
            </Link>
            <p className="text-sm text-ivory/50 leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex gap-3 pt-2">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gold/20 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase mb-6">
              {t("campuses")}
            </h4>
            <div className="space-y-4">
              {CAMPUSES.map((campus) => (
                <div key={campus.name}>
                  <p className="text-sm text-warm-white font-medium">
                    {campus.name}
                  </p>
                  <p className="text-xs text-ivory/40">{campus.location}</p>
                  <p className="text-[10px] text-gold/40">
                    {tCommon("est")} {campus.launched}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase mb-6">
              {t("quickLinks")}
            </h4>
            <nav className="space-y-3">
              {QUICK_LINK_KEYS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-ivory/50 hover:text-gold transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase mb-6">
              {t("stayConnected")}
            </h4>
            <p className="text-sm text-ivory/50 mb-4">
              {t("newsletterText")}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                aria-label={t("emailPlaceholder")}
                className="bg-navy/50 border border-gold/15 px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button
                type="submit"
                className="chamfer-clip bg-gold/10 border border-gold/30 text-gold text-sm py-2.5 hover:bg-gold/20 transition-colors"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>

        {/* Scripture */}
        <div className="mt-16 pt-8 border-t border-gold/5 text-center">
          <p className="font-[family-name:var(--font-lora)] italic text-sm text-ivory/30 max-w-2xl mx-auto">
            &ldquo;{SCRIPTURE_FOOTER}&rdquo;
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-ivory/20">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}.{" "}
            {tCommon("allRightsReserved")}
          </p>
          <p className="tracking-[0.15em] uppercase">
            {SITE_CONFIG.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
