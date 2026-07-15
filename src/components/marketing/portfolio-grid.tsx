'use client'

import {useState} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {ArrowUpRight} from 'lucide-react'
import {CATEGORIES, type Project} from '@/lib/data/projects'

export function PortfolioGrid({projects}: {projects: Project[]}) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All')
  const filtered = active === 'All' ? projects : projects.filter((project) => project.category === active)
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={
                "rounded-full border px-4 py-2 text-sm transition-colors cursor-pointer min-h-[44px] " +
                (active === category
                  ? "border-transparent text-white"
                  : "border-[var(--line)] text-zinc-500 hover:border-zinc-400 hover:text-[var(--ink)]")
              }
              style={active === category ? { background: "linear-gradient(135deg, var(--primary-glow), var(--primary))" } : undefined}
              aria-pressed={active === category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={
                      project.coverImageUrl
                        ? { backgroundImage: `url(${project.coverImageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
                        : { background: project.gradient }
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="label-mono absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {project.industry} · {project.result}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
