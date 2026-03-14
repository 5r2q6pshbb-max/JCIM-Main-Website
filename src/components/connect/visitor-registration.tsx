"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeader } from "@/components/shared/section-header";
import { FormField } from "@/components/shared/form-field";
import { ChamferButton } from "@/components/shared/chamfer-button";

const visitorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  ageGroup: z.string().min(1, "Please select your age group"),
  howHeard: z.string().optional(),
  message: z.string().optional(),
});

type VisitorFormData = z.infer<typeof visitorSchema>;

const AGE_GROUPS = ["Under 18", "18-25", "26-35", "36-45", "46+"];
const HOW_HEARD_OPTIONS = [
  "Social Media",
  "Friend/Family",
  "Campus Outreach",
  "Walk-in",
  "Online",
];

export function VisitorRegistration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VisitorFormData>({
    resolver: zodResolver(visitorSchema),
  });

  const onSubmit = async (data: VisitorFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "visitor" }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Submission failed");
      }

      toast.success("Welcome! Your registration has been received. We look forward to seeing you!");
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(199,163,79,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            tag="First Time?"
            title="Register as a Visitor"
            subtitle="Let us know you're coming so we can prepare to welcome you."
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
                label="Age Group"
                required
                type="select"
                registration={register("ageGroup")}
                placeholder="Select age group"
                error={errors.ageGroup?.message}
              >
                {AGE_GROUPS.map((group) => (
                  <option key={group} value={group} className="bg-navy-deep">
                    {group}
                  </option>
                ))}
              </FormField>
            </div>

            <FormField
              label="How Did You Hear About Us?"
              type="select"
              registration={register("howHeard")}
              placeholder="Select an option"
            >
              {HOW_HEARD_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-navy-deep">
                  {option}
                </option>
              ))}
            </FormField>

            <FormField
              label="Anything You'd Like Us to Know?"
              type="textarea"
              registration={register("message")}
              placeholder="Share anything on your heart..."
              rows={4}
            />

            <div className="flex justify-center pt-4">
              <ChamferButton onClick={handleSubmit(onSubmit)}>
                {isSubmitting ? "Submitting..." : "Register"}
              </ChamferButton>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
