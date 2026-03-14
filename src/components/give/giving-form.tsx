"use client";

import { useState } from "react";
import { toast } from "sonner";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { PaystackButton } from "./paystack-button";
import { cn } from "@/lib/utils";

type Currency = "GHS" | "USD";

export function GivingForm() {
  const [currency, setCurrency] = useState<Currency>("GHS");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSuccess = (reference: string) => {
    toast.success("Thank you for your generous gift! God bless you.", {
      description: `Reference: ${reference}`,
    });
    setAmount("");
  };

  return (
    <section className="section-padding bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Give Now" title="Your Generosity Changes Lives" />
        <RevealOnScroll variant="fadeUp">
          <div className="max-w-xl mx-auto">
            <div className="border border-gold/15 bg-navy p-8 md:p-10 space-y-6">
              {/* Currency toggle */}
              <div className="flex items-center justify-center gap-2">
                {(["GHS", "USD"] as Currency[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrency(c)}
                    className={cn(
                      "px-4 py-2 text-xs font-mono tracking-wider border transition-all duration-300",
                      currency === c
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-gold/15 text-ivory/40 hover:text-ivory/60"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Amount */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60 font-mono text-lg">
                  {currency === "GHS" ? "GH\u20B5" : "$"}
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  min="1"
                  max="1000000"
                  step="0.01"
                  value={amount}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "" || (Number(val) >= 0 && Number(val) <= 1_000_000)) {
                      setAmount(val);
                    }
                  }}
                  className="w-full bg-navy-deep border border-gold/15 text-warm-white text-3xl md:text-4xl font-mono text-center py-5 pl-14 pr-4 placeholder:text-ivory/15 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>

              {/* Quick amounts */}
              <div className="grid grid-cols-4 gap-2">
                {(currency === "GHS"
                  ? [50, 100, 200, 500]
                  : [10, 25, 50, 100]
                ).map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAmount(String(a))}
                    className={cn(
                      "py-2 text-xs font-mono border transition-all duration-300",
                      Number(amount) === a
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-gold/15 text-ivory/40 hover:text-ivory/60"
                    )}
                  >
                    {currency === "GHS" ? "GH\u20B5" : "$"}
                    {a}
                  </button>
                ))}
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs text-ivory/40 tracking-wider uppercase font-mono mb-2">
                  Name (optional)
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-navy-deep border border-gold/15 text-warm-white text-sm py-3 px-4 placeholder:text-ivory/20 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-ivory/40 tracking-wider uppercase font-mono mb-2">
                  Email (for receipt)
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-navy-deep border border-gold/15 text-warm-white text-sm py-3 px-4 placeholder:text-ivory/20 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>

              {/* Paystack Button */}
              <PaystackButton
                amount={Number(amount) || 0}
                email={email}
                currency={currency}
                name={name}
                onSuccess={handleSuccess}
              />

              <p className="text-center text-xs text-ivory/40 leading-relaxed">
                Secured by Paystack. Supports cards, mobile money, and bank
                transfers.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
