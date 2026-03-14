"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { FormField } from "@/components/shared/form-field";
import { ChamferButton } from "@/components/shared/chamfer-button";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  ministry: z.string().min(1, "Please select a ministry interest"),
  availability: z.string().optional(),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

const MINISTRY_OPTIONS = [
  "Worship & Music",
  "Media & Production",
  "Hospitality & Events",
  "Pastoral Care",
  "Prayer & Intercession",
  "Children & Youth",
  "Other",
];

export function VolunteerSignup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          type: "volunteer",
          ministryInterest: data.ministry,
          availability: data.availability,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Submission failed");
      }

      toast.success("Thank you for volunteering! A team leader will reach out to you soon.");
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="volunteer" className="section-padding bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="Serve"
            title="Volunteer With Us"
            subtitle="Use your gifts and talents to serve the body of Christ. There is a place for you in the ministry."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-2xl space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                label="Full Name"
                required
                registration={register("name")}
                placeholder="Your full name"
                error={errors.name?.message}
              />
              <FormField
                label="Email Address"
                required
                type="email"
                registration={register("email")}
                placeholder="you@example.com"
                error={errors.email?.message}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                label="Phone Number"
                type="tel"
                registration={register("phone")}
                placeholder="+233 XX XXX XXXX"
              />
              <FormField
                label="Ministry Interest"
                required
                type="select"
                registration={register("ministry")}
                placeholder="Select a ministry"
                error={errors.ministry?.message}
              >
                {MINISTRY_OPTIONS.map((option) => (
                  <option key={option} value={option} className="bg-navy-deep">
                    {option}
                  </option>
                ))}
              </FormField>
            </div>

            <FormField
              label="Availability & Notes"
              type="textarea"
              registration={register("availability")}
              placeholder="Share your availability, experience, or anything else..."
              rows={4}
            />

            <div className="flex justify-center pt-4">
              <ChamferButton onClick={handleSubmit(onSubmit)}>
                {isSubmitting ? "Submitting..." : "Sign Up to Volunteer"}
              </ChamferButton>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
