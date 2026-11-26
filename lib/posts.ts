import postsData from './posts.json';

export interface Post {
  slug: string;
  title: string;
  description: string;
  h1: string;
  category: string;
  date: string;
  readTime: string;
  lede: string;
  body: string;
}

/**
 * Posts hidden from the site.
 *
 * Why this exists: roughly two thirds of the blog was cold-email and deliverability
 * content while every commercial page sells HubSpot and RevOps architecture. Anyone
 * arriving from that content arrives with the wrong intent, so it converts at close
 * to zero no matter how good the pages are.
 *
 * Nothing is deleted. Remove a slug from this list to publish it again.
 *
 * Currently hidden:
 *   revenue-infrastructure - narrates the repositioning from "cold email" to
 *   "revenue infrastructure". It tells every prospect the change was a rename,
 *   which is a credibility cost paid voluntarily.
 *
 * TODO(matt): decide on these. They are pure cold-email content with no path to the
 * RevOps offer, and they are the main reason the site reads as two different
 * companies. Add a slug to the list to hide it, but check Search Console first in
 * case any of them are actually ranking and pulling traffic worth keeping:
 *   'cold-email-warmup-guide'
 *   'cold-email-spam-fix'
 *   'cold-email-deliverability-guide'
 *   'cold-email-agency-cost'
 *   'deliverability-slim'
 *   'scaling-outbound-sends'
 *
 * Worth keeping and reframing rather than hiding, because they can ladder into the
 * build offer: 'outsource-outbound-vs-hire-sdr', 'b2b-outbound-playbook'.
 *
 * Separately: five posts share a 21 April 2026 publish date, which reads as bulk
 * generated. Restaggering the real dates is your call; faking them is not worth it.
 */
const hiddenSlugs = new Set<string>([
  'revenue-infrastructure',
]);

export const posts: Post[] = (postsData as Post[]).filter(
  (post) => !hiddenSlugs.has(post.slug)
);

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map(p => p.slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];

  const sameCategory = posts.filter(
    (post) => post.slug !== slug && post.category === current.category
  );
  const fallback = posts.filter(
    (post) => post.slug !== slug && post.category !== current.category
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}
