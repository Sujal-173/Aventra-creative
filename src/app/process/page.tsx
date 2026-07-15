import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";
import { ProcessTimeline } from "@/components/marketing/process-timeline";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Our proven process ensures quality results — from discovery to launch and ongoing support.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="Our Process"
        description="Our proven process ensures quality results, from first call to launch and beyond."
        crumbs={[{ name: "Home", href: "/" }, { name: "Process" }]}
      />
      <ProcessTimeline />
      <PageCta title="Ready to Start Your Project?" description="Let's turn your ideas into reality." />
    </>
  );
}
