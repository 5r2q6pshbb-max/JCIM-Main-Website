import type { YearlyCalendar, MonthlyCalendar, EventItem } from "@/types/content";

/* ------------------------------------------------------------------ */
/*  JCIM & The Berean Church — 2026 Comprehensive Annual Calendar     */
/*  "THE YEAR OF ESTABLISHMENT"                                       */
/* ------------------------------------------------------------------ */

// ── Weekly Recurring Programs (not in event list — shown separately) ──
export const WEEKLY_PROGRAMS = [
  {
    day: "Sunday",
    name: "The Berean Service",
    time: "9:00 AM",
    description: "Main worship gathering",
  },
  {
    day: "Sunday",
    name: "Foundation School",
    time: "12:30 PM",
    description: "24-week foundational teaching programme",
  },
  {
    day: "Sunday",
    name: "Discipleship Class",
    time: "2:00 PM",
    description: "9-week intensive discipleship cohort",
  },
  {
    day: "Wednesday",
    name: "AUXESIS (Midweek Service)",
    time: "6:30 PM",
    description: "Midweek power service — growth in the Word",
  },
  {
    day: "Friday",
    name: "Campus Prayer Meetings",
    time: "Varies",
    description: "University fellowship & prayer",
  },
  {
    day: "Weekly",
    name: "Cell Group Meetings",
    time: "Varies",
    description: "Small group discipleship gatherings",
  },
] as const;

// ── Recurring Fasting Schedule ──
export const FASTING_SCHEDULE = [
  {
    day: "Sunday",
    time: "6:00 AM – 12:00 PM",
    description: "Morning consecration fast",
  },
  {
    day: "Wednesday",
    time: "6:00 AM – 6:00 PM",
    description: "Full-day corporate fast",
  },
] as const;

// ── Discipleship Cohort Summary ──
export const DISCIPLESHIP_COHORTS = [
  { cohort: "A", start: "2026-02-08", end: "2026-04-05", day: "Sundays", time: "2:00 PM" },
  { cohort: "B", start: "2026-04-19", end: "2026-06-14", day: "Sundays", time: "2:00 PM" },
  { cohort: "C", start: "2026-07-12", end: "2026-09-06", day: "Sundays", time: "2:00 PM" },
  { cohort: "D", start: "2026-09-20", end: "2026-11-15", day: "Sundays", time: "2:00 PM" },
] as const;

// ── Foundation School Sessions ──
export const FOUNDATION_SCHOOL_SESSIONS = [
  { session: 1, start: "2026-01-11", end: "2026-06-21", day: "Sundays", time: "12:30 PM" },
  { session: 2, start: "2026-07-05", end: "2026-12-13", day: "Sundays", time: "12:30 PM" },
] as const;

// ══════════════════════════════════════════════════════════════════════
//  MONTHLY CALENDARS
// ══════════════════════════════════════════════════════════════════════

