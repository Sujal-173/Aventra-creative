import type { Metadata } from 'next'
import { PageCta } from '@/components/marketing/page-cta'
import { PageHeader } from '@/components/marketing/page-header'
import { PortfolioGrid } from '@/components/marketing/portfolio-grid'
import { PROJECTS } from '@/lib/data/projects'
import { fetchProjects } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "Explore Aventra Creative's portfolio of modern websites, e-commerce stores, SEO projects, and branding work — built for businesses in India and worldwide.",
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Our Portfolio | Aventra Creative',
    description:
      'Websites, e-commerce, SEO, and branding projects built by Aventra Creative for businesses worldwide.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
}

export default async function PortfolioPage() {
  const projects = await fetchProjects(PROJECTS)
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Our Portfolio"
        description="Explore our recent work and see how we help businesses grow."
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Portfolio' }]}
      />
      <PortfolioGrid projects={projects} />
      <PageCta title="Have a project in mind?" description="Let's create something amazing together." />
    </>
  )
}
