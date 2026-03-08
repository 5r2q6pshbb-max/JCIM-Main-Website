import type { LeaderProfile, TimelineMilestone } from "@/types/content";

// ── Founder ──────────────────────────────────────────────────────────────────

export const FOUNDER: LeaderProfile = {
  id: "founder",
  name: "Apostle Terry Paul Kwesi Yekple",
  title: "Presiding Apostle & Founder",
  role: "Presiding Apostle",
  image: "/images/team/founder.jpg",
  bio: "Apostle Terry Paul Kwesi Yekple is the founder and Presiding Apostle of Jesus City International Ministries (JCIM). Through a divine vision and encounter with Jesus Christ in 2020, he received the burden to build a CITY for God \u2014 to transform hearts, establish Kingdom culture, and raise tomorrow\u2019s leaders today. His apostolic mandate encompasses church planting, discipleship systems, and raising a generation of radical believers who will influence every sphere of society. Under his leadership, JCIM has expanded from a campus fellowship to a global ministry impacting 18+ nations, with The Berean Church established as its flagship church expression in 2026.",
};

// ── Leadership Team ──────────────────────────────────────────────────────────

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    id: "general-secretary",
    name: "Mary-Ann Abena Owusu",
    title: "General Secretary",
    role: "General Secretary",
    image: "/images/team/secretary.jpg",
    bio: "Serving faithfully in administrative leadership and organizational oversight of JCIM\u2019s operations.",
  },
  {
    id: "council-chairman",
    name: "Dr. Godwin Seyram Kasu",
    title: "Chairman, Council of Elders",
    role: "Council Chairman",
    image: "/images/team/chairman.jpg",
    bio: "Providing spiritual covering and wisdom through the Council of Elders.",
  },
];

// ── Timeline Milestones ──────────────────────────────────────────────────────

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2020",
    title: "Divine Vision & Birth",
    description:
      "Jesus C.I.T.Y (Christ in The Youth) was born through a divine vision given to Apostle Terry Paul Kwesi Yekple on the campus of KNUST, Kumasi.",
  },
  {
    year: "2021",
    title: "Campus Fellowship Grows",
    description:
      "The ministry grew from a small Bible study into a vibrant campus fellowship, reaching students across KNUST with the Gospel.",
  },
  {
    year: "2022",
    title: "Constitution & Structure",
    description:
      "JCIM formally adopted its Constitution and Ministry Handbook, establishing governance, the Themelios Discipleship System, and departmental architecture.",
  },
  {
    year: "2023",
    title: "Digital Expansion",
    description:
      "The ministry expanded its digital footprint, launching online services and reaching believers across 18+ nations through virtual platforms.",
  },
  {
    year: "2024",
    title: "Foundation School Launch",
    description:
      "The Themelios discipleship system was fully implemented with the Foundation School manual, training converts into world changers.",
  },
  {
    year: "2025",
    title: "Global Ministry Consolidation",
    description:
      "JCIM consolidated its global operations, strengthened leadership pipelines, and prepared for the launch of its flagship church.",
  },
  {
    year: "2026",
    title: "Year of Establishment",
    description:
      "The Berean Church launched as JCIM\u2019s flagship church expression in Accra, Ghana, with an aggressive target of 500+ members by December.",
  },
];
