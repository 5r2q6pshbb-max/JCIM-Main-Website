"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  number?: number;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
  number,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "border border-gold/10 transition-colors duration-300",
        isOpen && "border-gold/25 bg-navy/50",
        className
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 px-5 py-4 text-left group"
      >
        {number !== undefined && (
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gold/30 text-gold text-xs font-mono">
            {String(number).padStart(2, "0")}
          </span>
        )}
        <span className="flex-1 font-[family-name:var(--font-playfair)] text-warm-white text-base md:text-lg group-hover:text-gold transition-colors">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gold/50 transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-ivory/50 text-sm md:text-base leading-relaxed">
              {number !== undefined && (
                <div className="w-8 mr-4 inline-block" />
              )}
              <div className={number !== undefined ? "ml-12" : ""}>
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
