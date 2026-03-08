export const SITE_CONFIG = {
  name: "Jesus CITY International Ministries",
  shortName: "JCIM",
  tagline: "Raising Tomorrow's Leaders Today",
  slogan: "Transforming Lives, Experiencing Jesus!",
  url: "https://jesuscityint.org",
  description:
    "Jesus CITY International Ministries (JCIM) — a global apostolic ministry raising tomorrow's leaders through the Word, discipleship, and community.",
  founder: "Apostle Terry Paul Kwesi Yekple",
  foundedYear: 2020,
  email: "info@jesuscityint.org",
  phone: "+233 XX XXX XXXX",
  address: "KNUST, Kumasi, Ghana",
  socials: {
    youtube: "https://youtube.com/@jesuscityint",
    instagram: "https://instagram.com/jesuscityint",
    facebook: "https://facebook.com/jesuscityint",
    twitter: "https://twitter.com/jesuscityint",
    tiktok: "https://tiktok.com/@jesuscityint",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Discipleship", href: "/discipleship" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "The Berean Church", href: "/berean" },
  { label: "Connect", href: "/connect" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonies", href: "/testimonies" },
] as const;

export const QUICK_LINKS = [
  { label: "Foundation School", href: "/discipleship" },
  { label: "Cell Groups", href: "/connect" },
  { label: "Prayer Request", href: "/connect#prayer" },
  { label: "Sermons", href: "/sermons" },
  { label: "Give", href: "/give" },
  { label: "Volunteer", href: "/connect#volunteer" },
] as const;

export const CAMPUSES = [
  {
    name: "The Berean Church",
    location: "KNUST, Kumasi, Ghana",
    launched: "March 2026",
  },
  {
    name: "Jesus CITY Online",
    location: "Global — 18+ Nations",
    launched: "2020",
  },
] as const;

export const SCRIPTURE_FOOTER =
  "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. — Matthew 28:19";
