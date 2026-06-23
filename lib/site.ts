export const siteConfig = {
  name: "GrowthStack",
  shortName: "GrowthStack",
  url: "https://www.growthstackhq.com",
  title: "GrowthStack | GTM Infrastructure for Early-Stage B2B Teams",
  description:
    "GrowthStack builds GTM operating infrastructure for early-stage B2B teams — HubSpot setup, outbound systems, workflow automation, and CRM architecture. Fixed scope. 10-day delivery. You own everything.",
  email: "hello@growthstackhq.com",
  ogImage: "/opengraph-image",
  social: {
    x: "@growthstackhq",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function jsonLd<T>(data: T) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
