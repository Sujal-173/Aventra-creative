# Aventra Creative — Product Architecture

**Status:** Pre-build spec. Every decision below has a reason attached — no default was accepted without being checked against the brief first.

---

## 1. The one thing this site has to prove

A one-person, one-year-old agency is asking to be hired to build other companies' most important digital asset. The site's only real job is to make that credible in the first eight seconds. That means:

- No stock-agency visual language (gradient blobs, generic "01 02 03" cards, gorgeous-but-empty hero animations).
- The founder's engineering skill has to be *visible in the craft of the site itself*, not just claimed in a bio paragraph.
- Every animation, every layout choice must read as **built**, not **templated**.

That constraint becomes the design signature (below).

---

## 2. Design system

### 2.1 Palette (locked to brief, refined to avoid the generic-purple-SaaS look)

The brief specifies purple/indigo/blue on white + a near-black (#09090B) dark section. The failure mode here is "generic AI purple SaaS gradient." The fix: **use purple as a rare, precise accent — not a wash.** Most surfaces stay near-neutral; purple appears only at decision points (CTAs, active states, the one signature visual).

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Base canvas |
| `--bg-dark` | `#09090B` | Dark sections (About, footer, code-forward moments) |
| `--ink` | `#111827` | Primary text |
| `--ink-muted` | `#4B5563` | Secondary text |
| `--surface` | `#FAFAF9` | Card/section backgrounds, very subtle warmth to avoid clinical blue-white |
| `--primary` | `#6D28D9` | Purple — CTAs, links, active states only |
| `--primary-deep` | `#4C1D95` | Purple hover/pressed |
| `--indigo` | `#4338CA` | Secondary accent — used in the "build log" signature system |
| `--accent-blue` | `#2563EB` | Tertiary — data viz, tech-stack section only |
| `--line` | `#E5E7EB` | Hairline dividers |
| `--success` | `#059669` | Form success, uptime/status indicators |

No default gradient backgrounds. Gradient use is restricted to one spot: a slow-moving mesh gradient behind the hero, driven by mouse position, capped at 8% opacity over white.

### 2.2 Typography

- **Space Grotesk** — Display/headings. Used large, tight tracking, restrained (this is the "characterful" face).
- **Inter** — Body copy, UI labels. Neutral workhorse, high legibility at small sizes.
- **JetBrains Mono** (replacing generic "Satoshi" ask with a more deliberate choice) — used for the *build-log signature system* only: version tags, timestamps, status strings, code-like labels. This is the typeface doing structural work, not decoration.

Type scale (fluid, `clamp()`-based):
- Display XL: `clamp(2.75rem, 6vw, 6rem)` — homepage hero only
- Display L: `clamp(2.25rem, 4.5vw, 4rem)` — section headers
- Display M: `clamp(1.5rem, 2.5vw, 2.25rem)`
- Body L: `1.25rem / 1.6`
- Body: `1rem / 1.65`
- Label/mono: `0.8125rem`, uppercase, `0.08em` tracking

### 2.3 Signature system: "Build Log"

Instead of numbered process cards (01/02/03 — flagged as a default to avoid unless order is genuinely load-bearing), Aventra's structural device is a **live build-log aesthetic**: the idea that everything on the site was *shipped*, like a commit. This is grounded in who Sujal actually is (a developer) rather than borrowed from an agency template.

Concretely:
- Process steps render as commit entries: `feat(discovery): define scope → collaborator, timestamp, status pill`
- Case studies open with a terminal-style status line: `deploying yashraj-palace.aventra.dev … ✓ LIVE`
- The footer includes a real (or realistic simulated) "last deployed" timestamp
- Section eyebrows use monospace status-pill styling (`// 002 process`) instead of generic numbered badges — and only where sequence is real (the actual 8-stage process timeline). Elsewhere (services, portfolio) we do NOT force numbering.

This is the one idea "spent" boldly, per the design skill's restraint principle — everything else stays quiet: generous whitespace, soft 1px borders, no drop-shadowed 3D cards, no confetti of icons.

### 2.4 Motion principles

- Page-load: a single orchestrated reveal (logo mark assembles → nav fades in → hero text does a 2-line staggered mask-reveal). One moment, not a cascade of separate animations.
- Scroll: GSAP ScrollTrigger for the Process timeline (line draws as you scroll, commit nodes light up), Framer Motion for simpler viewport-triggered fades/slides elsewhere.
- Hover: magnetic buttons on primary CTAs only (not every button — magnetic-everything is a template tell). Portfolio cards get a subtle 4° tilt + video preview swap, not full 3D.
- Cursor: custom cursor only on Portfolio/Case Study pages where hover-preview context helps; default system cursor everywhere else. A custom cursor sitewide is a common over-animation tell.
- Respect `prefers-reduced-motion` globally — all GSAP/Framer effects have a static fallback.

---

## 3. Tech stack — decisions and reasons

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15, App Router | RSC for fast LCP on content-heavy pages (case studies, blog); file-based routing matches the large sitemap cleanly |
| Language | TypeScript, strict mode | Contract safety across CMS content shapes and form schemas |
| Styling | Tailwind CSS + CSS variables for the token system above | Utility speed without losing design-token discipline |
| Components | shadcn/ui as a base, heavily re-skinned | Accessible primitives (Radix under the hood) without importing a "look" |
| Motion | Framer Motion (component-level) + GSAP/ScrollTrigger (timeline/scroll-driven only) | Framer for React-idiomatic viewport animation; GSAP specifically where scroll-scrubbed timelines need frame-level control Framer doesn't give cleanly |
| Forms | React Hook Form + Zod | Client+server shared validation schema, minimal re-renders |
| CMS | Sanity | Real content modeling (portfolio, case studies, blog, testimonials, FAQs) editable without a redeploy; generous free tier fits solo-agency scale |
| Media | Cloudinary | On-the-fly responsive image/video transforms — critical for the portfolio hover-video pattern without bloating LCP |
| Email | Resend | Transactional contact-form email, good Next.js server-action integration |
| Hosting | Vercel | Native Next.js ISR/Edge support, image optimization, analytics |
| Analytics | GA4 + GTM | Standard, client requirement-friendly |
| SEO | next-seo + Metadata API + manual JSON-LD | Metadata API for per-route metadata; JSON-LD hand-written per schema type (Organization, Service, FAQ, Article, Review, LocalBusiness) since no library gets these fully right |

**Spam/rate-limiting for contact form:** honeypot field + timing check + Upstash Redis rate limit on the server action (not a visible CAPTCHA — CAPTCHAs hurt conversion; invisible protections first, visible fallback only if abuse detected).

---

## 4. Information architecture (16 routes)

```
/                          Home
/services                  Services overview (bento, not cards)
/services/[slug]           Service detail (long-form landing page)
/portfolio                 Portfolio (filterable, search)
/portfolio/[slug]          Case study (magazine layout)
/about                     About / founder story
/process                   Process (animated build-log timeline)
/pricing                   Pricing (toggle + ROI calculator)
/blog                      Blog index (magazine style)
/blog/[slug]               Article
/contact                   Contact (split layout, form + map)
/faq                       FAQ (accordion, searchable)
/careers                   Careers (freelance/future roles)
/testimonials              Not a dedicated nav item — testimonials live as
                            components reused across Home/Services/Case
                            Study/Footer, per the brief's own instruction.
                            (Kept as a CMS collection, not a route.)
/404                       Not-found (creative, on-brand, one small easter egg)
```

Global: Navbar (mega-menu for Services), Footer (editorial, dark), Command menu (⌘K quick nav — fits a dev-led agency's positioning, low cost to build with `cmdk`).

---

## 5. Folder structure

```
src/
  app/
    (marketing)/
      page.tsx                 # Home
      services/page.tsx
      services/[slug]/page.tsx
      portfolio/page.tsx
      portfolio/[slug]/page.tsx
      about/page.tsx
      process/page.tsx
      pricing/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx
      contact/page.tsx
      faq/page.tsx
      careers/page.tsx
    api/
      contact/route.ts
      newsletter/route.ts
    sitemap.ts
    robots.ts
    not-found.tsx
    layout.tsx
  components/
    ui/            # shadcn primitives, re-skinned
    marketing/      # Hero, BentoServices, ProcessTimeline, CaseStudyCard...
    forms/
    seo/           # JSON-LD builders per schema type
  lib/
    sanity/        # client, queries, types
    validations/   # zod schemas
    utils/
  content/         # local fallback content during CMS setup
sanity/
  schemas/         # portfolio, caseStudy, service, post, testimonial, faq, author, category
```

---

## 6. Performance budget (how we actually hit the Lighthouse targets)

- LCP < 2s: hero text is real HTML (not an image/canvas paint), critical font subset preloaded, hero background gradient is CSS not a rendered image.
- CLS < 0.05: every image/video has explicit `width`/`height` or `aspect-ratio`, fonts loaded with `font-display: swap` + matched fallback metrics.
- INP < 150ms: heavy GSAP timelines are code-split and only hydrate when the Process/Case Study route mounts; no motion library loaded on routes that don't need it.
- Images via `next/image` + Cloudinary loader, AVIF/WebP, real project screenshots (no AI-placeholder look, per your brief) — this requires source assets from you when we get to Portfolio/Case Study.

---

## 7. What "production-ready" honestly requires from here

This spec is buildable, but the full scope (16 routes, Sanity schemas + populated content, contact backend, full animation pass, 100/100/100/100 Lighthouse across every route) is a multi-week build, not one response. Building it well means going in focused passes rather than scaffolding everything shallowly at once — shallow scaffolding is exactly what produces the "generic template" feeling this brief is explicitly trying to avoid.

Proposed build order (each pass ships something real and reviewable):

1. **Foundation** — Next.js 15 + TS + Tailwind config with the token system above, base layout, Navbar, Footer, shadcn setup, fonts.
2. **Homepage** — the highest-leverage page; sets the visual language everything else inherits.
3. **Services + Service Detail** — core conversion path.
4. **Portfolio + Case Study** — needs your real project assets to avoid placeholder-itis.
5. **Process, About, Pricing**
6. **Blog + Sanity CMS wiring**
7. **Contact backend, SEO/schema pass, accessibility audit, performance pass**

I'd rather build pass 1–2 properly, in real code you can run, than generate all 16 pages as static-feeling shells.
