export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "email";
}

export interface ProofMetric {
  value: string;
  label: string;
}

export interface EngineeringDomain {
  title: string;
  description: string;
  tools: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
}

export interface ProjectDecision {
  decision: string;
  tradeoff: string;
  outcome: string;
}

export interface ProjectImpact {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  description: string;
  problem: string;
  techStack: string[];
  architecture: string;
  challenges: string[];
  solutions: string[];
  decisions: ProjectDecision[];
  impact: ProjectImpact[];
  lessonsLearned: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "Production" | "Open Source" | "In Development" | "Archived";
  year: string;
  featured: boolean;
}