const JANUARY: MonthlyCalendar = {
  month: 1,
  name: "January",
  spiritSeason: "Month of Raising Giants",
  theme: "Foundations of Establishment",
  themeScripture:
    "For no one can lay a foundation other than that which is laid, which is Jesus Christ.",
  themeScriptureRef: "1 Corinthians 3:10-11",
  hebrewMonth: "Tevet – Shevat",
  events: [
    {
      id: "new-year-service-2026",
      title: "New Year's Day Service",
      date: "2026-01-01",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "Begin the Year of Establishment with a powerful prophetic declaration service. Come receive the word and the anointing for 2026.",
      category: "service",
    },
    {
      id: "all-white-sunday",
      title: "All White Sunday",
      date: "2026-01-04",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "A consecration service in all white — symbolising purity, new beginnings, and holiness unto the Lord.",
      category: "service",
    },
    {
      id: "21-days-fast-2026",
      title: "21 Days of Prayer & Fasting",
      date: "2026-01-05",
      endDate: "2026-01-25",
      time: "6:00 AM",
      location: "All Campuses",
      description:
        "Corporate fast to seek the face of God for the year. Consecrated prayer and fasting for divine direction and establishment.",
      category: "fast",
    },
    {
      id: "fire-4-fire-q1",
      title: "Fire 4 Fire All-Night — Q1",
      date: "2026-01-10",
      time: "10:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Quarterly all-night prayer meeting — an intense encounter with the fire of God through worship and intercession.",
      category: "prayer",
    },
    {
      id: "foundation-school-s1-start",
      title: "Foundation School — Session 1 Begins",
      date: "2026-01-11",
      time: "12:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "The 24-week Themelios Foundation School kicks off. Six transformative modules for new and growing believers.",
      category: "training",
    },
    {
      id: "encounter-jesus-ais",
      title: "ENCOUNTER JESUS @ AIS",
      date: "2026-01-25",
      time: "5:00 PM",
      location: "AIS Campus, Accra",
      description:
        "A power-packed encounter meeting at the AIS campus — miracles, deliverance, and prophetic ministry.",
      category: "service",
    },
    {
      id: "atwea-mountains",
      title: "ATWEA Mountains Apostolic Visitation",
      date: "2026-01-30",
      endDate: "2026-01-31",
      time: "6:00 AM",
      location: "Atwea Mountains, Ashanti Region",
      description:
        "A two-day apostolic prayer retreat to the mountains for divine encounter and strategic intercession.",
      category: "retreat",
    },
  ],
};

const FEBRUARY: MonthlyCalendar = {
  month: 2,
  name: "February",
  spiritSeason: "Month of Spreading Fire",
  theme: "The Fire That Establishes",
  themeScripture:
    "His word was in mine heart as a burning fire shut up in my bones.",
  themeScriptureRef: "Jeremiah 20:9",
  hebrewMonth: "Shevat – Adar",
  events: [
    {
      id: "adullam-conference",
      title: "ADULLAM CONFERENCE — Nigeria",
      date: "2026-02-05",
      endDate: "2026-02-07",
      time: "9:00 AM",
      location: "Nigeria",
      description:
        "International conference in Nigeria — raising Adullam warriors for the end-time move of God.",
      category: "conference",
    },
    {
      id: "discipleship-cohort-a-start",
      title: "Discipleship Cohort A Begins",
      date: "2026-02-08",
      time: "2:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "First 9-week intensive discipleship cohort of 2026. Sundays at 2 PM, ending April 5.",
      category: "training",
    },
    {
      id: "tu-bshevat",
      title: "Tu B'Shevat Celebration",
      date: "2026-02-13",
      time: "6:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "Hebrew New Year of Trees — a celebration of new growth, planting, and spiritual fruitfulness.",
      category: "feast",
    },
    {
      id: "kairos-invasion",
      title: "KAIROS INVASION @ AIS",
      date: "2026-02-14",
      endDate: "2026-02-15",
      time: "5:00 PM",
      location: "AIS Campus, Accra",
      description:
        "A strategic spiritual invasion on the AIS campus — worship, prayer, and prophetic declarations.",
      category: "outreach",
    },
    {
      id: "family-night-q1",
      title: "Family Night — Q1",
      date: "2026-02-27",
      time: "6:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Quarterly family fellowship night — food, games, worship, and community bonding.",
      category: "fellowship",
    },
    {
      id: "q1-retreat",
      title: "Q1 Retreat",
      date: "2026-02-27",
      endDate: "2026-02-28",
      time: "4:00 PM",
      location: "Retreat Centre, Kumasi",
      description:
        "Quarterly spiritual retreat for leaders and members — rest, reflection, and strategic planning.",
      category: "retreat",
    },
  ],
};

