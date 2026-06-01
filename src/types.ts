export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // percentage (e.g. 90)
  category: "MarTech" | "Data" | "Strategy" | "Web Ops";
  details: string[];
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
}

export interface Client {
  name: string;
  logoText: string;
}
