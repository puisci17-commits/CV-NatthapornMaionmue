import { WorkExperience, Education, Skill, Achievement } from "./types";

export const PROFILE = {
  name: "NATTHAPORN MAIONMUE",
  title: "Digital Marketing Strategist & Project Manager",
  location: "Bangkok, Thailand",
  email: "nattha.maionmue@gmail.com",
  phone: "092-254-1697",
  linkedIn: "https://www.linkedin.com/in/natthapornmaionmue/",
  github: "https://github.com/puisci17-commits",
  bio: "Data-Driven Strategist with 10+ years in digital campaigns and platform management. Background in Science (B.Sc. & M.Sc.), applying logical analysis to marketing. Expert in Enterprise MarTech (AEM/Salesforce), SEO, and budget optimization for measurable business results.",
  hobbies: ["digital analytics", "food science", "photography", "traveling", "technical writing"],
  birthDate: "14-SEP-1983",
  nationality: "Thai",
  avatarUrl: "" // Will be updated dynamically in the App below to our generated image path
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "work-1",
    company: "Just You Gift",
    role: "Digital Marketing",
    period: "2025 – Present",
    description: "Formulating high-performing digital marketing systems for a premium artisan brand, maximizing revenue and fine-tuning technical touchpoints.",
    highlights: [
      "Data-Driven Strategy: Managed end-to-end campaigns, optimizing budget and ad spend (Meta/Google) based on real-time performance data.",
      "SEO & Web Ops: Implemented Technical SEO for WordPress to boost organic traffic and conversion rates."
    ]
  },
  {
    id: "work-2",
    company: "Team X BBDO Thailand",
    role: "Digital Project Manager",
    period: "2022 - 2023",
    description: "Spearheaded complex technical and media orchestrations for elite automotive accounts.",
    highlights: [
      "Planned, directed, and coordinated technology and media teams for Mercedes-Benz Thailand.",
      "Led in-depth analysis to clarify solutions for both marketing and client sides and optimized the use of data to enhance platform performance for future campaigns."
    ]
  },
  {
    id: "work-3",
    company: "Publicis Emil",
    role: "Digital Platform Manager",
    period: "2018 – 2021",
    description: "Oversaw regional platform deployment, data analytics engines, and audience targeting workflows.",
    highlights: [
      "Platform Management: Led digital operations for Mercedes-Benz Thailand, ensuring alignment with global technical standards.",
      "Analytics: Monitored performance using Adobe Analytics & Power BI to drive platform improvements.",
      "Stack: Adobe Experience Manager (AEM), Salesforce (SFMC), DMP."
    ]
  },
  {
    id: "work-4",
    company: "Digitas Thailand",
    role: "Project Coordinator",
    period: "2015 – 2018",
    description: "Bridged client goals with engineering deliverables to execute state-of-the-art web products.",
    highlights: [
      "Coordinated online/offline campaigns, managing schedules, budgets, and QA testing for web/apps before launch."
    ]
  },
  {
    id: "work-5",
    company: "Arc Worldwide Thailand",
    role: "Social Media Moderator",
    period: "2010 – 2015",
    description: "Cultivated brand affinity and established robust engagement rules for world-renowned market leaders.",
    highlights: [
      "Managed social engagement and brand consistency for global and Thai clients."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: "edu-1",
    institution: "KMITL (King Mongkut's Institute of Technology Ladkrabang)",
    degree: "M.Sc. Food Science",
    period: "2011 – 2013",
    description: "Applied systematic logical analysis, research methodology, and statistical modeling to complex food sciences."
  },
  {
    id: "edu-2",
    institution: "KMITL (King Mongkut's Institute of Technology Ladkrabang)",
    degree: "B.Sc. Microbiology",
    period: "2007 – 2011",
    description: "Synthesized scientific analytical thinking patterns, rigorous QA standards, and experimental tracking methods."
  }
];

export const SKILLS: Skill[] = [
  {
    name: "AI Tools & Automation",
    level: 92,
    category: "MarTech",
    details: ["AI Tools", "Vibe Coding", "Google Apps Script", "Prompt Engineering", "Workspace Automations"]
  },
  {
    name: "Enterprise MarTech",
    level: 95,
    category: "MarTech",
    details: ["Adobe Experience Manager (AEM)", "Salesforce (SFMC)", "Data Management Platforms (DMP)", "Google Search Console"]
  },
  {
    name: "Data & Web Analytics",
    level: 92,
    category: "Data",
    details: ["Adobe Analytics", "Power BI", "Google Analytics", "Excel Data Modeling", "Performance Tracking"]
  },
  {
    name: "Search Optimization & SEO",
    level: 90,
    category: "Strategy",
    details: ["Technical SEO", "On-Page/Off-Page Optimization", "Semantic Keyword Indexing", "WordPress Auditing"]
  },
  {
    name: "Campaign & Media Planning",
    level: 88,
    category: "Strategy",
    details: ["Meta Ads Manager", "Google Ads Engine", "Budget Optimization", "Performance Analytics"]
  },
  {
    name: "QA Testing & Web Ops",
    level: 85,
    category: "Web Ops",
    details: ["Cross-Device UI Verification", "Conversion Rate Optimization (CRO)", "Agile Delivery Coordination"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    year: "2018",
    title: "ADMAN Awards",
    subtitle: "\"PASA-THAI MACHINE\" Campaign (TAT)",
    description: "Recognized in the Interface & User Experience category for exceptional digital interface planning and user flow."
  },
  {
    id: "ach-2",
    year: "2018",
    title: "ADMAN Awards",
    subtitle: "\"Hi I AM UNIQLO\" Campaign (Uniqlo Thailand)",
    description: "Generated over 10 million impressions, maximizing digital channel engagement with precision audience targeting."
  },
  {
    id: "ach-3",
    year: "Top Rank",
    title: "App Store Ranking",
    subtitle: "\"1081009 Travel\" Application (TAT)",
    description: "Reached #1 in the Travel category with 140,000 downloads in the vital first month under active analytics-led project management."
  }
];

export const CLIENTS: string[] = [
  "Mercedes-Benz Thailand",
  "Uniqlo Thailand",
  "TAT (Tourism Authority of Thailand)",
  "Property Perfect",
  "P&G",
  "TMB Bank",
  "ME by TMB",
  "LINE Thailand",
  "Chevrolet",
  "MG Motors",
  "PTG Energy",
  "Megabangna",
  "Samsung",
  "Lotus's",
  "Vixol",
  "Dtac",
  "KBank",
  "SCB",
  "Electrolux"
];

