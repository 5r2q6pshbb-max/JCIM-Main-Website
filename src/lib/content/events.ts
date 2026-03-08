import type { EventItem } from "@/types/content";
import { getUpcomingEvents } from "./yearly-calendar";

/**
 * Dynamic upcoming events — pulled from the 2026 Yearly Calendar.
 * Falls back to the first 6 upcoming events from today's date.
 */
export const UPCOMING_EVENTS: EventItem[] = getUpcomingEvents(6);
