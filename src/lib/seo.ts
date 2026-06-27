import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — ${SITE.title}`,
    template: `%s | ${SITE.fullName}`,
  },
  description: SITE.description,
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "DevOps",
    "SRE",
    "Cloud Architecture",
    "System Design",
    "Platform Engineering",
    "Harith Tarmizi",
  ],
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.fullName,
    title: `${SITE.fullName} — ${SITE.title}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.fullName} — ${SITE.title}`,
    description: SITE.description,
    creator: "@harithtarmizi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.fullName,
    jobTitle: SITE.title,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    sameAs: [
      "https://github.com/harithtarmizi",
      "https://linkedin.com/in/harithtarmizi",
      "https://x.com/harithtarmizi",
    ],
    knowsAbout: [
      "Software Engineering",
      "System Design",
      "Backend Development",
      "DevOps",
      "Site Reliability Engineering",
      "Cloud Architecture",
      "Platform Engineering",
    ],
  };
}
