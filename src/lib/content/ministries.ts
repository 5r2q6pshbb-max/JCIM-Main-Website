import type { Department, SubMinistry, CommunityFellowship } from "@/types/content";

export const DEPARTMENTS: Department[] = [
  {
    id: "secretariat-admin",
    name: "Secretariat & Administration",
    subtitle: "The Nerve Center",
    scripture:
      "Write the vision and make it plain on tablets, that he may run who reads it.",
    scriptureRef: "Habakkuk 2:2",
    icon: "FileText",
    headTitle: "Chief Administrative Secretary",
    description:
      "The Secretariat & Administration department serves as the operational backbone of Jesus City International Ministry. It ensures seamless coordination across all departments, maintains accurate church records and policy documentation, and provides critical support to the General Overseer's office. Every system, schedule, and piece of correspondence flows through this nerve center.",
    coreFunctions: [
      "Church records management and database maintenance",
      "Official correspondence and communication",
      "Meeting coordination and minute-taking",
      "Policy documentation and review",
      "General Overseer's office support",
      "Inter-departmental coordination and liaison",
    ],
    subUnits: [
      {
        name: "Database & Information Management",
        description:
          "Maintains accurate and up-to-date records of membership, attendance, and all ministry data across the church.",
      },
      {
        name: "Communications",
        description:
          "Handles official correspondence, announcements, internal memos, and ensures timely information flow across all departments.",
      },
    ],
    launchPriority: "phase-1",
  },
  {
    id: "finance-stewardship",
    name: "Finance & Stewardship",
    subtitle: "The Treasury",
    scripture:
      "Moreover, it is required of stewards that they be found faithful.",
    scriptureRef: "1 Corinthians 4:2",
    icon: "Landmark",
    headTitle: "Financial Secretary / Chief Steward",
    description:
      "The Finance & Stewardship department is responsible for the transparent and accountable management of all church finances. From tithes and offerings to budgeting and financial reporting, this department ensures every resource entrusted to the ministry is handled with integrity. It also champions a culture of covenant wealth and biblical stewardship among the congregation.",
    coreFunctions: [
      "Income collection and accurate recording of tithes, offerings, and donations",
      "Expense management and disbursement",
      "Annual budget preparation and monitoring",
      "Financial reporting to leadership and stakeholders",
      "Bank account management and reconciliation",
      "Audit preparation and compliance",
    ],
    subUnits: [
      {
        name: "Offering & Collections Team",
        description:
          "Oversees the orderly collection, counting, and recording of all tithes, offerings, and special donations during services and events.",
      },
      {
        name: "Ministry Materials & Procurement",
        description:
          "Manages the procurement of supplies, equipment, and materials needed across all departments while ensuring cost-effectiveness.",
      },
      {
        name: "Covenant Wealth & Stewardship Teaching",
        description:
          "Educates the congregation on biblical principles of stewardship, financial responsibility, and covenant prosperity.",
      },
    ],
    launchPriority: "phase-1",
  },
  {
    id: "worship-music-arts",
    name: "Worship, Music & Arts",
    subtitle: "The Atmosphere Architects",
    scripture:
      "God is spirit, and those who worship Him must worship in spirit and truth.",
    scriptureRef: "John 4:23",
    icon: "Music",
    headTitle: "Worship Director",
    description:
      "The Worship, Music & Arts department creates the atmosphere for divine encounters in every service and gathering. Through anointed worship leading, skillful musicianship, and creative arts expressions, this team ushers the congregation into the presence of God. They are committed to excellence in sound, song selection, and the artistic expression of faith.",
    coreFunctions: [
      "Worship leading and service flow coordination",
      "Song selection, arrangement, and original composition",
      "Musician and vocalist coordination and scheduling",
      "Sound engineering and technical management",
      "Rehearsal scheduling and skill development",
      "Special events and concert planning",
    ],
    subUnits: [
      {
        name: "Music Ministry",
        description:
          "Comprises the choir, praise team, instrumentalists, and vocalists who lead the congregation in worship through song and musical excellence.",
      },
      {
        name: "Creative Arts",
        description:
          "Encompasses drama, dance, spoken word, and other creative expressions used to communicate the gospel and enhance worship experiences.",
      },
      {
        name: "Sound & Technical",
        description:
          "Manages all audio-visual equipment, sound engineering, stage lighting, and technical production for services and events.",
      },
    ],
    launchPriority: "phase-1",
  },
  {
    id: "media-production",
    name: "Media & Production",
    subtitle: "The Amplifiers",
    scripture:
      "Go into all the world and preach the gospel to all creation.",
    scriptureRef: "Mark 16:15",
    icon: "Camera",
    headTitle: "Media Director",
    description:
      "The Media & Production department amplifies the voice and reach of Jesus City International Ministry across digital and physical platforms. From capturing moments through photography and videography to managing a dynamic social media presence and live streaming services worldwide, this team ensures the gospel message transcends the walls of the church. They are the creative engine behind the ministry's brand identity and digital footprint.",
    coreFunctions: [
      "Photography and videography for services and events",
      "Social media content creation and management",
      "Live streaming and broadcast production",
      "Graphic design and visual communication",
      "Website management and digital content updates",
      "Sermon repurposing into multi-format content",
    ],
    subUnits: [
      {
        name: "Visual Media (Photo & Video)",
        description:
          "Captures high-quality photographs and video content for documentation, promotion, and archival purposes across all ministry activities.",
      },
      {
        name: "Digital & Social Media",
        description:
          "Manages the ministry's online presence across all social media platforms, creating engaging content and fostering digital community.",
      },
      {
        name: "Design & Branding",
        description:
          "Maintains brand consistency across all visual materials including flyers, banners, presentation slides, and promotional collateral.",
      },
      {
        name: "Publishing",
        description:
          "Handles the production and distribution of ministry publications including bulletins, newsletters, devotionals, and books.",
      },
    ],
    launchPriority: "phase-1",
  },
  {
    id: "hospitality-protocol-events",
    name: "Hospitality, Protocol & Events",
    subtitle: "The First Impression Team",
    scripture:
      "Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it.",
    scriptureRef: "Hebrews 13:2",
    icon: "Heart",
    headTitle: "Chief of Protocol",
    description:
      "The Hospitality, Protocol & Events department is the first point of contact for everyone who walks through the doors of Jesus City. From warm welcomes and orderly ushering to meticulous event planning and VIP protocol management, this team ensures every person feels valued, every service runs smoothly, and every event leaves a lasting impression of God's love and excellence.",
    coreFunctions: [
      "Ushering and congregation seating management",
      "Visitor welcome, registration, and first-time guest care",
      "VIP protocol and dignitary reception",
      "Service flow coordination and order maintenance",
      "Venue setup, decoration, and ambience creation",
    ],
    subUnits: [
      {
        name: "Ushering",
        description:
          "Manages orderly seating, crowd control, offering collection support, and ensures a smooth worship experience for every attendee.",
      },
      {
        name: "Protocol & Guest Relations",
        description:
          "Handles the reception of visiting ministers, dignitaries, and special guests with proper etiquette and hospitality standards.",
      },
      {
        name: "Events Planning & Coordination",
        description:
          "Plans and executes all church events, conferences, retreats, and special programs from conception through to completion.",
      },
      {
        name: "Decor & Ambience",
        description:
          "Creates visually appealing and spiritually conducive environments for worship services, events, and special occasions.",
      },
      {
        name: "Catering & Refreshments",
        description:
          "Coordinates food and beverage services for church events, fellowship gatherings, leadership meetings, and hospitality needs.",
      },
      {
        name: "Health & Safety",
        description:
          "Ensures the safety and well-being of all attendees through emergency preparedness, first aid availability, and facility safety compliance.",
      },
    ],
    launchPriority: "phase-1",
  },
  {
    id: "pastoral-care-welfare",
    name: "Pastoral Care, Welfare & Fellowship",
    subtitle: "The Shepherd's Hand",
    scripture:
      "Bear one another's burdens, and so fulfill the law of Christ.",
    scriptureRef: "Galatians 6:2",
    icon: "Users",
    headTitle: "Pastoral Care Coordinator",
    description:
      "The Pastoral Care, Welfare & Fellowship department extends the compassionate heart of the church to every member and beyond. This department ensures that no one is overlooked in times of need, sickness, grief, or transition. Through intentional follow-up, welfare support, counseling referrals, and vibrant fellowship groups, it nurtures holistic well-being and genuine community among the body of Christ.",
    coreFunctions: [
      "Member welfare assessment and support coordination",
      "Hospital and home visitation programs",
      "Counseling referrals and pastoral support",
      "Bereavement support and compassion ministry",
      "New member integration and follow-up",
      "Member engagement monitoring and care tracking",
    ],
    subUnits: [
      {
        name: "Follow-Up & Integration",
        description:
          "Ensures new converts and first-time visitors are warmly contacted, connected to cell groups, and integrated into the life of the church.",
      },
      {
        name: "Welfare & Benevolence",
        description:
          "Provides practical assistance and support to members and community individuals facing financial hardship, health challenges, or crisis situations.",
      },
      {
        name: "Counseling",
        description:
          "Offers confidential pastoral counseling and connects members to professional Christian counselors for marriage, family, and personal issues.",
      },
      {
        name: "Fellowship Groups",
        description:
          "Coordinates and supports the various fellowship groups that foster deeper relationships, accountability, and spiritual growth within the church.",
      },
      {
        name: "Fashion & Grooming (SMART Team)",
        description:
          "Promotes excellence in personal presentation, grooming standards, and appropriate church attire as an expression of representing Christ with dignity.",
      },
    ],
    launchPriority: "phase-2",
  },
  {
    id: "prayer-spiritual-warfare",
    name: "Prayer & Spiritual Warfare",
    subtitle: "The Engine Room",
    scripture:
      "The effective, fervent prayer of a righteous man avails much.",
    scriptureRef: "James 5:16",
    icon: "Flame",
    headTitle: "Prayer Coordinator",
    description:
      "The Prayer & Spiritual Warfare department is the spiritual powerhouse that undergirds every activity, decision, and initiative of the ministry. Through organized intercessory prayer, pre-service prayer sessions, and dedicated spiritual warfare programs, this team ensures that the ministry operates from a place of spiritual authority. No service begins, no outreach launches, and no decision is made without the covering of prayer.",
    coreFunctions: [
      "Organized intercessory prayer sessions and schedules",
      "Pre-service and mid-week prayer coordination",
      "Prayer chain management and emergency intercession",
      "Special prayer programs (vigils, fasting, retreats)",
      "Prayer request collection and follow-up",
      "Altar worker training and ministry deployment",
    ],
    subUnits: [
      {
        name: "Intercessory Team",
        description:
          "Dedicated intercessors who maintain consistent prayer coverage for the ministry, leadership, members, and the nations through scheduled and spontaneous prayer.",
      },
      {
        name: "Altar Ministry",
        description:
          "Trained altar workers who minister to individuals during altar calls, providing prayer support, encouragement, and spiritual guidance during services.",
      },
      {
        name: "Prayer Programs",
        description:
          "Plans and coordinates special prayer initiatives including all-night vigils, fasting programs, prayer walks, and seasonal prayer campaigns.",
      },
    ],
    launchPriority: "phase-1",
  },
] as const;

