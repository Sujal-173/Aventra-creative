'use client'

import Link from 'next/link'
import {motion} from 'framer-motion'
import {ArrowRight, Code2, Megaphone, Palette, Search, ShoppingBag, Wrench} from 'lucide-react'
import type {Service} from '@/lib/data/services'

const icons = {code: Code2, search: Search, palette: Palette, megaphone: Megaphone, wrench: Wrench, 'shopping-bag': ShoppingBag}

export function CoreServices({services}: {services: Service[]}) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="label-mono text-[var(--primary)]">What we do</span>
        <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-[var(--ink)] lg:text-4xl">Our Core Services</h2>
        <p className="mt-3 max-w-xl text-[15px] text-[var(--ink-muted)]">We provide end-to-end digital solutions to help your business grow.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.slice(0, 5).map((service, index) => {
            const Icon = icons[service.icon] ?? Code2
            return <motion.div key={service.slug} initial={{opacity: 0, y: 16}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: '-60px'}} transition={{duration: 0.45, delay: index * 0.06}}>
              <Link href={`/services/${service.slug}`} className="group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--primary)]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(91,33,231,0.04)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{background: `${service.color}1f`}}><Icon className="h-5 w-5" style={{color: service.color}} /></div>
                <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[var(--ink)]">{service.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--ink-muted)]">{service.shortDesc}</p>
              </Link>
            </motion.div>
          })}
        </div>
        <Link href="/services" className="group mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition-colors">View All Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
      </div>
    </section>
  )
}
