"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { Menu, Search } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { SearchModal } from "./search-modal";
import { LocaleSwitcher } from "./locale-switcher";

const NAV_KEYS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "ministries", href: "/ministries" },
  { key: "discipleship", href: "/discipleship" },
  { key: "sermons", href: "/sermons" },
  { key: "events", href: "/events" },
  { key: "berean", href: "/berean" },
  { key: "connect", href: "/connect" },
  { key: "blog", href: "/blog" },
  { key: "testimonies", href: "/testimonies" },
] as const;

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const t = useTranslations("Nav");
  const tCommon = useTranslations("Common");

  // Cmd+K (Mac) / Ctrl+K (Windows) shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-navy-deep/80 backdrop-blur-xl border-b border-gold/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 border border-gold/40 rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
              <span className="font-[family-name:var(--font-playfair)] text-gold font-bold text-lg">
                J
              </span>
            </div>
            <span className="hidden sm:block font-[family-name:var(--font-playfair)] text-warm-white text-lg font-semibold tracking-wide">
              JCIM
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_KEYS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-2 xl:px-4 py-2 text-xs xl:text-sm text-ivory/70 hover:text-warm-white transition-colors group whitespace-nowrap"
              >
                {t(link.key)}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA + Actions + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-ivory/60 hover:text-gold transition-colors"
              aria-label={tCommon("search")}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Locale switcher */}
            <LocaleSwitcher />

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Give CTA */}
            <Link
              href="/give"
              className="hidden md:inline-flex chamfer-clip bg-gold px-6 py-2.5 text-sm font-semibold text-dark-base hover:bg-gold-light transition-colors"
            >
              {t("give")}
            </Link>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-ivory/80 hover:text-gold transition-colors p-2"
              aria-label={tCommon("openMenu")}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
