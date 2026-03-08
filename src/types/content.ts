export interface Pillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  scripture: string;
  scriptureRef: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  category:
    | "service"
    | "conference"
    | "outreach"
    | "training"
    | "fellowship"
    | "fast"
    | "feast"
    | "retreat"
    | "camp"
    | "prayer"
    | "celebration"
    | "missions"
    | "worship";
}

export interface MonthlyCalendar {
  month: number;
  name: string;
  spiritSeason: string;
  theme: string;
  themeScripture: string;
  themeScriptureRef: string;
  hebrewMonth: string;
  events: EventItem[];
}

export interface YearlyCalendar {
  year: number;
  yearTheme: string;
  yearThemeScripture: string;
  yearThemeScriptureRef: string;
  months: MonthlyCalendar[];
}

export interface SermonItem {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series?: string;
  description: string;
  image?: string;
  videoUrl?: string;
  audioUrl?: string;
  duration?: string;
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  leader?: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  tags: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  slogan: string;
  url: string;
  description: string;
  founder: string;
  foundedYear: number;
  email: string;
  phone: string;
  address: string;
  socials: {
    youtube: string;
    instagram: string;
    facebook: string;
    twitter: string;
    tiktok: string;
  };
}

// --- Departments & Ministries ---

export interface SubUnit {
  name: string;
  description: string;
}

export interface Department {
  id: string;
  name: string;
  subtitle: string;
  scripture: string;
  scriptureRef: string;
  icon: string;
  headTitle: string;
  description: string;
  coreFunctions: string[];
  subUnits: SubUnit[];
  launchPriority: "phase-1" | "phase-2";
}

export interface SubMinistry {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  scripture?: string;
  motto?: string;
}

export interface CommunityFellowship {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  icon: string;
  scripture: string;
  scriptureRef: string;
  motto: string;
  coreValues: { name: string; description: string }[];
  programs: { name: string; description: string; schedule?: string }[];
  externalUrl?: string;
}

// --- Themelios Discipleship System ---

export interface ThemeliosStage {
  id: string;
  level: number;
  name: string;
  greekName: string;
  subtitle: string;
  tier: "foundation" | "intermediate" | "advanced";
  duration: string;
  description: string;
  curriculum: string[];
  practicalRequirements: string[];
  icon: string;
}

export interface FoundationModule {
  id: string;
  bookNumber: number;
  bookTitle: string;
  moduleNumber: number;
  title: string;
  description: string;
}

export interface CellSystemInfo {
  philosophy: string;
  fiveWs: { letter: string; name: string; duration: string; description: string }[];
  cellTypes: { name: string; description: string; location: string; bestFor: string }[];
  sizeParams: { label: string; value: string }[];
}

// --- Beliefs & Values ---

export interface BeliefItem {
  id: string;
  article: number;
  title: string;
  description: string;
  scriptures: string[];
}

export interface CoreValue {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// --- Leadership ---

export interface LeaderProfile {
  id: string;
  name: string;
  title: string;
  role: string;
  image?: string;
  bio: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

// --- Books ---

export interface BookItem {
  id: string;
  title: string;
  author: string;
  description: string;
  image?: string;
  link?: string;
  year: string;
}

// --- Giving ---

export interface GivingType {
  id: string;
  name: string;
  description: string;
  scripture: string;
  scriptureRef: string;
  icon: string;
}

// --- Schedule ---

export interface ServiceTime {
  name: string;
  day: string;
  time: string;
  description: string;
}

export interface WeeklyScheduleDay {
  day: string;
  theme: string;
  activities: { time: string; activity: string; description: string }[];
}
