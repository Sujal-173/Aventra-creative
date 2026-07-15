"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

export function FeaturedWork({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-white py-28 text-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="label-mono text-[var(--primary)]">
              Selected work
            </span>
            <h2
              className="mt-3 max-w-xl font-[family-name:var(--font-space-grotesk)] font-semibold tracking-tight text-[var(--ink)]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Results, not just renders.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition-colors"
          >
            Full portfolio{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={index % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative block aspect-[16/11] overflow-hidden rounded-2xl"
              >
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <span className="label-mono text-white/60">
                    {project.industry}
                  </span>
                  <h3 className="mt-1 text-white font-[family-name:var(--font-space-grotesk)] text-2xl font-medium">
                    {project.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                    {project.result}
                  </div>
                </div>
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
