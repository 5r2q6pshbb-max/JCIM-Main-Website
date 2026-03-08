import type {
  ThemeliosStage,
  FoundationModule,
  CellSystemInfo,
} from "@/types/content";

// ---------------------------------------------------------------------------
// Themelios Discipleship System -- Six Stages of Discipleship Maturity
// ---------------------------------------------------------------------------

export const THEMELIOS_STAGES: ThemeliosStage[] = [
  {
    id: "archaios",
    level: 1,
    name: "Archaios",
    greekName: "Archaios",
    subtitle: "Word Activists / Reformers",
    tier: "foundation",
    duration: "6 months minimum",
    description:
      "Archaios is the entry point of the Themelios system, designed for new believers and those laying a fresh spiritual foundation. This stage grounds participants in salvation, prayer, scripture, and the basic disciplines every Christian must master before progressing further.",
    curriculum: [
      "New Believer Basics",
      "Prayer Foundations",
      "Bible Survey",
      "Church History 101",
      "Spiritual Disciplines",
      "Basic Doctrine",
    ],
    practicalRequirements: [
      "10 soul-winning conversations",
      "20 hours community service",
      "Join a cell group",
      "Weekly church attendance",
    ],
    icon: "BookOpen",
  },
  {
    id: "gnosis",
    level: 2,
    name: "Gnosis",
    greekName: "Gnosis",
    subtitle: "Word Analysts",
    tier: "foundation",
    duration: "9 months minimum",
    description:
      "Gnosis takes believers deeper into theological understanding, equipping them to rightly divide the Word and lead others. Participants develop analytical study skills, evangelism strategies, and the ability to facilitate group learning within the cell structure.",
    curriculum: [
      "Systematic Theology",
      "Biblical Interpretation (Hermeneutics)",
      "Advanced Spiritual Disciplines",
      "Leadership Basics",
      "Evangelism Strategies",
      "Cell Group Dynamics",
    ],
    practicalRequirements: [
      "Lead 5 Bible studies",
      "Disciple 1 Archaios student",
      "Complete evangelism practicum",
      "Ministry outreach",
    ],
    icon: "Search",
  },
  {
    id: "didaskalos",
    level: 3,
    name: "Didaskalos",
    greekName: "Didaskalos",
    subtitle: "Greek Scholars",
    tier: "intermediate",
    duration: "12 months minimum",
    description:
      "Didaskalos is where disciples become teachers and communicators of the Word, learning to preach, design curriculum, and shepherd people. This stage develops well-rounded ministry leaders who can hold their own in a pulpit, a classroom, or a pastoral counseling session.",
    curriculum: [
      "Greek Language Basics",
      "Expository Preaching",
      "Educational Psychology",
      "Curriculum Design",
      "Pastoral Care",
      "Church Administration",
    ],
    practicalRequirements: [
      "Preach 10 sermons",
      "Design a teaching series",
      "Plant a daughter cell group",
      "Lead a ministry department",
    ],
    icon: "GraduationCap",
  },
  {
    id: "rabbinical",
    level: 4,
    name: "Rabbinical",
    greekName: "Rabbinical",
    subtitle: "Theologians",
    tier: "intermediate",
    duration: "18 months minimum",
    description:
      "The Rabbinical stage produces seasoned theologians who can administrate, counsel, and plant new expressions of the church. Participants gain expertise in Hebrew studies, advanced theology, and the operational skills needed to manage ministries and train emerging leaders.",
    curriculum: [
      "Hebrew Fundamentals",
      "Advanced Theology",
      "Church Administration",
      "Counseling Skills",
      "Missions and Church Planting",
      "Financial Management",
    ],
    practicalRequirements: [
      "Plant a daughter cell",
      "Disciple 1 Didaskalos student",
      "Write a ministry manual",
      "Administrative internship",
    ],
    icon: "ScrollText",
  },
  {
    id: "pneumatikos",
    level: 5,
    name: "Pneumatikos",
    greekName: "Pneumatikos",
    subtitle: "Bible Freaks",
    tier: "advanced",
    duration: "24 months minimum",
    description:
      "Pneumatikos is reserved for those walking in mature spiritual authority, equipped for warfare, prophetic ministry, and global missions. Graduates of this stage are proven leaders who have raised other leaders and demonstrated the power of the Spirit in measurable, reproducible ways.",
    curriculum: [
      "Spiritual Warfare Advanced",
      "Prophetic Ministry",
      "Global Missions",
      "Ministry Specialization",
      "Revival History",
      "Apostolic Strategies",
    ],
    practicalRequirements: [
      "Lead a short-term mission",
      "Demonstrate spiritual gifts",
      "Raise five leaders",
      "Plant a local church",
    ],
    icon: "Wind",
  },
  {
    id: "apologia",
    level: 6,
    name: "Apologia",
    greekName: "Apologia",
    subtitle: "Apologists",
    tier: "advanced",
    duration: "Ongoing / Lifetime",
    description:
      "Apologia is the pinnacle of the Themelios system, producing apologists and thought leaders who defend the faith and shape culture at the highest levels. This stage is a lifelong pursuit of scholarly excellence, cultural engagement, and the strategic expansion of Kingdom influence across every sphere of society.",
    curriculum: [
      "Apologetics Mastery",
      "Cultural Engagement",
      "Doctoral Research",
      "Movement Leadership",
      "Global Strategy",
      "Legacy Building",
    ],
    practicalRequirements: [
      "Publish scholarly work",
      "Public forums",
      "Train teachers",
      "Influence societal spheres",
    ],
    icon: "Sword",
  },
];