export const SUB_MINISTRIES: SubMinistry[] = [
  {
    id: "auxesis-bible-study",
    name: "Auxesis Bible Study",
    shortName: "Auxesis",
    description:
      "An intensive, Spirit-led Bible study programme designed to deepen believers in the systematic study of Scripture. Auxesis — meaning 'growth' — equips participants with sound hermeneutics, theological depth, and practical application of the Word for everyday living.",
    icon: "BookOpen",
    scripture: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
    motto: "Growing Deep, Growing Strong",
  },
  {
    id: "oikos-leadership",
    name: "Oikos Leadership & Mentorship Programmes",
    shortName: "Oikos",
    description:
      "A structured leadership development and mentorship initiative that raises Kingdom leaders through intentional one-on-one mentoring, leadership cohorts, and practical ministry assignments. Oikos — meaning 'household' — builds leaders who influence their families, workplaces, and communities.",
    icon: "Users",
    scripture: "And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.",
    motto: "Raising Leaders Who Raise Leaders",
  },
  {
    id: "slc-foundation",
    name: "Spreading Love Community Foundation",
    shortName: "SLC Foundation",
    description:
      "The compassion and social impact arm of JCIM, dedicated to community development, welfare, and humanitarian outreach. SLC Foundation provides practical support through education sponsorships, health drives, feeding programmes, and community empowerment initiatives across Ghana and beyond.",
    icon: "Heart",
    scripture: "Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction.",
    motto: "Love in Action, Hope in Motion",
  },
  {
    id: "evangelion-global-missions",
    name: "Evangelion Global Missions",
    shortName: "EGM",
    description:
      "The missions and evangelism arm of JCIM, carrying the gospel to unreached communities, campuses, and nations. Evangelion — meaning 'good news' — coordinates short-term mission trips, campus evangelism campaigns, church planting initiatives, and global outreach partnerships.",
    icon: "Globe",
    scripture: "Go into all the world and preach the gospel to all creation.",
    motto: "Every Nation, Every Campus, Every Soul",
  },
  {
    id: "believers-camp",
    name: "The Believer's Camp",
    shortName: "Camp",
    description:
      "An annual and seasonal camp experience designed to take believers out of their comfort zones for intensive spiritual encounters, deep fellowship, and life-changing ministry. The Believer's Camp combines worship, teaching, outdoor activities, and prophetic ministry in a retreat setting.",
    icon: "Mountain",
    scripture: "Come aside by yourselves to a deserted place and rest a while.",
    motto: "Encounter. Transform. Return.",
  },
  {
    id: "steam-accelerate",
    name: "STEAM Accelerate",
    shortName: "STEAM",
    description:
      "A forward-thinking initiative that equips young believers at the intersection of Science, Technology, Engineering, Arts, and Mathematics. STEAM Accelerate nurtures innovation, creativity, and professional excellence as acts of worship, preparing Kingdom citizens to lead in the marketplace and shape culture.",
    icon: "Lightbulb",
    scripture: "Whatever you do, work at it with all your heart, as working for the Lord.",
    motto: "Faith Meets Innovation",
  },
] as const;

