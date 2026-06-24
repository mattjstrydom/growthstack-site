import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const serviceLastModified = new Date("2026-06-24").toISOString();

  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly" as const, priority: 1 },
    { url: absoluteUrl("/services"), lastModified: serviceLastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: absoluteUrl("/hubspot-revops"), lastModified: serviceLastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: absoluteUrl("/how-it-works"), lastModified: serviceLastModified, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: absoluteUrl("/about"), lastModified: serviceLastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: serviceLastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: absoluteUrl("/hubspot-cleanup"), lastModified: serviceLastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: absoluteUrl("/privacy-policy"), lastModified: serviceLastModified, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: absoluteUrl("/terms-and-conditions"), lastModified: serviceLastModified, changeFrequency: "monthly" as const, priority: 0.3 },
    ...getAllSlugs().map((slug) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
