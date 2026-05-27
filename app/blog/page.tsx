import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { allPosts } from "@/content/blog";
import { SITE_URL, formatPublishDate } from "@/lib/blog";

const pageUrl = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "Real Estate Marketing Blog | Tiny Agent",
  description:
    "Field-tested marketing, advertising and video strategies for Australian real estate agents. Written by the team that runs campaigns for agents every day.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Real Estate Marketing Blog | Tiny Agent",
    description:
      "Field-tested marketing and advertising strategies for Australian real estate agents.",
    images: [`${SITE_URL}/logo.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Marketing Blog | Tiny Agent",
    description:
      "Field-tested marketing and advertising strategies for Australian real estate agents.",
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = allPosts;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${pageUrl}#blog`,
    url: pageUrl,
    name: "Tiny Agent Blog",
    description:
      "Field-tested marketing and advertising strategies for Australian real estate agents.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-AU",
    blogPost: allPosts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${p.slug}#article`,
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
      author: { "@type": "Organization", name: p.author.name },
      image: p.cover.src,
      keywords: p.tags.join(", "),
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl },
    ],
  };

  return (
    <main className="relative bg-[#0A0F1E] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd)
            .replace(/</g, "\\u003c")
            .replace(/>/g, "\\u003e")
            .replace(/&/g, "\\u0026"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
            .replace(/</g, "\\u003c")
            .replace(/>/g, "\\u003e")
            .replace(/&/g, "\\u0026"),
        }}
      />

      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Blog</li>
            </ol>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-3 tracking-wide uppercase">
            The Tiny Agent Blog
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-5">
            Real estate marketing,{" "}
            <span className="gradient-text">without the fluff</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Field notes from running paid advertising and video campaigns for
            Australian real estate agents. Specific tactics, real numbers, no
            recycled LinkedIn quotes.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111827]">
                <Image
                  src={featured.cover.src}
                  alt={featured.cover.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  Latest
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <span className="text-blue-400 font-medium">
                    {featured.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featured.publishedAt}>
                    {formatPublishDate(featured.publishedAt)}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readingTime} min read</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4 group-hover:text-blue-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 text-sm font-medium">
                  Read the article →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              All articles
            </h2>
            <p className="text-gray-500 text-sm hidden sm:block">
              {allPosts.length} posts
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[#111827]/60 hover:bg-[#111827] hover:border-white/[0.12] transition-all overflow-hidden"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-[#0A0F1E]"
                >
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-3 uppercase tracking-wide">
                    <span className="text-blue-400 font-medium">
                      {post.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.publishedAt}>
                      {formatPublishDate(post.publishedAt)}
                    </time>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.readingTime} min read</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
