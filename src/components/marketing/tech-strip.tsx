const TOOLS = ["Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Vercel", "Figma", "Framer Motion", "GSAP"];

export function TechStrip() {
  return (
    <div className="border-b border-[var(--line)] bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="label-mono mb-5 text-[var(--ink-faint)]">Built on a modern, production-grade stack</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {TOOLS.map((tool) => (
            <span key={tool} className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-[var(--ink-faint)] transition-colors hover:text-[var(--ink)]">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
