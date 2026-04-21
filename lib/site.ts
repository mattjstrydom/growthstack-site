export const siteConfig = {
  name: "GrowthStack",
  shortName: "GrowthStack",
  url: "https://www.growthstackhq.com",
  title: "GrowthStack | Outbound for Early-Stage Startups",
  description:
    "Done-for-you outbound for early-stage startups. We build your cold email + LinkedIn system and run it monthly. From $2,500, live in 10 days.",
  email: "hello@growthstackhq.com",
  ogImage: "/icon.png",
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