const MARCH: MonthlyCalendar = {
  month: 3,
  name: "March",
  spiritSeason: "Month of Sitting at the Table of Gods",
  theme: "Feasting at the King's Table",
  themeScripture:
    "Thou preparest a table before me in the presence of mine enemies.",
  themeScriptureRef: "Psalm 23:5",
  hebrewMonth: "Adar – Nisan",
  events: [
    {
      id: "mics-in-worship",
      title: "MICS IN WORSHIP @ Morgan International",
      date: "2026-03-14",
      time: "5:00 PM",
      location: "Morgan International, Accra",
      description:
        "A worship experience like no other — anointed voices, instruments, and a powerful atmosphere of praise.",
      category: "worship",
    },
    {
      id: "purim",
      title: "Purim Celebration",
      date: "2026-03-14",
      time: "6:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "Celebrating God's deliverance of His people — the story of Esther. A feast of joy and victory.",
      category: "feast",
    },
    {
      id: "legon-visitation",
      title: "Campus Visitation — University of Ghana, Legon",
      date: "2026-03-20",
      time: "3:00 PM",
      location: "University of Ghana, Legon",
      description:
        "Apostolic campus visitation to the University of Ghana — evangelism, prayer, and discipleship outreach.",
      category: "outreach",
    },
    {
      id: "ashesi-visitation",
      title: "Campus Visitation — Ashesi University",
      date: "2026-03-27",
      time: "3:00 PM",
      location: "Ashesi University, Berekuso",
      description:
        "Strategic outreach to Ashesi University — sharing the Gospel and inviting students into discipleship.",
      category: "outreach",
    },
  ],
};

const APRIL: MonthlyCalendar = {
  month: 4,
  name: "April",
  spiritSeason: "Month of Increased Strength",
  theme: "Resurrection Power for Establishment",
  themeScripture:
    "That I may know him, and the power of his resurrection.",
  themeScriptureRef: "Philippians 3:10",
  hebrewMonth: "Nisan – Iyar",
  events: [
    {
      id: "good-friday-2026",
      title: "Good Friday Service",
      date: "2026-04-03",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "A solemn service remembering the sacrifice of Christ on the cross — communion, reflection, and worship.",
      category: "service",
    },
    {
      id: "resurrection-sunday-2026",
      title: "RESURRECTION SUNDAY CELEBRATION",
      date: "2026-04-05",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "He is risen! Celebrate the resurrection of our Lord Jesus Christ with joy, worship, and proclamation.",
      category: "celebration",
    },
    {
      id: "discipleship-cohort-a-end",
      title: "Discipleship Cohort A Ends",
      date: "2026-04-05",
      time: "2:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Graduation of the first discipleship cohort of 2026 — nine weeks of intensive growth complete.",
      category: "training",
    },
    {
      id: "fire-4-fire-q2",
      title: "Fire 4 Fire All-Night — Q2",
      date: "2026-04-10",
      time: "10:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Second quarterly all-night prayer encounter — intense worship and intercession.",
      category: "prayer",
    },
    {
      id: "passover-week",
      title: "PASSOVER WEEK (Pesach)",
      date: "2026-04-13",
      endDate: "2026-04-20",
      time: "6:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "Seven days commemorating redemption through the Lamb — special evening services, communion, and teaching.",
      category: "feast",
    },
    {
      id: "first-fruits",
      title: "Feast of First Fruits",
      date: "2026-04-19",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "Celebrating Christ our First Fruits — offerings of thanksgiving and declarations of harvest.",
      category: "feast",
    },
    {
      id: "discipleship-cohort-b-start",
      title: "Discipleship Cohort B Begins",
      date: "2026-04-19",
      time: "2:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Second discipleship cohort of 2026 begins — Sundays at 2 PM through June 14.",
      category: "training",
    },
    {
      id: "ucc-visitation",
      title: "Campus Visitation — University of Cape Coast",
      date: "2026-04-24",
      time: "3:00 PM",
      location: "University of Cape Coast",
      description:
        "Apostolic visitation to UCC — evangelism, prayer, and campus discipleship.",
      category: "outreach",
    },
  ],
};

