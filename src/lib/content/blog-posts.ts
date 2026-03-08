import type { BlogPost } from "@/types/content";

export const BLOG_CATEGORIES: string[] = [
  "All",
  "Discipleship",
  "Leadership",
  "Faith",
  "Community",
  "Missions",
  "Worship",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "the-themelios-revolution",
    title: "The Themelios Revolution: Redefining Discipleship",
    excerpt:
      "How JCIM's discipleship system is laying unshakeable foundations and building new paradigms of spiritual maturity.",
    content:
      "The word Themelios means 'to lay a foundation.' It speaks to the intentional work of building strong, biblical foundations in the life of every believer...",
    author: "Apostle Terry Paul Kwesi Yekple",
    date: "2026-03-01",
    category: "Discipleship",
    image: "/images/blog/the-themelios-revolution.jpg",
    tags: ["themelios", "foundation-school", "discipleship"],
  },
  {
    id: "blog-2",
    slug: "why-cells-not-programs",
    title: "Why Cells, Not Programs, Are the Future of the Church",
    excerpt:
      "The cell is not a program of the church — the cell IS the church in its most basic expression.",
    content:
      "Every megachurch that has sustained long-term growth has a cell multiplication engine at its core...",
    author: "JCIM Editorial",
    date: "2026-02-20",
    category: "Community",
    image: "/images/blog/why-cells-not-programs.jpg",
    tags: ["cells", "church-growth", "community"],
  },
  {
    id: "blog-3",
    slug: "raising-kingdom-leaders",
    title: "Raising Kingdom Leaders in a Broken World",
    excerpt:
      "Leadership is not about position — it is about influence, integrity, and the willingness to serve.",
    content:
      "In a world where leadership is often defined by power, Jesus redefined it through the towel and basin...",
    author: "Apostle Terry Paul Kwesi Yekple",
    date: "2026-02-10",
    category: "Leadership",
    image: "/images/blog/raising-kingdom-leaders.jpg",
    tags: ["leadership", "kingdom", "integrity"],
  },
  {
    id: "blog-4",
    slug: "the-berean-difference",
    title: "The Berean Difference: Why We Search the Scriptures",
    excerpt:
      "The Bereans were called 'more noble' because they examined the Word daily. That same spirit defines us.",
    content:
      "Acts 17:11 describes the Berean Jews as people of more noble character because they received the message with great eagerness...",
    author: "JCIM Editorial",
    date: "2026-01-28",
    category: "Faith",
    image: "/images/blog/the-berean-difference.jpg",
    tags: ["berean", "scripture", "bible-study"],
  },
  {
    id: "blog-5",
    slug: "from-campus-to-nations",
    title: "From Campus to Nations: The JCIM Story",
    excerpt:
      "What started as a campus fellowship in KNUST has become a global movement touching 18+ nations.",
    content:
      "In 2020, a divine vision was given to a young man on the campus of KNUST, Kumasi. That vision was not for a fellowship...",
    author: "JCIM Editorial",
    date: "2026-01-15",
    category: "Missions",
    image: "/images/blog/from-campus-to-nations.jpg",
    tags: ["testimony", "missions", "growth"],
  },
  {
    id: "blog-6",
    slug: "worship-as-warfare",
    title: "Worship as Warfare: The Power of the Atmosphere",
    excerpt:
      "True worship shifts atmospheres, breaks chains, and invites the manifest presence of God.",
    content:
      "When the worship goes up, the glory comes down. This is not a cliche — it is a spiritual principle...",
    author: "Apostle Terry Paul Kwesi Yekple",
    date: "2026-01-05",
    category: "Worship",
    image: "/images/blog/worship-as-warfare.jpg",
    tags: ["worship", "prayer", "spiritual-warfare"],
  },
];
