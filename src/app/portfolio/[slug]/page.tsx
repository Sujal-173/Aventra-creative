import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageCta } from "@/components/marketing/page-cta";
import { PROJECTS } from "@/lib/data/projects";
import { fetchProjects } from "@/lib/sanity/queries";

export async function generateStaticParams() {
  return (await fetchProjects(PROJECTS)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = (await fetchProjects(PROJECTS)).find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.challenge,
    alternates: { canonical: `/portfolio/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
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

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />

      <section className="bg-white pb-6 pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-[var(--primary)] transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-zinc-600">{project.name}</span>
          </nav>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <span className="label-mono text-[var(--primary)]">{project.industry}</span>
              <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                {project.name}
              </h1>
              <p className="mt-4 max-w-lg text-[15px] text-[var(--ink-muted)]">{project.challenge}</p>
              {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:underline">Visit project <ExternalLink className="h-4 w-4" /></a>}
            </div>
            <dl className="grid grid-cols-2 gap-4 border-t border-[var(--line)] pt-6 lg:border-t-0 lg:pt-0">
              {[
                { k: "Client", v: project.client },
                { k: "Industry", v: project.industry },
                { k: "Services", v: project.services.join(", ") },
                { k: "Year", v: project.year },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="label-mono text-zinc-600">{item.k}</dt>
                  <dd className="mt-1 text-sm text-[var(--ink)] font-medium">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="aspect-[16/8] rounded-2xl" style={project.coverImageUrl ? {backgroundImage: `url(${project.coverImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'} : {background: project.gradient}} />
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8">
            <span className="label-mono text-zinc-500">The Challenge</span>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-muted)]">{project.challenge}</p>
          </div>
          <div className="rounded-2xl border border-[var(--primary)]/30 bg-[var(--primary-soft)] p-8">
            <span className="label-mono" style={{ color: "var(--primary)" }}>Our Solution</span>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]">{project.solutionText}</p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--ink)]">Key Features</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.keyFeatures.map((f) => (
              <div key={f} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-4 text-center text-sm text-[var(--ink)] font-medium">
                {f}
              </div>
            ))}
          </div>

          <h2 className="mt-14 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--ink)]">Technologies Used</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.technologies.map((t) => (
              <span key={t} className="label-mono rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-zinc-600">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-14 flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--success)]" />
            <p className="text-sm text-[var(--ink-muted)]">
              <span className="font-medium text-[var(--ink)]">Result: </span>{project.result}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--ink)]">Related Projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={p.coverImageUrl ? {backgroundImage: `url(${p.coverImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'} : {background: p.gradient}} />
                </div>
                <h3 className="mt-3 flex items-center gap-1.5 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
                  {p.name}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Have a similar project?" description="Let's talk about what you're building." />
    </>
  );
}