const MAY: MonthlyCalendar = {
  month: 5,
  name: "May",
  spiritSeason: "Month of Spending Gold",
  theme: "Kingdom Investments",
  themeScripture:
    "That the trial of your faith, being much more precious than of gold that perisheth.",
  themeScriptureRef: "1 Peter 1:7",
  hebrewMonth: "Iyar – Sivan",
  events: [
    {
      id: "mothers-day-2026",
      title: "Mother's Day Celebration",
      date: "2026-05-10",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "Honouring mothers — a special service celebrating the women who nurture the next generation of leaders.",
      category: "celebration",
    },
    {
      id: "pentecost-eve",
      title: "Pentecost Sunday Eve",
      date: "2026-05-31",
      time: "7:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "A powerful vigil in expectation of the Pentecostal outpouring — prayer, worship, and the fire of the Spirit.",
      category: "prayer",
    },
  ],
};

const JUNE: MonthlyCalendar = {
  month: 6,
  name: "June",
  spiritSeason: "Month of the Outpouring of the Anointing",
  theme: "Pentecostal Establishment",
  themeScripture:
    "And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh.",
  themeScriptureRef: "Acts 2:17",
  hebrewMonth: "Sivan – Tammuz",
  events: [
    {
      id: "shavuot-pentecost",
      title: "SHAVUOT / PENTECOST Celebration",
      date: "2026-06-01",
      endDate: "2026-06-03",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "Three-day celebration of the outpouring of the Holy Spirit — worship, fire, and fresh anointing.",
      category: "feast",
    },
    {
      id: "discipleship-cohort-b-end",
      title: "Discipleship Cohort B Ends",
      date: "2026-06-14",
      time: "2:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Graduation of the second discipleship cohort — celebrating growth and maturity.",
      category: "training",
    },
    {
      id: "fathers-day-2026",
      title: "Father's Day Celebration",
      date: "2026-06-21",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "Honouring fathers — a special service celebrating men of faith and legacy.",
      category: "celebration",
    },
    {
      id: "foundation-school-s1-end",
      title: "Foundation School — Session 1 Ends",
      date: "2026-06-21",
      time: "12:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "24 weeks of foundational teaching complete — graduation of Session 1 students.",
      category: "training",
    },
    {
      id: "family-night-q2",
      title: "Family Night — Q2",
      date: "2026-06-26",
      time: "6:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Quarterly family fellowship — food, worship, games, and community bonding.",
      category: "fellowship",
    },
    {
      id: "q2-retreat",
      title: "Q2 Retreat",
      date: "2026-06-26",
      endDate: "2026-06-27",
      time: "4:00 PM",
      location: "Retreat Centre, Kumasi",
      description:
        "Mid-year retreat for leaders and members — rest, renewal, and reflection.",
      category: "retreat",
    },
    {
      id: "mid-year-camp",
      title: "MID-YEAR CAMP",
      date: "2026-06-19",
      endDate: "2026-06-20",
      time: "9:00 AM",
      location: "Camp Grounds, Kumasi",
      description:
        "A camp gathering for the entire JCIM community — worship, teaching, activities, and spiritual refreshment.",
      category: "camp",
    },
  ],
};

const JULY: MonthlyCalendar = {
  month: 7,
  name: "July",
  spiritSeason: "Month of Shaking Tables & Taking Flights",
  theme: "Divine Disruption for Establishment",
  themeScripture:
    "For thus saith the LORD of hosts; Yet once, it is a little while, and I will shake the heavens, and the earth.",
  themeScriptureRef: "Haggai 2:6-7",
  hebrewMonth: "Tammuz – Av",
  events: [
    {
      id: "mid-year-thanksgiving",
      title: "Mid-Year Thanksgiving Service",
      date: "2026-07-01",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "A service of gratitude — celebrating what God has done in the first half of the year.",
      category: "service",
    },
    {
      id: "foundation-school-s2-start",
      title: "Foundation School — Session 2 Begins",
      date: "2026-07-05",
      time: "12:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "Second 24-week session of the Themelios Foundation School opens for new students.",
      category: "training",
    },
    {
      id: "fire-4-fire-q3",
      title: "Fire 4 Fire All-Night — Q3",
      date: "2026-07-10",
      time: "10:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Third quarterly all-night prayer — burning with the fire of God.",
      category: "prayer",
    },
    {
      id: "discipleship-cohort-c-start",
      title: "Discipleship Cohort C Begins",
      date: "2026-07-12",
      time: "2:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Third discipleship cohort of 2026 — Sundays at 2 PM through September 6.",
      category: "training",
    },
  ],
};

