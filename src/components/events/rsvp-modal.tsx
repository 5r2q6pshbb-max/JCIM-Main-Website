"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { X } from "lucide-react";
import { ChamferButton } from "@/components/shared/chamfer-button";

const rsvpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().or(z.literal("")),
  numberOfGuests: z.string().min(1, "Select number of guests"),
});

type RsvpFormData = z.infer<typeof rsvpSchema>;

interface RsvpModalProps {
  eventTitle: string;
  eventDate: string;
  eventId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function RsvpModal({
  eventTitle,
  eventDate,
  eventId,
  isOpen,
  onClose,
}: RsvpModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      numberOfGuests: "1",
    },
  });

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

  async function onSubmit(data: RsvpFormData) {
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          numberOfGuests: parseInt(data.numberOfGuests, 10),
          eventId: eventId || eventTitle.toLowerCase().replace(/\s+/g, "-"),
          eventTitle,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to RSVP");
      }

      toast.success(`RSVP confirmed for ${eventTitle}!`);
      reset();
      onClose();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg bg-navy border border-gold/20 rounded-sm shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/10">
          <div>
            <h3 id="rsvp-modal-title" className="font-[family-name:var(--font-playfair)] text-xl text-warm-white font-semibold">
              RSVP
            </h3>
            <p className="text-xs text-ivory/40 font-mono tracking-wider uppercase mt-1">
              {eventTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-ivory/50 hover:text-gold transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Event info */}
        <div className="px-6 py-3 bg-gold/5 border-b border-gold/10">
          <p className="text-sm text-ivory/60">
            <span className="text-gold font-mono text-xs tracking-wider uppercase">
              Date:
            </span>{" "}
            {eventDate}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 space-y-5">
          <div>
            <label
              htmlFor="rsvp-name"
              className="block text-sm text-ivory/60 mb-1.5 font-mono tracking-wider uppercase"
            >
              Full Name *
            </label>
            <input
              id="rsvp-name"
              type="text"
              {...register("name")}
              className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-2.5 text-warm-white placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all text-sm"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="rsvp-email"
              className="block text-sm text-ivory/60 mb-1.5 font-mono tracking-wider uppercase"
            >
              Email *
            </label>
            <input
              id="rsvp-email"
              type="email"
              {...register("email")}
              className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-2.5 text-warm-white placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all text-sm"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="rsvp-phone"
                className="block text-sm text-ivory/60 mb-1.5 font-mono tracking-wider uppercase"
              >
                Phone (optional)
              </label>
              <input
                id="rsvp-phone"
                type="tel"
                {...register("phone")}
                className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-2.5 text-warm-white placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all text-sm"
                placeholder="+233 XX XXX XXXX"
              />
            </div>

            <div>
              <label
                htmlFor="rsvp-guests"
                className="block text-sm text-ivory/60 mb-1.5 font-mono tracking-wider uppercase"
              >
                Number of Guests *
              </label>
              <select
                id="rsvp-guests"
                {...register("numberOfGuests")}
                className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-2.5 text-warm-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all text-sm"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2">
            <ChamferButton
              type="submit"
              variant="gold"
              size="md"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Submitting..." : "Confirm RSVP"}
            </ChamferButton>
          </div>
        </form>
      </div>
    </div>
  );
}
