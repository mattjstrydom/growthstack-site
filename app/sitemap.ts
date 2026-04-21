import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "/",
    "/about",
    "/blog",
    "/contact",
    "/how-it-works",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified,
      changeFrequency: route === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.7,
    })),
    ...getAllSlugs().map((slug) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