const AUGUST: MonthlyCalendar = {
  month: 8,
  name: "August",
  spiritSeason: "Month of Angels & Oracles",
  theme: "Supernatural Establishment",
  themeScripture:
    "Are they not all ministering spirits, sent forth to minister for them who shall be heirs of salvation?",
  themeScriptureRef: "Hebrews 1:14",
  hebrewMonth: "Av – Elul",
  events: [
    {
      id: "tisha-bav",
      title: "Tisha B'Av — Day of Reflection",
      date: "2026-08-03",
      time: "6:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "A solemn day of fasting, mourning, and reflection — remembering destruction, trusting in restoration.",
      category: "fast",
    },
    {
      id: "parousia-conference",
      title: "PAROUSIA CONFERENCE 2026",
      date: "2026-08-21",
      endDate: "2026-08-23",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "The premier annual conference of JCIM — three days of powerful teaching, prophetic ministry, worship, and impartation. Theme: The Year of Establishment.",
      category: "conference",
    },
  ],
};

const SEPTEMBER: MonthlyCalendar = {
  month: 9,
  name: "September",
  spiritSeason: "Month of Cosmic Encounters",
  theme: "Heavenly Alignment for Earthly Establishment",
  themeScripture:
    "That in the dispensation of the fulness of times he might gather together in one all things in Christ.",
  themeScriptureRef: "Ephesians 1:10",
  hebrewMonth: "Elul – Tishrei",
  events: [
    {
      id: "discipleship-cohort-c-end",
      title: "Discipleship Cohort C Ends",
      date: "2026-09-06",
      time: "2:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Third cohort graduates — nine weeks of intensive spiritual formation.",
      category: "training",
    },
    {
      id: "discipleship-cohort-d-start",
      title: "Discipleship Cohort D Begins",
      date: "2026-09-20",
      time: "2:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Final discipleship cohort of 2026 — Sundays at 2 PM through November 15.",
      category: "training",
    },
    {
      id: "rosh-hashanah",
      title: "ROSH HASHANAH — Feast of Trumpets",
      date: "2026-09-22",
      endDate: "2026-09-24",
      time: "6:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "The blast of the shofar — celebrating the Hebrew New Year, new beginnings, and divine appointments.",
      category: "feast",
    },
    {
      id: "family-night-q3",
      title: "Family Night — Q3",
      date: "2026-09-25",
      time: "6:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Quarterly family fellowship — food, games, worship, and community togetherness.",
      category: "fellowship",
    },
    {
      id: "q3-retreat",
      title: "Q3 Retreat",
      date: "2026-09-25",
      endDate: "2026-09-26",
      time: "4:00 PM",
      location: "Retreat Centre, Kumasi",
      description:
        "Third-quarter retreat — reflection, strategy, and spiritual refreshment.",
      category: "retreat",
    },
    {
      id: "missions-2026",
      title: "MISSIONS 2026",
      date: "2026-09-25",
      endDate: "2026-09-27",
      time: "9:00 AM",
      location: "Various Locations, Ghana",
      description:
        "Annual missions thrust — outreach, evangelism, and church planting in new territories.",
      category: "missions",
    },
  ],
};

