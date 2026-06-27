import type { NavLink, ProofMetric, SocialLink } from "@/types";

export const SITE = {
  name: "Harith",
  fullName: "Harith Tarmizi",
  title: "Software Engineer",
  description:
    "Backend engineer building production systems — architecture, platform engineering, and reliability.",
  url: "https://harithtarmizi.dev",
  email: "hello@harithtarmizi.dev",
  resumeUrl: "/resume.pdf",
  availability:
    "Open to senior engineering roles, staff-level platform work, and technical leadership conversations.",
  identity: "Backend · Platform · SRE · Cloud · AI",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Focus", href: "#focus" },
  { label: "Contact", href: "#contact" },
];

export const HERO_PROOF: ProofMetric[] = [
  { value: "12M+", label: "API requests/day" },
  { value: "99.95%", label: "SLA maintained" },
  { value: "8 min", label: "deployment time" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:hello@harithtarmizi.dev",
    icon: "email",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/harithtarmizi",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/harithtarmizi",
    icon: "github",
  },
  {
    label: "X",
    href: "https://x.com/harithtarmizi",
    icon: "twitter",
  },
];
