"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Search, BookOpen, Mic, CalendarDays } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { searchSite, type SearchResult } from "@/lib/search-index";
import { cn } from "@/lib/utils";

const TYPE_ICONS = {
  blog: BookOpen,
  sermon: Mic,
  event: CalendarDays,
} as const;

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Search");

  const TYPE_LABELS = {
    blog: t("category_blog"),
    sermon: t("category_sermons"),
    event: t("category_events"),
  } as const;

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    if (value.trim().length >= 2) {
      const searchResults = searchSite(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, []);

  // Group results by type
  const grouped = results.reduce<Record<string, SearchResult[]>>((acc, r) => {
    if (!acc[r.type]) acc[r.type] = [];
    acc[r.type]!.push(r);
    return acc;
  }, {});

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl bg-navy border border-gold/20 rounded-sm shadow-2xl max-h-[70vh] flex flex-col">
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gold/10">
          <Search className="w-5 h-5 text-gold/50 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={t("placeholder")}
            className="flex-1 bg-transparent text-warm-white placeholder-ivory/30 text-base focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] text-ivory/30 border border-gold/10 rounded font-mono">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="text-ivory/40 hover:text-gold transition-colors"
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="overflow-y-auto flex-1 py-2">
          {query.trim().length >= 2 && results.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-ivory/40 text-sm">
                {t("noResults", { query })}
              </p>
              <p className="text-ivory/25 text-xs mt-1">
                {t("tryDifferent")}
              </p>
            </div>
          )}

          {query.trim().length < 2 && (
            <div className="py-12 text-center">
              <p className="text-ivory/30 text-sm">
                {t("placeholder")}
              </p>
            </div>
          )}

          {Object.entries(grouped).map(([type, items]) => {
            const Icon = TYPE_ICONS[type as keyof typeof TYPE_ICONS];
            const label = TYPE_LABELS[type as keyof typeof TYPE_LABELS];
            return (
              <div key={type} className="mb-2">
                <div className="px-5 py-2 flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-gold/50" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/50 font-mono">
                    {label}
                  </span>
                </div>
                {items.map((result, i) => (
                  <Link
                    key={`${result.type}-${i}`}
                    href={result.href}
                    onClick={onClose}
                    className={cn(
                      "block px-5 py-3 mx-2 rounded-sm hover:bg-gold/5 transition-colors group"
                    )}
                  >
                    <p className="text-sm text-warm-white group-hover:text-gold transition-colors font-medium">
                      {result.title}
                    </p>
                    <p className="text-xs text-ivory/40 mt-0.5 line-clamp-1">
                      {result.description}
                    </p>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>

        {/* Footer hint */}
        {results.length > 0 && (
          <div className="px-5 py-2.5 border-t border-gold/10 flex items-center justify-between">
            <p className="text-[10px] text-ivory/25 font-mono">
              {t("results", { count: results.length })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
