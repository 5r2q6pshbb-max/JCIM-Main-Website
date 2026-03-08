import type { Metadata } from "next";
import { EventsHero } from "@/components/events/events-hero";
import { UpcomingEvents } from "@/components/events/upcoming-events";
import { WeeklySchedule } from "@/components/events/weekly-schedule";
import { PastEventsGallery } from "@/components/events/past-events-gallery";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover upcoming events, weekly services, conferences, and outreach gatherings at Jesus CITY International Ministries.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <UpcomingEvents />
      <WeeklySchedule />
      <PastEventsGallery />
    </>
  );
}
