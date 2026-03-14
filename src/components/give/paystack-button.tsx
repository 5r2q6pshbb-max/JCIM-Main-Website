"use client";

import { useState, useCallback } from "react";

interface PaystackButtonProps {
  amount: number;
  email: string;
  currency: string;
  name?: string;
  onSuccess?: (reference: string) => void;
  onClose?: () => void;
  disabled?: boolean;
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

export function PaystackButton({
  amount,
  email,
  currency,
  name,
  onSuccess,
  onClose,
  disabled,
}: PaystackButtonProps) {
  const [loading, setLoading] = useState(false);

  const loadScript = useCallback((): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.PaystackPop) return resolve();
      // Prevent duplicate script tags
      const existing = document.querySelector('script[src="https://js.paystack.co/v2/inline.js"]');
      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        return;
      }
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v2/inline.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Paystack"));
      document.head.appendChild(script);
    });
  }, []);

  const handlePay = async () => {
    if (!email || !amount) return;
    setLoading(true);
    try {
      await loadScript();
      const handler = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email,
        amount: Math.round(amount * 100),
        currency,
        metadata: {
          custom_fields: [
            {
              display_name: "Donor Name",
              variable_name: "donor_name",
              value: name || "Anonymous",
            },
          ],
        },
        callback: (response: { reference: string }) => {
          onSuccess?.(response.reference);
        },
        onClose: () => {
          onClose?.();
        },
      });
      handler.openIframe();
    } catch (err) {
      console.error("Paystack error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePay}
      disabled={disabled || loading || !email || !amount}
      className="w-full chamfer-clip bg-gold hover:bg-gold/90 text-dark-base font-semibold py-4 text-sm tracking-widest uppercase font-mono transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading
        ? "Processing..."
        : `Give ${currency === "GHS" ? "GH\u20B5" : "$"}${amount || "0"} Now`}
    </button>
  );
}
