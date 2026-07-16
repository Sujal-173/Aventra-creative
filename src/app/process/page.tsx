import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";
import { ProcessTimeline } from "@/components/marketing/process-timeline";

export const metadata: Metadata = {
  title: "Our Process",
  description: "A proven delivery process that keeps projects on track from discovery through launch and beyond.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="Our process"
        description="A clear delivery process that keeps every project moving forward and every stakeholder aligned."
        crumbs={[{ name: "Home", href: "/" }, { name: "Process" }]}
      />
      <ProcessTimeline />
      <PageCta title="Ready to move forward with your project?" description="We’ll help you turn your brief into a polished digital experience that delivers results." />
    </>
  );
}
