import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { allPosts, getPost, getRelatedPosts } from "@/content/blog";
import { SITE_URL, formatPublishDate } from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.cover.src,
          alt: post.cover.alt,
          width: 1600,
          height: 900,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover.src],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = getRelatedPosts(post, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.description,
    image: [post.cover.src],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: SITE_URL,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en-AU",
    wordCount: post.contentHtml.replace(/<[^>]+>/g, " ").trim().split(/\s+/)
      .length,
    isAccessibleForFree: true,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqJsonLd =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: { "@type": "Answer", text: q.answer },
          })),
        }
      : null;

  return (
    <main className="relative bg-[#0A0F1E] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd)
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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd)
              .replace(/</g, "\\u003c")
              .replace(/>/g, "\\u003e")
              .replace(/&/g, "\\u0026"),
          }}
        />
      )}

      <Navigation />

      <article className="pt-28">
        {/* Header */}
        <header className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-gray-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-300 truncate max-w-xs">{post.title}</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-5">
              <span className="text-blue-400 font-medium uppercase tracking-wide">
                {post.category}
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>
                {formatPublishDate(post.publishedAt)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {post.description}
            </p>
            <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
              <div className="w-10 h-10 rounded-full bg-blue-950 border border-blue-800/40 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  {post.author.name}
                </p>
                <p className="text-gray-500 text-xs">{post.author.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Cover */}
        <div className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-5xl mx-auto relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111827]">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-cover"
            />
          </div>
          {post.cover.credit && (
            <p className="max-w-5xl mx-auto text-xs text-gray-600 mt-3 text-right">
              {post.cover.credit}
            </p>
          )}
        </div>

        {/* Body */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div
            className="prose-tinyagent max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-400 bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Sources */}
        {post.sources && post.sources.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-3xl mx-auto border-t border-white/[0.06] pt-8">
              <h2 className="text-white text-base font-semibold mb-4">
                Sources &amp; further reading
              </h2>
              <ol className="space-y-3 list-decimal list-inside text-sm">
                {post.sources.map((s, i) => (
                  <li key={i} className="text-gray-400">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline"
                    >
                      {s.title}
                    </a>
                    {s.publisher && (
                      <span className="text-gray-500"> — {s.publisher}</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* In-article CTA */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-3xl mx-auto rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-blue-900/10 to-transparent p-8 sm:p-10">
            <p className="text-blue-300 text-xs font-medium uppercase tracking-wide mb-3">
              Stop guessing at marketing
            </p>
            <h3 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
              We run the ads. You take the calls.
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Tiny Agent builds and runs precision advertising campaigns for
              real estate agents across Australia. Vendor leads delivered
              straight to your inbox, usually live within 24 hours.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
                Keep reading
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border border-white/[0.06] bg-[#111827]/60 hover:bg-[#111827] hover:border-white/[0.12] transition-all overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0F1E]">
                      <Image
                        src={r.cover.src}
                        alt={r.cover.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] text-blue-400 font-medium uppercase tracking-wide mb-2">
                        {r.category}
                      </p>
                      <h3 className="text-white text-base font-semibold leading-snug group-hover:text-blue-300 transition-colors">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTASection />
      <Footer />
    </main>
  );
}
