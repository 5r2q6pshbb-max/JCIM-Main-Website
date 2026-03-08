import type { BeliefItem, CoreValue } from "@/types/content";

// ---------------------------------------------------------------------------
// JCIM Vision, Mission, Motto & Slogan
// ---------------------------------------------------------------------------

export const VISION_STATEMENT =
  "To raise a generation of radical believers who will influence every sphere of society by embodying the teachings of Jesus Christ and demonstrating excellence in spiritual and societal leadership.";

export const MISSION_STATEMENT =
  "To raise, equip, and deploy individuals who embody Christ's teachings to bring about societal transformation, spiritual revival, and the establishment of God's kingdom in every sector of life.";

export const MOTTO = "Raising Tomorrow's Leaders Today";

export const SLOGAN = "Transforming Lives, Experiencing Jesus!";

// ---------------------------------------------------------------------------
// Statement of Faith — 10 Articles from the JCIM Constitution
// ---------------------------------------------------------------------------

export const STATEMENT_OF_FAITH: BeliefItem[] = [
  {
    id: "belief-trinity",
    article: 1,
    title: "The Trinity",
    description:
      "We believe in one God who exists in three distinct Persons: the Father, the Son, and the Holy Spirit.",
    scriptures: ["Matthew 28:19", "2 Corinthians 13:14"],
  },
  {
    id: "belief-salvation",
    article: 2,
    title: "Salvation",
    description:
      "We believe that salvation is by grace through faith in Jesus Christ alone.",
    scriptures: ["Ephesians 2:8-9", "John 14:6"],
  },
  {
    id: "belief-bible",
    article: 3,
    title: "The Bible",
    description:
      "We believe in the divine inspiration, inerrancy, and infallibility of the Holy Scriptures.",
    scriptures: ["2 Timothy 3:16-17", "2 Peter 1:20-21"],
  },
  {
    id: "belief-holy-spirit",
    article: 4,
    title: "The Holy Spirit",
    description:
      "We believe in the active presence and work of the Holy Spirit in the lives of believers today.",
    scriptures: ["John 14:26", "Acts 1:8", "1 Corinthians 12:4"],
  },
  {
    id: "belief-church",
    article: 5,
    title: "The Church",
    description:
      "We believe that the Church is the body of Christ, made up of all believers who have been redeemed by His blood.",
    scriptures: ["Ephesians 1:22-23", "Matthew 28:19-20"],
  },
  {
    id: "belief-baptism",
    article: 6,
    title: "Baptism",
    description:
      "We believe in water baptism by immersion as an outward sign of an inward work of grace.",
    scriptures: ["Matthew 28:19", "Acts 2:38"],
  },
  {
    id: "belief-lords-supper",
    article: 7,
    title: "The Lord's Supper",
    description:
      "We believe in the regular observance of the Lord's Supper in remembrance of Christ's death.",
    scriptures: ["1 Corinthians 11:23-24", "Luke 22:19"],
  },
  {
    id: "belief-sanctification",
    article: 8,
    title: "Sanctification",
    description:
      "We believe that sanctification is the process of being set apart for God's purposes.",
    scriptures: ["1 Thessalonians 5:23", "Hebrews 10:10"],
  },
  {
    id: "belief-second-coming",
    article: 9,
    title: "The Second Coming",
    description:
      "We believe in the literal, visible return of Jesus Christ to earth to reign in power and glory.",
    scriptures: ["Acts 1:11", "Revelation 19:11"],
  },
  {
    id: "belief-resurrection",
    article: 10,
    title: "Resurrection & Eternal Life",
    description:
      "We believe in the bodily resurrection of both the saved and the unsaved.",
    scriptures: ["John 5:28-29", "1 Corinthians 15:20"],
  },
];

// ---------------------------------------------------------------------------
// Core Values — 5 Values from the JCIM Constitution
// ---------------------------------------------------------------------------

export const CORE_VALUES: CoreValue[] = [
  {
    id: "value-faithfulness",
    name: "Faithfulness",
    description: "Committed to the unshakable truth of God's word",
    icon: "Anchor",
  },
  {
    id: "value-integrity",
    name: "Integrity",
    description:
      "Living out Christ's character with transparency and honesty",
    icon: "Shield",
  },
  {
    id: "value-excellence",
    name: "Excellence",
    description: "Pursuing the highest standards in all areas of life",
    icon: "Star",
  },
  {
    id: "value-compassion",
    name: "Compassion",
    description: "Serving others with love, empathy, and selflessness",
    icon: "Heart",
  },
  {
    id: "value-unity",
    name: "Unity",
    description:
      "Fostering a spirit of collaboration, respect, and mutual edification",
    icon: "Link",
  },
];
