import type { BlogPost } from "@/lib/blog";
import { sortByDateDesc } from "@/lib/blog";

import { post as p1 } from "./posts/look-like-top-producer-with-5-deals";
import { post as p2 } from "./posts/what-to-post-during-slow-quarter";
import { post as p3 } from "./posts/familiarity-killing-small-town-listings";
import { post as p4 } from "./posts/solo-agent-outsells-city-team";
import { post as p5 } from "./posts/divorce-listing-video-sentence";
import { post as p6 } from "./posts/veteran-agents-short-form-mistake";
import { post as p7 } from "./posts/coming-soon-youtube-shorts-funnel";
import { post as p8 } from "./posts/agent-pre-sold-1-2m-listing-shorts";
import { post as p9 } from "./posts/tiktok-word-filter-real-estate";
import { post as p10 } from "./posts/instagram-reels-8-seconds-rule";

export const allPosts: BlogPost[] = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
].sort(sortByDateDesc);

export const postsBySlug: Record<string, BlogPost> = Object.fromEntries(
  allPosts.map((p) => [p.slug, p]),
);

export function getPost(slug: string): BlogPost | undefined {
  return postsBySlug[slug];
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const explicit = (post.relatedSlugs ?? [])
    .map((s) => postsBySlug[s])
    .filter(Boolean) as BlogPost[];
  if (explicit.length >= limit) return explicit.slice(0, limit);

  const tagSet = new Set(post.tags);
  const byTag = allPosts
    .filter((p) => p.slug !== post.slug && !explicit.some((e) => e.slug === p.slug))
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => tagSet.has(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.post);

  return [...explicit, ...byTag].slice(0, limit);
}

export const categories: string[] = Array.from(
  new Set(allPosts.map((p) => p.category)),
).sort();