// ---------------------------------------------------------------------------
// Foundation School Modules -- 6 Books x 3 Chapters = 18 Modules
// ---------------------------------------------------------------------------

export const FOUNDATION_MODULES: FoundationModule[] = [
  // Book 1 — Why You Must Be a Christian
  {
    id: "fm-1-1",
    bookNumber: 1,
    bookTitle: "Why You Must Be a Christian",
    moduleNumber: 1,
    title: "The Reality of Salvation",
    description:
      "Understand what it truly means to be saved and why salvation is the non-negotiable starting point of every believer's journey.",
  },
  {
    id: "fm-1-2",
    bookNumber: 1,
    bookTitle: "Why You Must Be a Christian",
    moduleNumber: 2,
    title: "Your New Identity in Christ",
    description:
      "Discover who you have become in Christ and learn to walk in the fullness of your redeemed identity.",
  },
  {
    id: "fm-1-3",
    bookNumber: 1,
    bookTitle: "Why You Must Be a Christian",
    moduleNumber: 3,
    title: "The Cost and Crown of Following Jesus",
    description:
      "Count the cost of discipleship while grasping the eternal rewards that await those who follow Christ wholeheartedly.",
  },

  // Book 2 — Why You Must Be a Disciple
  {
    id: "fm-2-1",
    bookNumber: 2,
    bookTitle: "Why You Must Be a Disciple",
    moduleNumber: 4,
    title: "Beyond Conversion",
    description:
      "Move past the moment of salvation into the lifelong process of being conformed to the image of Christ.",
  },
  {
    id: "fm-2-2",
    bookNumber: 2,
    bookTitle: "Why You Must Be a Disciple",
    moduleNumber: 5,
    title: "Intentional Growth and Transformation",
    description:
      "Embrace the spiritual habits and accountability structures that fuel consistent growth and lasting transformation.",
  },
  {
    id: "fm-2-3",
    bookNumber: 2,
    bookTitle: "Why You Must Be a Disciple",
    moduleNumber: 6,
    title: "The Marks of a True Disciple",
    description:
      "Identify the unmistakable characteristics that set a genuine disciple apart from a casual believer.",
  },

  // Book 3 — Why You Must Be a Discipler
  {
    id: "fm-3-1",
    bookNumber: 3,
    bookTitle: "Why You Must Be a Discipler",
    moduleNumber: 7,
    title: "Multiplying Your Faith",
    description:
      "Learn why discipleship is never complete until you are pouring into someone else and reproducing the faith.",
  },
  {
    id: "fm-3-2",
    bookNumber: 3,
    bookTitle: "Why You Must Be a Discipler",
    moduleNumber: 8,
    title: "The Art of Investing in Others",
    description:
      "Master the practical skills of mentoring, coaching, and walking alongside another believer toward maturity.",
  },
  {
    id: "fm-3-3",
    bookNumber: 3,
    bookTitle: "Why You Must Be a Discipler",
    moduleNumber: 9,
    title: "Building a Legacy of Disciples",
    description:
      "Develop a multigenerational mindset that ensures your spiritual investment outlives you and impacts future generations.",
  },

  // Book 4 — Why You Must Be a Leader
  {
    id: "fm-4-1",
    bookNumber: 4,
    bookTitle: "Why You Must Be a Leader",
    moduleNumber: 10,
    title: "Taking Your Position of Influence",
    description:
      "Recognize that every believer is called to lead and step boldly into your God-given sphere of influence.",
  },
  {
    id: "fm-4-2",
    bookNumber: 4,
    bookTitle: "Why You Must Be a Leader",
    moduleNumber: 11,
    title: "Kingdom Leadership Principles",
    description:
      "Study the biblical principles of servant leadership that distinguish Kingdom leaders from worldly ones.",
  },
  {
    id: "fm-4-3",
    bookNumber: 4,
    bookTitle: "Why You Must Be a Leader",
    moduleNumber: 12,
    title: "Leading with Integrity and Purpose",
    description:
      "Build a leadership lifestyle rooted in character, accountability, and an unwavering sense of divine purpose.",
  },

  // Book 5 — Why You Must Walk in Excellence
  {
    id: "fm-5-1",
    bookNumber: 5,
    bookTitle: "Why You Must Walk in Excellence",
    moduleNumber: 13,
    title: "Representing the King",
    description:
      "Understand that your standard of living and working is a direct reflection of the King you serve.",
  },
  {
    id: "fm-5-2",
    bookNumber: 5,
    bookTitle: "Why You Must Walk in Excellence",
    moduleNumber: 14,
    title: "Excellence as Worship",
    description:
      "Reframe excellence not as perfectionism but as an act of worship that honors God in every area of life.",
  },
  {
    id: "fm-5-3",
    bookNumber: 5,
    bookTitle: "Why You Must Walk in Excellence",
    moduleNumber: 15,
    title: "The Standard of Heaven on Earth",
    description:
      "Commit to establishing heavenly standards in your work, relationships, and ministry as a Kingdom ambassador.",
  },

  // Book 6 — Why You Must Take Over the World
  {
    id: "fm-6-1",
    bookNumber: 6,
    bookTitle: "Why You Must Take Over the World",
    moduleNumber: 16,
    title: "Your Mandate to Influence Nations",
    description:
      "Grasp the Great Commission as a personal mandate to carry Kingdom influence beyond your local context to the nations.",
  },
  {
    id: "fm-6-2",
    bookNumber: 6,
    bookTitle: "Why You Must Take Over the World",
    moduleNumber: 17,
    title: "Kingdom Culture in Every Sphere",
    description:
      "Learn to infiltrate and transform the seven mountains of culture with Kingdom values and biblical worldview.",
  },
  {
    id: "fm-6-3",
    bookNumber: 6,
    bookTitle: "Why You Must Take Over the World",
    moduleNumber: 18,
    title: "Commissioned for Global Impact",
    description:
      "Accept your commissioning as a global agent of change and develop a strategic plan for world-shaping impact.",
  },
];

