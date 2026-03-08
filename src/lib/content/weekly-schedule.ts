import type { WeeklyScheduleDay, ServiceTime } from "@/types/content";

export const WEEKLY_SCHEDULE: WeeklyScheduleDay[] = [
  {
    day: "Sunday",
    theme: "Harvest Day",
    activities: [
      {
        time: "6:00 AM",
        activity: "Leadership Prayer",
        description: "Pre-service prayer with all leaders and workers",
      },
      {
        time: "8:00 AM",
        activity: "Sunday Celebration Service",
        description:
          "Main worship service with Word, worship, and ministry",
      },
      {
        time: "2:00 PM",
        activity: "Afternoon Review",
        description:
          "Service review and next-week planning with leadership",
      },
    ],
  },
  {
    day: "Monday",
    theme: "Review & Recovery",
    activities: [
      {
        time: "Morning",
        activity: "Pastoral Review",
        description:
          "Sunday metrics review, follow-up assignments, attendance analysis",
      },
      {
        time: "Afternoon",
        activity: "Media Processing",
        description:
          "Sermon content repurposing into clips, quotes, and social media posts",
      },
    ],
  },
  {
    day: "Tuesday",
    theme: "Follow-Up Day",
    activities: [
      {
        time: "Morning",
        activity: "First-Timer Follow-Up",
        description:
          "48-hour follow-up calls to all Sunday first-timers",
      },
      {
        time: "Evening",
        activity: "Absentee Follow-Up",
        description:
          "Reaching out to members who missed Sunday service",
      },
    ],
  },
  {
    day: "Wednesday",
    theme: "Midweek Service",
    activities: [
      {
        time: "6:00 PM",
        activity: "Bible Study & Prayer",
        description:
          "Midweek service for deeper teaching and corporate prayer",
      },
    ],
  },
  {
    day: "Thursday",
    theme: "Leadership Development",
    activities: [
      {
        time: "Morning",
        activity: "Cell Study Guide Distribution",
        description:
          "Weekly cell study material sent to all cell leaders",
      },
      {
        time: "6:00 PM",
        activity: "Leaders' Training",
        description:
          "Department heads and cell leaders development session",
      },
    ],
  },
  {
    day: "Friday",
    theme: "Prayer & Preparation",
    activities: [
      {
        time: "6:00 PM",
        activity: "Corporate Prayer Meeting",
        description:
          "Church-wide prayer meeting for intercession and spiritual warfare",
      },
      {
        time: "10:00 PM",
        activity: "All-Night Prayer (Last Friday)",
        description:
          "Monthly all-night prayer vigil from 10 PM to 5 AM",
      },
    ],
  },
  {
    day: "Saturday",
    theme: "Outreach & Cells",
    activities: [
      {
        time: "Morning",
        activity: "Community Outreach",
        description:
          "Evangelism, campus outreach, and community service",
      },
      {
        time: "4:00 PM",
        activity: "Cell Group Meetings",
        description:
          "Weekly cell meetings in homes, campuses, and online",
      },
      {
        time: "Evening",
        activity: "Setup & Rehearsal",
        description:
          "Sunday service preparation, sound check, and worship rehearsal",
      },
    ],
  },
];

export const SERVICE_TIMES: ServiceTime[] = [
  {
    name: "Sunday Celebration",
    day: "Sunday",
    time: "8:00 AM",
    description: "Main worship service with praise, Word, and ministry",
  },
  {
    name: "Midweek Service",
    day: "Wednesday",
    time: "6:00 PM",
    description: "Bible study, teaching, and corporate prayer",
  },
  {
    name: "Prayer Meeting",
    day: "Friday",
    time: "6:00 PM",
    description: "Church-wide prayer and intercession",
  },
  {
    name: "Cell Groups",
    day: "Saturday",
    time: "4:00 PM",
    description: "Weekly cell meetings in homes and online",
  },
];