const OCTOBER: MonthlyCalendar = {
  month: 10,
  name: "October",
  spiritSeason: "Month of Manifest Glory",
  theme: "The Glory That Establishes",
  themeScripture:
    "The glory of this latter house shall be greater than of the former.",
  themeScriptureRef: "Haggai 2:9",
  hebrewMonth: "Tishrei – Cheshvan",
  events: [
    {
      id: "yom-kippur",
      title: "YOM KIPPUR — 24-Hour Fast",
      date: "2026-10-01",
      endDate: "2026-10-02",
      time: "6:00 PM",
      location: "All Campuses",
      description:
        "Day of Atonement — 24-hour corporate fast with prayer, repentance, and seeking the face of God.",
      category: "fast",
    },
    {
      id: "sukkot",
      title: "SUKKOT — Feast of Tabernacles",
      date: "2026-10-06",
      endDate: "2026-10-13",
      time: "6:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "Seven-day feast of tabernacles — celebrating God's provision, presence, and dwelling among His people.",
      category: "feast",
    },
    {
      id: "fire-4-fire-q4",
      title: "Fire 4 Fire All-Night — Q4",
      date: "2026-10-10",
      time: "10:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Fourth quarterly all-night prayer — closing the year in fire.",
      category: "prayer",
    },
    {
      id: "shemini-atzeret",
      title: "Shemini Atzeret — Eighth Day Assembly",
      date: "2026-10-14",
      time: "6:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "The solemn assembly after Sukkot — intimate gathering, prayer, and thanksgiving.",
      category: "feast",
    },
    {
      id: "simchat-torah",
      title: "Simchat Torah — Rejoicing in the Word",
      date: "2026-10-15",
      time: "6:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "Celebrating the completion and restart of the Torah cycle — dancing, worship, and the joy of the Word.",
      category: "feast",
    },
    {
      id: "wassce-prayer-start",
      title: "WASSCE Prayer Season Begins",
      date: "2026-10-20",
      time: "6:00 AM",
      location: "All Campuses",
      description:
        "50 days of focused prayer for students preparing for WASSCE examinations — wisdom, favour, and excellence.",
      category: "prayer",
    },
  ],
};

const NOVEMBER: MonthlyCalendar = {
  month: 11,
  name: "November",
  spiritSeason: "Month of Taking Over",
  theme: "Possessing the Gates",
  themeScripture:
    "Thy seed shall possess the gate of his enemies.",
  themeScriptureRef: "Genesis 22:17",
  hebrewMonth: "Cheshvan – Kislev",
  events: [
    {
      id: "her-purpose-conference",
      title: "HER PURPOSE Conference",
      date: "2026-11-07",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "A women's conference — discovering purpose, walking in destiny, and rising as Proverbs 31 women.",
      category: "conference",
    },
    {
      id: "sons-of-oil",
      title: "SONS OF OIL",
      date: "2026-11-14",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "A men's conference — anointing, leadership, and raising sons who carry the oil of the Spirit.",
      category: "conference",
    },
    {
      id: "discipleship-cohort-d-end",
      title: "Discipleship Cohort D Ends",
      date: "2026-11-15",
      time: "2:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Final discipleship cohort of 2026 graduates — a full year of discipleship complete.",
      category: "training",
    },
    {
      id: "date-with-jesus",
      title: "DATE WITH JESUS",
      date: "2026-11-21",
      time: "6:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "An intimate worship encounter — a date night with the King of Kings. Worship, prayer, and communion.",
      category: "worship",
    },
    {
      id: "global-thanksgiving",
      title: "Global Thanksgiving Service",
      date: "2026-11-26",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "A global celebration of gratitude — thanking God for His faithfulness throughout the year.",
      category: "celebration",
    },
  ],
};

