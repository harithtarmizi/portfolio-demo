export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "email";
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  architecture: string;
  challenges: string[];
  solutions: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "Production" | "Open Source" | "In Development" | "Archived";
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
}
