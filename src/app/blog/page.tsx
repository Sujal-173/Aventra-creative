import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";
import { POSTS } from "@/lib/data/posts";
import { fetchPosts } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, insights and strategies on web development, SEO, branding, and digital marketing — from the Aventra Creative team. India-based agency, publishing worldwide.",
  alternates: { canonical: "/blog" },
  keywords: [
    "web development tips",
    "SEO strategies India",
    "digital marketing insights",
    "website design blog",
    "Aventra Creative blog",
  ],
  openGraph: {
    title: "Blog | Aventra Creative",
    description:
      "Tips, insights and strategies on web development, SEO, and digital marketing from Aventra Creative.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function BlogPage() {
  const [featured, ...rest] = await fetchPosts(POSTS);

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Our Blog"
        description="Tips, insights and strategies to grow your business."
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
      />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] lg:grid-cols-2">
            <div className="aspect-[16/10] lg:aspect-auto" style={{ background: featured.gradient }} />
            <div className="flex flex-col justify-center p-8">
              <span className="label-mono text-[var(--primary)]">{featured.category} · Featured</span>
              <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--primary)]">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-3 text-xs text-zinc-500">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{new Date(featured.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105" style={{ background: p.gradient }} />
                </div>
                <span className="label-mono mt-4 block text-[var(--primary)]">{p.category}</span>
                <h3 className="mt-1.5 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--primary)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-zinc-600">
                  <span>{new Date(p.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
