import type { MetadataRoute } from "next";
import { PROJECTS } from "@/constants/content";
import { SITE } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages = PROJECTS.map((project) => ({
    url: `${SITE.url}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...workPages,
  ];
}
