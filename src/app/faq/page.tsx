import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";
import { FaqAccordion } from "@/components/marketing/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about working with Aventra Creative.",
  alternates: { canonical: "/faq" },
};

export const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are completed within 2–5 weeks, depending on project complexity, content availability, and feedback turnaround time.",
  },
  {
    q: "How much does a website cost?",
    a: "Website pricing depends on the features and scope of your project. We offer affordable packages for startups, businesses, eCommerce stores, and custom web applications.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes. Every website includes technical SEO, fast loading speeds, proper heading structure, meta tags, image optimization, sitemap generation, and schema markup.",
  },
  {
    q: "Can my website rank on Google?",
    a: "Yes. We build websites following SEO best practices. Higher rankings also depend on ongoing SEO, quality content, backlinks, and competition.",
  },
  {
    q: "Do you offer Local SEO services?",
    a: "Yes. We optimize your website and Google Business Profile to help you rank for local searches in your target city and surrounding areas.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can redesign outdated websites with a modern UI, improved performance, better SEO, and enhanced user experience while preserving your existing content if required.",
  },
  {
    q: "Do you build eCommerce websites?",
    a: "Yes. We create secure online stores with product management, payment gateway integration, inventory management, and order tracking.",
  },
  {
    q: "Do you develop custom web applications?",
    a: "Yes. We build custom business portals, dashboards, booking systems, CRM solutions, admin panels, and SaaS platforms tailored to your business.",
  },
  {
    q: "Which technologies do you use?",
    a: "We build websites using modern technologies like Next.js, React, TypeScript, Tailwind CSS, Node.js, MongoDB, Sanity CMS, and other industry-standard tools.",
  },
  {
    q: "Can I update my website myself?",
    a: "Yes. We provide CMS access so you can easily update text, images, blogs, and other content without technical knowledge.",
  },
  {
    q: "Do you provide domain and hosting?",
    a: "Yes. We can help you purchase, configure, and manage your domain and hosting, or work with your existing provider.",
  },
  {
    q: "Will my website be secure?",
    a: "Yes. We implement SSL, security best practices, secure authentication, regular updates, and protection against common vulnerabilities.",
  },
  {
    q: "Will my website load fast?",
    a: "Performance is one of our priorities. We optimize images, code, caching, and Core Web Vitals to ensure fast loading times.",
  },
  {
    q: "Can you integrate payment gateways?",
    a: "Yes. We integrate secure payment solutions including Razorpay, Stripe, PayPal, and other supported gateways.",
  },
  {
    q: "Can you connect WhatsApp and social media?",
    a: "Yes. We integrate WhatsApp chat, Facebook, Instagram, LinkedIn, YouTube, Google Maps, and other business tools.",
  },
  {
    q: "Do you create business email addresses?",
    a: "Yes. We can help set up professional email addresses using your domain, such as contact@yourcompany.com.",
  },
  {
    q: "Do you offer website maintenance?",
    a: "Yes. We provide ongoing maintenance, security updates, backups, performance monitoring, and technical support through monthly plans.",
  },
  {
    q: "What happens after my website goes live?",
    a: "After launch, we monitor your website, fix any initial issues, provide support, and guide you on managing your content.",
  },
  {
    q: "Do you provide support after project completion?",
    a: "Yes. Every project includes post-launch support. Extended maintenance and support plans are also available.",
  },
  {
    q: "Can you help with Google Search Console and Analytics?",
    a: "Yes. We configure Google Search Console, Google Analytics, sitemap submission, and performance tracking.",
  },
  {
    q: "Can you create landing pages for marketing campaigns?",
    a: "Yes. We design high-converting landing pages optimized for Google Ads, Meta Ads, and lead generation campaigns.",
  },
  {
    q: "Will my website include a contact form?",
    a: "Yes. Every business website includes secure contact forms with email notifications and spam protection.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. We work remotely with clients across India and internationally through online meetings and collaborative project management.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, local businesses, restaurants, hotels, healthcare providers, educational institutes, real estate companies, agencies, photographers, and many other industries.",
  },
  {
    q: "What is your website development process?",
    a: "Our process includes consultation, planning, UI/UX design, development, testing, SEO optimization, launch, and ongoing support.",
  },
  {
    q: "Can you improve my existing website's SEO?",
    a: "Yes. We perform technical SEO audits, optimize on-page SEO, improve Core Web Vitals, fix indexing issues, and implement structured data.",
  },
  {
    q: "How do payments work?",
    a: "Most projects require a 50% advance payment before development begins, with the remaining balance due before final deployment. Larger projects can be divided into milestone payments.",
  },
  {
    q: "Why should I choose Aventra Creative?",
    a: "We build fast, SEO-optimized, modern websites focused on business growth, lead generation, excellent user experience, and long-term scalability using the latest web technologies.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Find answers to common questions."
        crumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
      />
      <section className="bg-[var(--bg)] pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FaqAccordion items={FAQS} />
        </div>
      </section>
      <PageCta
        title="Still Have Questions?"
        description="We're here to help you."
      />
    </>
  );
}
