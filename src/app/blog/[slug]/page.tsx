import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { PageCta } from "@/components/marketing/page-cta";
import { POSTS } from "@/lib/data/posts";
import { fetchPosts } from "@/lib/sanity/queries";

export async function generateStaticParams() {
  return (await fetchPosts(POSTS)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = (await fetchPosts(POSTS)).find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[15px] leading-relaxed text-[var(--ink-muted)]">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="pt-5 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--ink)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--ink)]">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[var(--primary)] pl-4 italic text-[var(--ink-faint)]">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const link = value as { href?: string; blank?: boolean } | undefined;
      return (
        <a
          href={link?.href}
          target={link?.blank ? "_blank" : undefined}
          rel={link?.blank ? "noreferrer" : undefined}
          className="text-[var(--primary)] underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await fetchPosts(POSTS);
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="bg-[var(--bg)] pb-10 pt-36 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[var(--ink-faint)]"
          >
            <Link
              href="/"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-[var(--ink-muted)]">{post.title}</span>
          </nav>
          <span className="label-mono mt-6 block text-[var(--primary)]">
            {post.category}
          </span>
          <h1
            className="mt-3 font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight text-[var(--ink)]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 text-xs text-[var(--ink-faint)]">
            <span>{post.author}</span>
            <span>·</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div
            className="aspect-[16/8] rounded-2xl"
            style={{ background: post.gradient }}
          />
        </div>
      </section>

      <section className="bg-[var(--bg)] pb-16">
        <div className="mx-auto max-w-3xl space-y-5 px-6 lg:px-8">
          {(post.body ?? post.content).every(
            (block) => typeof block === "string",
          ) ? (
            (post.body ?? post.content).map((paragraph) => (
              <p
                key={String(paragraph)}
                className="text-[15px] leading-relaxed text-[var(--ink-muted)]"
              >
                {paragraph as string}
              </p>
            ))
          ) : (
            <PortableText
              value={(post.body ?? post.content) as never}
              components={portableTextComponents}
            />
          )}
        </div>
      </section>

      <section className="bg-[var(--bg)] pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--ink)]">
            Related Posts
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-[0_4px_15px_rgba(67,56,202,0.02)]"
              >
                <span className="text-sm text-[var(--ink-muted)] group-hover:text-[var(--primary)] transition-colors">
                  {p.title}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--primary)]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
