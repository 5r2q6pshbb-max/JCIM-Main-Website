export interface TestimonyItem {
  id: string;
  name: string;
  location: string;
  category:
    | "salvation"
    | "healing"
    | "deliverance"
    | "provision"
    | "transformation"
    | "family";
  excerpt: string;
  fullText: string;
  featured?: boolean;
  date: string;
}

export const TESTIMONY_CATEGORIES = [
  "All",
  "Salvation",
  "Healing",
  "Deliverance",
  "Provision",
  "Transformation",
  "Family",
] as const;

export const TESTIMONIES: TestimonyItem[] = [
  {
    id: "testimony-1",
    name: "Kwame Asante",
    location: "Kumasi, Ashanti Region",
    category: "salvation",
    excerpt:
      "I was living a life of emptiness, chasing after the world. During the Parousia Conference, the word of God pierced my heart and I gave my life to Christ.",
    fullText:
      "For years, I was living a life of emptiness, chasing after the world and everything it had to offer. I was a university student at KNUST, popular among my peers, but deep inside I knew something was missing. A friend invited me to the Parousia Conference in August 2025, and I reluctantly attended. That night, when Apostle Terry began to preach, the word of God pierced my heart like a sword. I could not hold back the tears. I gave my life to Christ at the altar call, and from that moment, everything changed. I joined the Foundation School, got baptized, and now I am a cell leader. Jesus truly transformed my life.",
    featured: true,
    date: "2025-09-15",
  },
  {
    id: "testimony-2",
    name: "Abena Mensah",
    location: "Accra, Greater Accra",
    category: "healing",
    excerpt:
      "I had been diagnosed with a severe kidney condition and the doctors said I needed surgery. During a Wednesday service, I was healed completely.",
    fullText:
      "I had been diagnosed with a severe kidney condition in early 2025. The doctors at Korle Bu said I needed urgent surgery, and the cost was beyond what my family could afford. A sister in my cell group encouraged me to attend the Wednesday AUXESIS service and receive prayer. That evening, as the church prayed, I felt a warmth spread through my body. I went back to the hospital the following week for my pre-surgery tests, and the doctors were astonished — the condition had completely disappeared. They ran the tests three times to be sure. God healed me without surgery, without payment. I serve Him with all my heart today.",
    featured: true,
    date: "2025-11-02",
  },
  {
    id: "testimony-3",
    name: "Kofi Owusu-Afriyie",
    location: "Takoradi, Western Region",
    category: "deliverance",
    excerpt:
      "I struggled with addiction for over five years. Through the prayers and discipleship at JCIM, I was completely set free.",
    fullText:
      "For over five years, I was bound by substance addiction. I tried to stop many times on my own, but I always fell back. My family was broken, my studies were suffering, and I was losing hope. A friend brought me to the Fire 4 Fire All-Night prayer meeting at JCIM. That night, during the intense session of prayer and worship, I felt chains breaking off my life. It was not just emotional — something shifted in the spiritual realm. Since that night, I have not touched any substance. I enrolled in the discipleship programme, and the systematic teaching of the Word has renewed my mind completely. I am now clean, restored, and serving God with purpose.",
    featured: false,
    date: "2025-07-20",
  },
  {
    id: "testimony-4",
    name: "Ama Serwaa Boateng",
    location: "KNUST, Kumasi",
    category: "provision",
    excerpt:
      "I was about to drop out of university because I could not afford my fees. God provided miraculously through the JCIM community.",
    fullText:
      "I was in my third year at KNUST when my father lost his job. We could not afford my tuition fees, and the university gave me a deadline — pay or leave. I was heartbroken and ready to defer. My cell leader at JCIM encouraged me to trust God and pray. The church community rallied around me in ways I never expected. Within two weeks, through various contributions and a scholarship opportunity that a brother in the church connected me to, my entire fees were covered. Not only that, but God provided for my accommodation and feeding as well. I graduated with First Class Honours, and I know it was the Lord who made it possible.",
    featured: true,
    date: "2025-12-10",
  },
  {
    id: "testimony-5",
    name: "Yaw Darko",
    location: "Sunyani, Bono Region",
    category: "transformation",
    excerpt:
      "The Foundation School completely transformed my understanding of God and my identity. I went from being timid to leading a cell group of thirty people.",
    fullText:
      "Before joining JCIM, I was a very timid person. I could not speak in public, I doubted my abilities, and I lacked confidence in my identity as a child of God. When I enrolled in the Foundation School, the systematic teaching on identity, purpose, and Kingdom authority began to transform my thinking. Module by module, I was being rebuilt from the inside out. By the time I completed the 24-week programme, I was a different person. I now lead a cell group of thirty people, I preach at campus fellowships, and I mentor younger believers. The Themelios system did not just give me knowledge — it gave me a new foundation.",
    featured: false,
    date: "2026-01-18",
  },
  {
    id: "testimony-6",
    name: "Efua Nyarko",
    location: "Cape Coast, Central Region",
    category: "family",
    excerpt:
      "My parents were on the verge of divorce. Through the prayer and counsel at JCIM, God restored our family completely.",
    fullText:
      "My family was falling apart. My parents had been fighting for years, and by 2025, they were on the verge of divorce. As a student at UCC, I felt helpless watching my family disintegrate. I shared my burden with my discipleship group leader at JCIM, and the entire group began to pray with me. My leader also connected my parents to a married couple in the ministry who counselled them. Over the course of several months, I watched God do what I thought was impossible. My parents reconciled, they started attending church together, and my father gave his life to Christ. Today, our family is stronger than it has ever been. Only God could have done this.",
    featured: false,
    date: "2025-10-05",
  },
  {
    id: "testimony-7",
    name: "Nana Akua Frimpong",
    location: "Kumasi, Ashanti Region",
    category: "salvation",
    excerpt:
      "I grew up in church but never truly knew God. The discipleship programme at JCIM opened my eyes to a genuine relationship with Jesus.",
    fullText:
      "I grew up in a Christian home and attended church every Sunday, but if I am honest, I never truly knew God. Christianity was a routine, not a relationship. When I came to KNUST and encountered JCIM, something was different about the way they taught the Word. It was not just information — it was transformation. During the Encounter Jesus outreach, I realised that I had been a churchgoer but not a disciple. I rededicated my life to Christ, went through the Foundation School, and for the first time in my life, I understood what it means to walk with God daily. My prayer life, my character, my priorities — everything shifted. I am not the same person I was before.",
    featured: false,
    date: "2026-02-01",
  },
  {
    id: "testimony-8",
    name: "Emmanuel Tetteh",
    location: "Tema, Greater Accra",
    category: "healing",
    excerpt:
      "I suffered from chronic migraines for three years. After anointed prayer at the Berean Service, the pain left and has never returned.",
    fullText:
      "For three years, I suffered from chronic migraines that made it nearly impossible to study or work. I visited multiple hospitals and tried different medications, but nothing gave lasting relief. The headaches would come so severely that I would be bedridden for days. A colleague at work who attends The Berean Church invited me to a Sunday service. During the prayer time, the man of God called out my condition specifically — he said there was someone with a chronic head condition and that God was healing them right now. I felt a cool sensation wash over my head, and the pain that had been my constant companion for three years vanished instantly. That was eight months ago, and the migraines have never returned. I now serve faithfully in the church.",
    featured: false,
    date: "2025-08-12",
  },
];
