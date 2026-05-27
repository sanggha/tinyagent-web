export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: string;
};

export type BlogSource = {
  title: string;
  url: string;
  publisher?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string; // ISO date YYYY-MM-DD
  updatedAt?: string;
  readingTime: number; // minutes
  category: string;
  tags: string[];
  author: BlogAuthor;
  cover: {
    src: string;
    alt: string;
    credit?: string;
  };
  contentHtml: string;
  sources?: BlogSource[];
  relatedSlugs?: string[];
  faq?: { question: string; answer: string }[];
};

export const SITE_URL = "https://tinyagent.io";

export const DEFAULT_AUTHOR: BlogAuthor = {
  name: "The Tiny Agent Team",
  role: "Real Estate Advertising Specialists",
};

export function formatPublishDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function sortByDateDesc(a: BlogPost, b: BlogPost): number {
  return b.publishedAt.localeCompare(a.publishedAt);
}