// ---------------------------------------------------------------------------
// Cell System -- Structure, Philosophy & Operational Parameters
// ---------------------------------------------------------------------------

export const CELL_SYSTEM: CellSystemInfo = {
  philosophy:
    "The cell is not a program OF the church \u2014 the cell IS the church in its most basic expression.",

  fiveWs: [
    {
      letter: "W",
      name: "Welcome",
      duration: "5\u20137 min",
      description:
        "Ice-breaking fellowship that creates a warm, inviting atmosphere where every member feels valued and at home.",
    },
    {
      letter: "W",
      name: "Worship",
      duration: "8\u201312 min",
      description:
        "Spirit-led worship that shifts the atmosphere from social gathering to sacred encounter with God's presence.",
    },
    {
      letter: "W",
      name: "Word",
      duration: "20\u201325 min",
      description:
        "Facilitated discussion of scripture that encourages participation, application, and mutual edification among all members.",
    },
    {
      letter: "W",
      name: "Witness",
      duration: "8\u201310 min",
      description:
        "Intentional focus on evangelism planning, sharing testimonies, and strategizing how to reach the lost in everyday life.",
    },
    {
      letter: "W",
      name: "Works",
      duration: "5\u20137 min",
      description:
        "Logistics, announcements, prayer requests, and a clear close that sends members out with purpose and accountability.",
    },
  ],

  cellTypes: [
    {
      name: "Home Cell",
      description:
        "The standard cell group meeting in a member's home, forming the backbone of the church's community life.",
      location: "Member homes",
      bestFor:
        "Families, neighbourhood communities, and mixed-age groups seeking deep relational discipleship.",
    },
    {
      name: "Campus Cell",
      description:
        "A vibrant cell expression tailored for tertiary students navigating faith, academics, and identity on campus.",
      location: "University and college campuses",
      bestFor:
        "Students seeking peer accountability, spiritual growth, and evangelism opportunities in academic environments.",
    },
    {
      name: "Workplace Cell",
      description:
        "A marketplace-oriented cell that brings Kingdom values into the professional environment during or after work hours.",
      location: "Offices, co-working spaces, or nearby venues",
      bestFor:
        "Working professionals who want to integrate faith with their career and influence colleagues for Christ.",
    },
    {
      name: "Digital Cell",
      description:
        "An online cell group leveraging video conferencing to connect members across geographic boundaries.",
      location: "Virtual (Zoom, Google Meet, or similar platforms)",
      bestFor:
        "Remote members, diaspora communities, travellers, and those unable to attend physical meetings regularly.",
    },
    {
      name: "Special Interest Cell",
      description:
        "A purpose-driven cell built around a shared passion such as music, business, sports, or creative arts.",
      location: "Varies by interest (studios, gyms, venues, online)",
      bestFor:
        "Individuals with niche interests who connect most naturally through shared hobbies or professional pursuits.",
    },
  ],

  sizeParams: [
    { label: "Minimum", value: "4 members" },
    { label: "Ideal", value: "6\u201312 members" },
    { label: "Maximum before multiplication", value: "15 members" },
    {
      label: "Multiplication trigger",
      value: "12\u201315 members sustained for 3+ consecutive weeks",
    },
  ],
};