export const COMMUNITY_FELLOWSHIPS: CommunityFellowship[] = [
  {
    id: "men-of-valor",
    slug: "men-of-valor",
    name: "Men of Valor",
    shortName: "MOV",
    tagline: "In Strength, Wisdom, and Humility, We Lead",
    description:
      "Men of Valor (MOV) is the men's fellowship arm of Jesus CITY International Ministries — a dynamic community of men committed to discipleship, accountability, and servant leadership. MOV equips men to fulfil their God-given roles in their families, workplaces, and communities through the Word, prayer, and brotherhood.",
    mission:
      "To raise a generation of men who walk in strength, lead with wisdom, serve with humility, and model Christ in every sphere of influence.",
    vision:
      "A global company of men who are spiritually grounded, emotionally intelligent, relationally healthy, and Kingdom-driven — fathers, husbands, mentors, and nation-builders.",
    icon: "Shield",
    scripture:
      "Be on your guard; stand firm in the faith; be courageous; be strong. Do everything in love.",
    scriptureRef: "1 Corinthians 16:13-14",
    motto: "In Strength, Wisdom, and Humility, We Lead",
    coreValues: [
      {
        name: "Accountability",
        description:
          "Every man of valor walks with a brother. We hold each other to the standard of Christ through honest, iron-sharpens-iron relationships.",
      },
      {
        name: "Servant Leadership",
        description:
          "True leadership follows the pattern of Jesus — towel and basin before crown and throne. We lead by serving.",
      },
      {
        name: "Spiritual Discipline",
        description:
          "Prayer, fasting, and the study of the Word are non-negotiables. A man of valor is a man of the Word.",
      },
      {
        name: "Family First",
        description:
          "Before you can lead a church, a nation, or a business, you must lead your household well. We prioritise godly family life.",
      },
    ],
    programs: [
      {
        name: "Valor Brotherhood Meetings",
        description:
          "Monthly gatherings featuring teaching, testimony, and accountability circles where men sharpen one another in faith and character.",
        schedule: "First Saturday of every month",
      },
      {
        name: "Men's Prayer Watch",
        description:
          "Dedicated intercessory prayer sessions where men stand in the gap for their families, church, and nation.",
        schedule: "Every Friday, 5:30 AM",
      },
      {
        name: "Fatherhood & Marriage Seminars",
        description:
          "Quarterly workshops equipping men with biblical principles for marriage, parenting, and building godly homes.",
      },
      {
        name: "Valor Sports League",
        description:
          "Recreational football, basketball, and fitness events that build camaraderie and provide outreach opportunities.",
      },
      {
        name: "Kingdom Marketplace Forum",
        description:
          "Business and career mentorship sessions connecting men with experienced Christian professionals and entrepreneurs.",
      },
    ],
  },
  {
    id: "ladies-of-faith",
    slug: "ladies-of-faith",
    name: "Ladies of Faith",
    shortName: "LOF",
    tagline: "Empowering Women, Exemplifying Glory",
    description:
      "Ladies of Faith (LOF) is the women's fellowship arm of Jesus CITY International Ministries — a vibrant community of women united in faith, prayer, and purpose. LOF empowers women to walk in their divine identity, develop their gifts, and exemplify the glory of God in every sphere of influence.",
    mission:
      "To empower women to discover their identity in Christ, develop their God-given gifts, and become agents of transformation in their families, churches, and communities.",
    vision:
      "A global sisterhood of women who are rooted in the Word, radiant in faith, and relentless in purpose — mothers, leaders, intercessors, and history-makers.",
    icon: "Crown",
    scripture:
      "She is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue.",
    scriptureRef: "Proverbs 31:25-26",
    motto: "Empowering Women, Exemplifying Glory",
    coreValues: [
      {
        name: "Identity in Christ",
        description:
          "Every woman of faith knows who she is in God. We build our confidence not on culture but on the unchanging Word.",
      },
      {
        name: "Sisterhood & Community",
        description:
          "We walk together in love, bearing one another's burdens, celebrating victories, and growing through transparent, authentic relationships.",
      },
      {
        name: "Excellence & Purpose",
        description:
          "We pursue excellence in every area of life — spiritual, professional, relational — as an act of worship and a reflection of the King we serve.",
      },
      {
        name: "Prayer & Intercession",
        description:
          "The women of JCIM are a praying force. We contend in prayer for our families, our church, and the nations.",
      },
    ],
    programs: [
      {
        name: "Faith Sisters Fellowship",
        description:
          "Monthly gatherings featuring worship, teaching, mentorship circles, and prayer — a safe space for women to grow together in faith.",
        schedule: "Last Saturday of every month",
      },
      {
        name: "Women's Prayer Altar",
        description:
          "Weekly intercessory prayer sessions where women stand in the gap for their families, church, marriages, and the body of Christ.",
        schedule: "Every Wednesday, 6:00 AM",
      },
      {
        name: "Virtuous Woman Conference",
        description:
          "An annual conference bringing together women from across the ministry for intensive teaching, worship, and prophetic ministry.",
      },
      {
        name: "Grace & Style Workshops",
        description:
          "Seminars on personal development, etiquette, professional grooming, and carrying oneself with the dignity befitting a daughter of the King.",
      },
      {
        name: "Mentorship & Discipleship Circles",
        description:
          "Structured mentorship pairings connecting mature women of faith with younger believers for guided spiritual growth and life skills.",
      },
    ],
  },
] as const;