const DECEMBER: MonthlyCalendar = {
  month: 12,
  name: "December",
  spiritSeason: "Month of Completion",
  theme: "The Finishing Grace",
  themeScripture:
    "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.",
  themeScriptureRef: "Philippians 1:6",
  hebrewMonth: "Kislev – Tevet",
  events: [
    {
      id: "wassce-prayer-end",
      title: "WASSCE Prayer Season Ends",
      date: "2026-12-08",
      time: "6:00 AM",
      location: "All Campuses",
      description:
        "Closing of the 50-day WASSCE prayer season — thanksgiving and declarations of victory.",
      category: "prayer",
    },
    {
      id: "believers-camp",
      title: "THE BELIEVER'S CAMP",
      date: "2026-12-12",
      endDate: "2026-12-13",
      time: "9:00 AM",
      location: "Camp Grounds, Kumasi",
      description:
        "Year-end camp for all believers — teaching, worship, bonding, and spiritual preparation for the new year.",
      category: "camp",
    },
    {
      id: "foundation-school-s2-end",
      title: "Foundation School — Session 2 Ends",
      date: "2026-12-13",
      time: "12:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "Second session graduation — celebrating 24 weeks of foundational growth.",
      category: "training",
    },
    {
      id: "hanukkah",
      title: "HANUKKAH — Festival of Lights",
      date: "2026-12-14",
      endDate: "2026-12-22",
      time: "6:30 PM",
      location: "The Berean Church, KNUST",
      description:
        "Eight-day Festival of Dedication — celebrating God's miraculous provision and the light that cannot be extinguished.",
      category: "feast",
    },
    {
      id: "holiday-carol",
      title: "Holiday Carol & Celebration Service",
      date: "2026-12-20",
      time: "9:00 AM",
      location: "The Berean Church, KNUST",
      description:
        "Christmas carol and celebration service — worship, carols, drama, and the joy of Emmanuel.",
      category: "celebration",
    },
    {
      id: "family-night-q4",
      title: "Family Night — Q4",
      date: "2026-12-25",
      time: "6:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "Christmas Day family fellowship — celebrating the birth of Christ together.",
      category: "fellowship",
    },
    {
      id: "q4-retreat",
      title: "Q4 Retreat",
      date: "2026-12-25",
      endDate: "2026-12-26",
      time: "4:00 PM",
      location: "Retreat Centre, Kumasi",
      description:
        "Year-end retreat — reflection on the Year of Establishment and preparation for the new year.",
      category: "retreat",
    },
    {
      id: "crossover-night",
      title: "CROSSOVER NIGHT SERVICE",
      date: "2026-12-31",
      time: "10:00 PM",
      location: "The Berean Church, KNUST",
      description:
        "The grand finale of 2026 — crossing over into a new year with worship, prophecy, and celebration.",
      category: "service",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════
//  COMPLETE 2026 CALENDAR
// ══════════════════════════════════════════════════════════════════════

export const YEARLY_CALENDAR_2026: YearlyCalendar = {
  year: 2026,
  yearTheme: "The Year of Establishment",
  yearThemeScripture:
    "The LORD shall establish thee an holy people unto himself, as he hath sworn unto thee, if thou shalt keep the commandments of the LORD thy God, and walk in his ways.",
  yearThemeScriptureRef: "Deuteronomy 28:9",
  months: [
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER,
  ],
};

// ── Helper: Get all events as a flat array ──
export function getAllEvents(): EventItem[] {
  return YEARLY_CALENDAR_2026.months.flatMap((m) => m.events);
}

// ── Helper: Get upcoming events from today ──
export function getUpcomingEvents(limit?: number): EventItem[] {
  const today = new Date().toISOString().split("T")[0]!;
  const upcoming = getAllEvents()
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

// ── Helper: Get events for a specific month (1-12) ──
export function getEventsByMonth(month: number): EventItem[] {
  const m = YEARLY_CALENDAR_2026.months.find((m) => m.month === month);
  return m ? m.events : [];
}

// ── Helper: Get month metadata ──
export function getMonthInfo(month: number): MonthlyCalendar | undefined {
  return YEARLY_CALENDAR_2026.months.find((m) => m.month === month);
}

// ── Helper: Get events by category ──
export function getEventsByCategory(category: EventItem["category"]): EventItem[] {
  return getAllEvents().filter((e) => e.category === category);
}

// ── Event category labels for display ──
export const EVENT_CATEGORY_LABELS: Record<EventItem["category"], string> = {
  service: "Service",
  conference: "Conference",
  outreach: "Outreach",
  training: "Training",
  fellowship: "Fellowship",
  fast: "Fasting",
  feast: "Hebrew Feast",
  retreat: "Retreat",
  camp: "Camp",
  prayer: "Prayer",
  celebration: "Celebration",
  missions: "Missions",
  worship: "Worship",
};
