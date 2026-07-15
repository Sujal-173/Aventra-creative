import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { StatsStrip } from "@/components/marketing/stats-strip";
import { CoreServices } from "@/components/marketing/core-services";
import { FeaturedWork } from "@/components/marketing/featured-work";
import { ProcessTeaser } from "@/components/marketing/process-teaser";
import { TestimonialStrip } from "@/components/marketing/testimonial-strip";
import { CtaSection } from "@/components/marketing/cta-section";
import { SERVICES } from "@/lib/data/services";
import { PROJECTS } from "@/lib/data/projects";
import { fetchProjects, fetchServices } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Aventra Creative — We Build Digital Experiences",
  description:
    "Aventra Creative designs and builds modern websites, SEO strategy, and digital experiences that turn visitors into customers.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [services, projects] = await Promise.all([fetchServices(SERVICES), fetchProjects(PROJECTS)]);
  return (
    <>
      <Hero />
      {/* StatsStrip: animated counters — social proof above the fold */}
      <StatsStrip />
      <CoreServices services={services} />
      <FeaturedWork projects={projects} />
      {/* ProcessTeaser: shows our build-log workflow between work and testimonials */}
      <ProcessTeaser />
      <TestimonialStrip />
      {/* CtaSection: dark-bg CTA block — replaces the lighter PageCta */}
      <CtaSection />
    </>
  );
}
