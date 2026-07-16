export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  category: "Websites" | "E-commerce" | "SaaS" | "Branding" | "SEO";
  services: string[];
  year: string;
  result: string;
  overview: string;
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
    overview:
      "Built a refined hospitality website that turns browsers into bookings with polished brand storytelling and a seamless reservation path.",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 55%, #6d28d9 100%)",
    challenge:
      "Yashraj Palace had no direct booking path, which meant guests lost trust and the property lost commission-free revenue.",
    solutionText:
      "We launched a premium, mobile-first website with live room availability, secure payments, and guest intake automation that reduced reservation friction and boosted direct bookings.",
    keyFeatures: [
      "Live room availability",
      "Secure booking flow",
      "Mobile-first guest experience",
      "CMS-powered content management",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Razorpay", "Sanity CMS"],
    coverImageUrl:
      "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%231e1b4b'/%3E%3Cstop offset='1' stop-color='%236d28d9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ctext x='60' y='180' font-size='56' fill='white' font-family='Inter' font-weight='700'%3EYashraj Palace%3C/text%3E%3Ctext x='60' y='255' font-size='28' fill='white' opacity='0.85'%3EHospitality %C2%B7 Booking platform%3C/text%3E%3C/svg%3E",
    coverImageAlt: "Yashraj Palace hospitality website design",
    projectUrl: "https://yashrajpalace.com",
    featured: true,
    orderRank: 1,
  },
  {
    slug: "vardo-grow",
    name: "Vardo Grow",
    client: "Vardo Grow",
    industry: "E-commerce",
    category: "E-commerce",
    services: ["Web Development", "SEO"],
    year: "2025",
    result: "3.1x conversion rate",
    overview:
      "Redesigned the storefront with clearer navigation, shipping transparency, and a checkout experience that keeps buyers moving to purchase.",
    gradient: "linear-gradient(135deg, #052e16 0%, #065f46 55%, #059669 100%)",
    challenge:
      "Vardo Grow’s storefront lost buyers at checkout because shipping fees appeared too late and the purchase path felt uncertain.",
    solutionText:
      "We redesigned the store with a clear product hierarchy, instant shipping transparency, and a simplified two-step checkout that retains customers through payment.",
    keyFeatures: [
      "Two-step checkout",
      "Transparent shipping pricing",
      "Mobile-first product discovery",
      "Performance-optimized storefront",
    ],
    technologies: ["Next.js", "Razorpay", "Sanity CMS"],
    coverImageUrl:
      "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23051f1c'/%3E%3Cstop offset='1' stop-color='%2305a67d'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ctext x='60' y='180' font-size='56' fill='white' font-family='Inter' font-weight='700'%3EVardo Grow%3C/text%3E%3Ctext x='60' y='255' font-size='28' fill='white' opacity='0.85'%3ECommerce %C2%B7 3.1x conversion%3C/text%3E%3C/svg%3E",
    coverImageAlt: "Vardo Grow e-commerce website design",
    projectUrl: "https://vardogrow.com",
    featured: true,
    orderRank: 2,
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
    overview:
      "Prepared a search-first site architecture and local landing pages that position the solar installer where buyers are searching.",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 55%, #2563eb 100%)",
    challenge:
      "Solar service buyers were searching locally, but Shubham Traders never appeared in the top results.",
    solutionText:
      "We rebuilt their website structure with search-focused landing pages, schema markup, and a local visibility strategy that captured buyers before competitors.",
    keyFeatures: [
      "Local SEO optimization",
      "Search-driven landing pages",
      "Google Business integration",
      "Monthly performance reporting",
    ],
    technologies: ["Next.js", "Schema.org", "Google Search Console"],
    coverImageUrl:
      "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230a3254'/%3E%3Cstop offset='1' stop-color='%231b6ad8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ctext x='60' y='180' font-size='56' fill='white' font-family='Inter' font-weight='700'%3EShubham Traders Solar%3C/text%3E%3Ctext x='60' y='255' font-size='28' fill='white' opacity='0.85'%3ESEO %C2%B7 Local visibility%3C/text%3E%3C/svg%3E",
    coverImageAlt: "Shubham Traders Solar SEO project",
    projectUrl: "https://shubhamtraders.in",
    featured: true,
    orderRank: 3,
  },
  {
    slug: "its-daigh",
    name: "ITS Daigh",
    client: "ITS Daigh",
    industry: "Technology",
    category: "Branding",
    services: ["Branding & Design", "Web Development"],
    year: "2025",
    result: "Design system, 40+ screens",
    overview:
      "Created a consistent product brand and modular UI system across 40+ screens to support faster launches and higher confidence among enterprise buyers.",
    gradient: "linear-gradient(135deg, #3b0764 0%, #6d28d9 55%, #a855f7 100%)",
    challenge:
      "ITS Daigh had a product experience that felt inconsistent across screens, slowing onboarding and lowering trust.",
    solutionText:
      "We created a reusable design system and refreshed 40+ screens with consistent layout, interaction patterns, and brand clarity.",
    keyFeatures: [
      "Design system",
      "Component library",
      "Visual consistency",
      "Brand guidelines",
    ],
    technologies: ["Figma", "React", "Tailwind CSS"],
    coverImageUrl:
      "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23350277'/%3E%3Cstop offset='1' stop-color='%23b05df7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ctext x='60' y='180' font-size='56' fill='white' font-family='Inter' font-weight='700'%3EITS Daigh%3C/text%3E%3Ctext x='60' y='255' font-size='28' fill='white' opacity='0.85'%3EBranding %C2%B7 Product system%3C/text%3E%3C/svg%3E",
    coverImageAlt: "ITS Daigh branding and design system",
    projectUrl: "https://itsdaigh.com",
    featured: false,
    orderRank: 4,
  },
  {
    slug: "shree-balaji-events",
    name: "Shree Balaji Events",
    client: "Shree Balaji Events",
    industry: "Events & Photography",
    category: "Websites",
    services: ["Web Development", "Branding & Design"],
    year: "2024",
    result: "2x inbound inquiries",
    overview:
      "Repositioned the brand with a cinematic portfolio site, faster lead capture, and clear next-step prompts for premium clients.",
    gradient: "linear-gradient(135deg, #451a03 0%, #b45309 55%, #f59e0b 100%)",
    challenge:
      "Their website failed to showcase spectacular event photography and made it hard for clients to inquire quickly.",
    solutionText:
      "We delivered an image-first portfolio site with a fast gallery, clear pricing entry points, and a WhatsApp inquiry flow that doubled enquiries.",
    keyFeatures: [
      "Cinematic gallery",
      "WhatsApp inquiry integration",
      "Fast image delivery",
      "Conversion-focused contact flow",
    ],
    technologies: ["Next.js", "Cloudinary"],
    coverImageUrl:
      "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23320f00'/%3E%3Cstop offset='1' stop-color='%23f59e0b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ctext x='60' y='180' font-size='56' fill='white' font-family='Inter' font-weight='700'%3EShree Balaji Events%3C/text%3E%3Ctext x='60' y='255' font-size='28' fill='white' opacity='0.85'%3EEvents %C2%B7 Portfolio relaunch%3C/text%3E%3C/svg%3E",
    coverImageAlt: "Shree Balaji Events website design",
    projectUrl: "https://shreebalajievents.com",
    featured: false,
    orderRank: 5,
  },
  {
    slug: "avdhut-visuals",
    name: "Avdhut Visuals",
    client: "Avdhut Visuals",
    industry: "Creative Studio",
    category: "Branding",
    services: ["Branding & Design", "Web Development"],
    year: "2025",
    result: "Full brand + site relaunch",
    overview:
      "Refreshed the creative studio identity and launched a portfolio site built to showcase work, streamline discovery, and drive qualified inquiries.",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 55%, #4f46e5 100%)",
    challenge:
      "A creative studio with exceptional work was held back by a dated portfolio and weak storytelling.",
    solutionText:
      "We refreshed the brand, rebuilt the portfolio, and created a website that lets the work sell itself with stronger narrative and better project hierarchy.",
    keyFeatures: [
      "Brand refresh",
      "Portfolio rebuild",
      "Case study templates",
      "Service messaging",
    ],
    technologies: ["Next.js", "Figma"],
    coverImageUrl:
      "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%231e1b4b'/%3E%3Cstop offset='1' stop-color='%234f46e5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ctext x='60' y='180' font-size='56' fill='white' font-family='Inter' font-weight='700'%3EAvdhut Visuals%3C/text%3E%3Ctext x='60' y='255' font-size='28' fill='white' opacity='0.85'%3ECreative %C2%B7 Brand relaunch%3C/text%3E%3C/svg%3E",
    coverImageAlt: "Avdhut Visuals brand relaunch",
    projectUrl: "https://avdhutvisuals.com",
    featured: false,
    orderRank: 6,
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export const CATEGORIES = ["All", "Websites", "E-commerce", "SaaS", "Branding", "SEO"] as const;
