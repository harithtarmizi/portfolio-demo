import type { NavLink, SocialLink } from "@/types";

export const SITE = {
  name: "Harith",
  fullName: "Harith Tarmizi",
  title: "Software Engineer",
  description:
    "Software engineer building scalable systems, cloud infrastructure, and AI-powered products.",
  url: "https://harithtarmizi.dev",
  email: "hello@harithtarmizi.dev",
  resumeUrl: "/resume.pdf",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const HERO_ROLES = [
  "Software Engineer",
  "DevOps Engineer",
  "SRE",
  "Cloud Builder",
  "AI Engineer",
] as const;

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
