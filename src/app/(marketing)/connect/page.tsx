import type { Metadata } from "next";
import { ConnectHero } from "@/components/connect/connect-hero";
import { VisitorRegistration } from "@/components/connect/visitor-registration";
import { PrayerRequest } from "@/components/connect/prayer-request";
import { VolunteerSignup } from "@/components/connect/volunteer-signup";
import { ContactInfo } from "@/components/connect/contact-info";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with JCIM — register as a visitor, submit prayer requests, volunteer to serve, or contact our team directly.",
};

export default function ConnectPage() {
  return (
    <>
      <ConnectHero />
      <VisitorRegistration />
      <PrayerRequest />
      <VolunteerSignup />
      <ContactInfo />
    </>
  );
}
