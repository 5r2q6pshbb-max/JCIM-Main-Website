"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeader } from "@/components/shared/section-header";
import { ChamferButton } from "@/components/shared/chamfer-button";

const testimonySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  category: z.enum([
    "salvation",
    "healing",
    "deliverance",
    "provision",
    "transformation",
    "family",
  ]),
  testimony: z.string().min(20, "Testimony must be at least 20 characters"),
});

type TestimonyFormData = z.infer<typeof testimonySchema>;

export function SubmitTestimony() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TestimonyFormData>({
    resolver: zodResolver(testimonySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category: "salvation",
      testimony: "",
    },
  });

  async function onSubmit(data: TestimonyFormData) {
    try {
      const res = await fetch("/api/testimony", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to submit testimony");
      }

      toast.success("Testimony submitted successfully! Thank you for sharing.");
      reset();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section className="section-padding bg-navy">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Share Your Story"
          title="Submit Your Testimony"
          subtitle="Has God done something remarkable in your life? Share your testimony to encourage others and glorify His name."
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="testimony-name"
              className="block text-sm text-ivory/60 mb-2 font-mono tracking-wider uppercase"
            >
              Full Name *
            </label>
            <input
              id="testimony-name"
              type="text"
              {...register("name")}
              className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-3 text-warm-white placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email & Phone */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="testimony-email"
                className="block text-sm text-ivory/60 mb-2 font-mono tracking-wider uppercase"
              >
                Email (optional)
              </label>
              <input
                id="testimony-email"
                type="email"
                {...register("email")}
                className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-3 text-warm-white placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="testimony-phone"
                className="block text-sm text-ivory/60 mb-2 font-mono tracking-wider uppercase"
              >
                Phone (optional)
              </label>
              <input
                id="testimony-phone"
                type="tel"
                {...register("phone")}
                className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-3 text-warm-white placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all"
                placeholder="+233 XX XXX XXXX"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="testimony-category"
              className="block text-sm text-ivory/60 mb-2 font-mono tracking-wider uppercase"
            >
              Category *
            </label>
            <select
              id="testimony-category"
              {...register("category")}
              className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-3 text-warm-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all"
            >
              <option value="salvation">Salvation</option>
              <option value="healing">Healing</option>
              <option value="deliverance">Deliverance</option>
              <option value="provision">Provision</option>
              <option value="transformation">Transformation</option>
              <option value="family">Family</option>
            </select>
          </div>

          {/* Testimony Text */}
          <div>
            <label
              htmlFor="testimony-text"
              className="block text-sm text-ivory/60 mb-2 font-mono tracking-wider uppercase"
            >
              Your Testimony *
            </label>
            <textarea
              id="testimony-text"
              rows={6}
              {...register("testimony")}
              className="w-full bg-navy-deep border border-gold/15 rounded-sm px-4 py-3 text-warm-white placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all resize-none"
              placeholder="Share what God has done in your life..."
            />
            {errors.testimony && (
              <p className="mt-1 text-xs text-red-400">{errors.testimony.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <ChamferButton
              type="submit"
              variant="gold"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Testimony"}
            </ChamferButton>
          </div>
        </form>
      </div>
    </section>
  );
}
