export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  category: "Websites" | "E-commerce" | "SaaS" | "Branding" | "SEO";
  services: string[];
  year: string;
  result: string;
  gradient: string;
  challenge: string;
  solutionText: string;
  keyFeatures: string[];
  technologies: string[];
  coverImageUrl?: string;
  coverImageAlt?: string;
  projectUrl?: string;
  featured?: boolean;
  orderRank?: number;
};

export const PROJECTS: Project[] = [
  {
    slug: "yashraj-palace",
    name: "Yashraj Palace",
    client: "Yashraj Palace",
    industry: "Hospitality",
    category: "Websites",
    services: ["Web Development", "SEO"],
    year: "2024",
    result: "+64% direct bookings",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 55%, #6d28d9 100%)",
    challenge:
      "Yashraj Palace had no way for guests to check availability or book directly — every reservation went through a phone call or a third-party booking site that took a cut of every sale.",
    solutionText:
      "We built a fast, SEO-friendly website with a secure booking system, real-time availability, and an admin dashboard the hotel staff manage themselves without any developer involvement.",
    keyFeatures: ["Room booking system", "Real-time availability", "Secure payments", "Admin dashboard"],
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Razorpay", "Cloudinary"],
  },
  {
    slug: "vardo-grow",
    name: "Vardo Grow",
    client: "Vardo Grow",
    industry: "E-commerce",
    category: "E-commerce",
    services: ["E-commerce", "Digital Marketing"],
    year: "2025",
    result: "3.1x conversion rate",
    gradient: "linear-gradient(135deg, #052e16 0%, #065f46 55%, #059669 100%)",
    challenge:
      "Vardo Grow's storefront looked fine but lost most visitors at checkout — a five-step flow with no visible shipping costs until the final page.",
    solutionText:
      "We rebuilt checkout down to two steps, surfaced shipping cost immediately, and added trust signals at the exact point buyers were dropping off.",
    keyFeatures: ["Two-step checkout", "Live inventory sync", "Abandoned cart recovery", "Mobile-first catalog"],
    technologies: ["Next.js", "Razorpay", "Sanity CMS"],
  },
  {
    slug: "shubham-traders-solar",
    name: "Shubham Traders Solar",
    client: "Shubham Traders",
    industry: "Solar / B2B",
    category: "SEO",
    services: ["SEO", "Web Development"],
    year: "2024",
    result: "#1 local search ranking",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 55%, #2563eb 100%)",
    challenge:
      "Shubham Traders had a working website that simply never showed up when local businesses searched for solar EPC contractors.",
    solutionText:
      "A full technical SEO overhaul plus a local content strategy targeting the exact commercial searches their customers use, backed by Google Business Profile optimization.",
    keyFeatures: ["Technical SEO audit", "Local content strategy", "Google Business optimization", "Monthly reporting"],
    technologies: ["Next.js", "Schema.org", "Google Search Console"],
  },
  {
    slug: "its-daigh",
    name: "ITS Daigh",
    client: "ITS Daigh",
    industry: "UI/UX System",
    category: "Branding",
    services: ["Branding & Design", "Web Development"],
    year: "2025",
    result: "Design system, 40+ screens",
    gradient: "linear-gradient(135deg, #3b0764 0%, #6d28d9 55%, #a855f7 100%)",
    challenge:
      "ITS Daigh's product had grown feature-by-feature with no consistent design system — every new screen looked like a different product.",
    solutionText:
      "We built a full design system — tokens, components, and usage guidelines — then applied it across 40+ existing screens for a consistent product experience.",
    keyFeatures: ["Component library", "Design tokens", "Usage guidelines", "40+ screens redesigned"],
    technologies: ["Figma", "React", "Tailwind CSS"],
  },
  {
    slug: "shree-balaji-events",
    name: "Shree Balaji Events",
    client: "Shree Balaji Events",
    industry: "Photography / Events",
    category: "Websites",
    services: ["Web Development", "Branding & Design"],
    year: "2024",
    result: "2x inbound inquiries",
    gradient: "linear-gradient(135deg, #451a03 0%, #b45309 55%, #f59e0b 100%)",
    challenge: "A portfolio that undersold genuinely strong photography work with a cluttered, slow-loading gallery.",
    solutionText:
      "A cinematic, image-first portfolio site with an optimized gallery and a simple inquiry form tied directly to WhatsApp.",
    keyFeatures: ["Cinematic gallery", "WhatsApp inquiry integration", "Fast image delivery"],
    technologies: ["Next.js", "Cloudinary"],
  },
  {
    slug: "avdhut-visuals",
    name: "Avdhut Visuals",
    client: "Avdhut Visuals",
    industry: "Creative / Portfolio",
    category: "Branding",
    services: ["Branding & Design", "Web Development"],
    year: "2025",
    result: "Full brand + site relaunch",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 55%, #4f46e5 100%)",
    challenge: "An outdated portfolio site that didn't reflect the quality of current client work.",
    solutionText: "A full brand refresh and portfolio rebuild designed to let the visual work speak first.",
    keyFeatures: ["Brand refresh", "Portfolio rebuild", "Case study templates"],
    technologies: ["Next.js", "Figma"],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export const CATEGORIES = ["All", "Websites", "E-commerce", "SaaS", "Branding", "SEO"] as const;
