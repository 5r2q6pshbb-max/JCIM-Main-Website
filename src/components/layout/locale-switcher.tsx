"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const locales = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "tw", label: "TW", name: "Twi" },
] as const;

export function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleChange(locale: string) {
    // Set cookie and refresh
    document.cookie = `locale=${locale};path=/;max-age=${60 * 60 * 24 * 365}`;
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div className="relative group">
      <button
        className={cn(
          "flex items-center gap-1 p-2 text-ivory/60 hover:text-gold transition-colors",
          isPending && "opacity-50"
        )}
        aria-label="Change language"
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      <div
        role="menu"
        aria-label="Language selection"
        className="absolute right-0 top-full mt-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50"
      >
        <div className="bg-navy-deep/95 backdrop-blur-xl border border-gold/15 py-1 min-w-[120px]">
          {locales.map((locale) => (
            <button
              key={locale.code}
              role="menuitem"
              onClick={() => handleChange(locale.code)}
              className="w-full text-left px-4 py-2 text-sm text-ivory/70 hover:text-gold hover:bg-gold/5 transition-colors flex items-center gap-3"
            >
              <span className="text-[10px] font-mono tracking-wider text-gold/50">
                {locale.label}
              </span>
              <span>{locale.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
