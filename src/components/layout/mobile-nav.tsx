"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X } from "lucide-react";

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

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const t = useTranslations("Nav");
  const tCommon = useTranslations("Common");

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:w-[380px] bg-navy-deep border-l border-gold/10 p-0"
      >
        <SheetHeader className="px-6 py-4 border-b border-gold/10">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-[family-name:var(--font-playfair)] text-warm-white text-xl">
              JCIM
            </SheetTitle>
            <button
              onClick={onClose}
              className="text-ivory/60 hover:text-gold transition-colors"
              aria-label={tCommon("closeMenu")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </SheetHeader>

        <nav className="flex flex-col px-6 py-3 overflow-y-auto flex-1">
          {NAV_KEYS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-center gap-4 py-2.5 border-b border-gold/5 last:border-0"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-gold/30 text-xs font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ivory/80 text-lg font-[family-name:var(--font-cormorant)] group-hover:text-gold transition-colors">
                {t(link.key)}
              </span>
            </Link>
          ))}

          <a
            href="https://themelios.app/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-4 chamfer-clip bg-gold text-dark-base text-center py-2.5 font-semibold hover:bg-gold-light transition-colors"
          >
            {t("signIn")}
          </a>

          <p className="mt-4 pb-2 text-[10px] tracking-[0.2em] text-gold/30 uppercase text-center">
            {tCommon("raisingLeaders")}
          </p>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
