"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { FormField } from "@/components/shared/form-field";
import { ChamferButton } from "@/components/shared/chamfer-button";

const prayerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email").or(z.literal("")).optional(),
  prayerRequest: z.string().min(10, "Please share your prayer request (at least 10 characters)"),
});

type PrayerFormData = z.infer<typeof prayerSchema>;

export function PrayerRequest() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PrayerFormData>({
    resolver: zodResolver(prayerSchema),
  });

  const onSubmit = async (data: PrayerFormData) => {
    try {
      const res = await fetch("/api/prayer-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email || "",
          request: data.prayerRequest,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Submission failed");
      }

      toast.success("Your prayer request has been received. Our team is praying with you.");
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="prayer" className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(199,163,79,0.04)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Prayer"
            title="Submit a Prayer Request"
            subtitle="We believe in the power of prayer. Share your request and our intercessory team will stand with you in faith."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-2xl space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                label="Your Name"
                required
                registration={register("name")}
                placeholder="Your name"
                error={errors.name?.message}
              />
              <FormField
                label="Email (optional)"
                type="email"
                registration={register("email")}
                placeholder="you@example.com"
                error={errors.email?.message}
              />
            </div>

            <FormField
              label="Prayer Request"
              required
              type="textarea"
              registration={register("prayerRequest")}
              placeholder="Share your prayer request here. All requests are kept confidential."
              rows={6}
              error={errors.prayerRequest?.message}
            />

            <div className="flex justify-center pt-4">
              <ChamferButton onClick={handleSubmit(onSubmit)}>
                {isSubmitting ? "Submitting..." : "Submit Prayer Request"}
              </ChamferButton>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
