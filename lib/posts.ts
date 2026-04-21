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

export const posts: Post[] = postsData as Post[];

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
