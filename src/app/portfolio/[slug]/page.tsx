import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageCta } from "@/components/marketing/page-cta";
import { PROJECTS } from "@/lib/data/projects";
import { fetchProjects } from "@/lib/sanity/queries";

export async function generateStaticParams() {
  return (await fetchProjects(PROJECTS)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = (await fetchProjects(PROJECTS)).find(
    (item) => item.slug === slug,
  );
  if (!project) return {};
  return {
    title: project.name,
    description: project.overview,
    alternates: { canonical: `/portfolio/${project.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await fetchProjects(PROJECTS);
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    about: project.industry,
    creator: { "@type": "Organization", name: "Aventra Creative" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aventracreative.in" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://aventracreative.in/portfolio" },
      { "@type": "ListItem", position: 3, name: project.name, item: `https://aventracreative.in/portfolio/${project.slug}` },
    ],
  };

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── Hero: one clean header block. Everything the visitor needs to
           know about the project up front — title, summary, meta, CTA —
           lives here exactly once, before the image. Nothing is ever
           duplicated below, and nothing is ever captioned on top of the
           screenshot itself (cover art already carries its own branding). ── */}
      <section className="pb-10 pt-36 lg:pt-40" style={{ backgroundColor: "var(--bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[var(--ink-faint)]">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-[var(--accent)] transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-[var(--ink-muted)]">{project.name}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="eyebrow">{project.industry}</span>
            <h1
              className="mt-3 font-display font-bold tracking-tight text-[var(--ink)]"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.5rem)" }}
            >
              {project.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              {project.overview}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2.5"
              >
                Visit project
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
            <span className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--ink)]">
              {project.year}
            </span>
            <span className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm font-medium text-[var(--accent)]">
              {project.result}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero image: full-bleed, no text laid over it — the artwork
           speaks for itself. ── */}
      <section className="pb-16" style={{ backgroundColor: "var(--bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-[var(--shadow-lg)]">
            <div
              className="h-64 w-full sm:h-[420px] lg:h-[520px]"
              style={
                project.coverImageUrl
                  ? {
                      backgroundImage: `url(${project.coverImageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : { background: project.gradient }
              }
            />
          </div>
        </div>
      </section>

      <section className="pb-16" style={{ backgroundColor: "var(--bg)" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-8">
              <h2 className="mb-3 text-2xl font-semibold text-[var(--ink)]">Challenge</h2>
              <p className="text-[15px] leading-relaxed text-[var(--ink-muted)]">{project.challenge}</p>
            </div>

            <div className="card p-8">
              <h2 className="mb-3 text-2xl font-semibold text-[var(--ink)]">Solution</h2>
              <p className="text-[15px] leading-relaxed text-[var(--ink-muted)]">{project.solutionText}</p>
            </div>

            <div className="card p-8">
              <h2 className="mb-4 text-2xl font-semibold text-[var(--ink)]">Key Features</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.keyFeatures.map((f) => (
                  <div
                    key={f}
                    className="rounded-lg border border-[var(--line)] px-4 py-3 text-sm text-[var(--ink)]"
                    style={{ backgroundColor: "var(--surface)" }}
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h2 className="mb-4 text-2xl font-semibold text-[var(--ink)]">Technologies Used</h2>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="label-mono rounded-full border border-[var(--line)] px-4 py-2 text-[var(--ink-muted)]"
                    style={{ backgroundColor: "var(--surface)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--ink-faint)]">
                Project Details
              </h3>
              <ul className="text-sm text-[var(--ink-muted)] space-y-2.5">
                <li className="flex justify-between gap-3"><span>Client</span><strong className="text-right text-[var(--ink)]">{project.client}</strong></li>
                <li className="flex justify-between gap-3"><span>Category</span><strong className="text-right text-[var(--ink)]">{project.category}</strong></li>
                <li className="flex justify-between gap-3"><span>Year</span><strong className="text-right text-[var(--ink)]">{project.year}</strong></li>
                <li className="flex flex-col gap-1.5"><span>Technologies</span><strong className="text-[var(--ink)]">{project.technologies.join(", ")}</strong></li>
              </ul>
            </div>

            <div className="card p-6" style={{ backgroundColor: "var(--bg-dark)", borderColor: "var(--line-strong)" }}>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--success)" }} />
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">Result</h3>
              </div>
              <p className="mt-2 font-display text-lg font-semibold text-white">{project.result}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-16" style={{ backgroundColor: "var(--bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[var(--ink)]">Related Projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--line)]">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={
                      p.coverImageUrl
                        ? { backgroundImage: `url(${p.coverImageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
                        : { background: p.gradient }
                    }
                  />
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
                <h3 className="mt-3 flex items-center gap-1.5 font-display text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                  {p.name}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready for a project like this?"
        description="Share your brief and we'll recommend the most effective web or growth solution for your business."
      />
    </>
  );
}
