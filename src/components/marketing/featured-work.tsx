"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

export function FeaturedWork({ projects }: { projects: Project[] }) {
  return (
    <section className="py-28" style={{ backgroundColor: "var(--bg)", color: "var(--ink)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2
              className="mt-3 max-w-xl font-display font-semibold tracking-tight text-[var(--ink)]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Case studies for businesses that want a premium digital edge.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
          >
            Full portfolio{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="card card-hover group block overflow-hidden"
              >
                {/* Image stays clean — most cover art already carries its own
                    branding/typography, so we only ever place two small,
                    high-contrast chips on it, never a full text caption. */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
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
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                    {project.industry}
                  </div>
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-full bg-black/55 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                    {project.result}
                  </div>
                </div>

                {/* All caption content lives below the image, on a plain
                    surface — nothing here ever sits on top of the artwork. */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-xs text-[var(--ink-faint)]">
                    <span>{project.year}</span>
                    <span className="font-medium text-[var(--accent)]">{project.industry}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)] line-clamp-2">
                    {project.overview}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    View case study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
