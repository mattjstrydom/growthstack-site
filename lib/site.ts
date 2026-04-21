export const siteConfig = {
  name: "GrowthStack",
  shortName: "GrowthStack",
  url: "https://www.growthstackhq.com",
  title: "GrowthStack | GTM Systems and RevOps for Early-Stage B2B Startups",
  description:
    "GrowthStack helps early-stage B2B startups build the systems behind repeatable pipeline: HubSpot setup, CRM design, reporting, automation, and outbound activation.",
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
