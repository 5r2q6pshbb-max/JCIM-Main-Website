import type { GivingType, StatItem } from "@/types/content";

export const GIVING_TYPES: GivingType[] = [
  {
    id: "tithes",
    name: "Tithes",
    description:
      "Honor the Lord with your substance — 10% of your increase given as an act of worship and obedience.",
    scripture:
      "Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings.",
    scriptureRef: "Malachi 3:8",
    icon: "Percent",
  },
  {
    id: "offerings",
    name: "Offerings",
    description:
      "Freewill contributions given above the tithe for the advancement of God's kingdom and ministry operations.",
    scripture:
      "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.",
    scriptureRef: "2 Corinthians 9:7",
    icon: "Gift",
  },
  {
    id: "missions",
    name: "Missions Offering",
    description:
      "Support the global outreach of JCIM — reaching unreached people groups with the Gospel of Jesus Christ.",
    scripture:
      "Go ye into all the world, and preach the gospel to every creature.",
    scriptureRef: "Mark 16:15",
    icon: "Globe",
  },
  {
    id: "first-fruits",
    name: "First Fruits",
    description:
      "Annual offerings given as thanksgiving for God's provision — the first of your increase dedicated to the Lord.",
    scripture:
      "Honour the LORD with thy substance, and with the firstfruits of all thine increase.",
    scriptureRef: "Proverbs 3:9",
    icon: "Sprout",
  },
  {
    id: "building-fund",
    name: "Building Fund",
    description:
      "Invest in permanent structures for worship, discipleship, and community impact that will outlast generations.",
    scripture:
      "Except the LORD build the house, they labour in vain that build it.",
    scriptureRef: "Psalm 127:1",
    icon: "Building",
  },
  {
    id: "benevolence",
    name: "Benevolence & Welfare",
    description:
      "Care for widows, orphans, and those in need — demonstrating Christ's love through practical generosity.",
    scripture:
      "Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction.",
    scriptureRef: "James 1:27",
    icon: "HandHeart",
  },
];

export const GIVING_IMPACT_STATS: StatItem[] = [
  { value: 18, suffix: "+", label: "Nations Reached" },
  { value: 500, suffix: "+", label: "Lives Transformed" },
  { value: 6, suffix: "", label: "Books Published" },
  { value: 100, suffix: "%", label: "Transparency" },
];
