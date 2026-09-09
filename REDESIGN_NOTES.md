# Aventra Creative — Premium Redesign

## What changed

- Rebuilt the homepage hero into a high-contrast, editorial agency experience.
- Added a layered grid, ambient lighting, rotating growth signal, floating proof card, and animated headline entrance.
- Added scroll-linked parallax in the hero and a global reading-progress indicator.
- Added a subtle pointer-following ambient glow for desktop users.
- Rebuilt services as an asymmetric premium bento grid with progressive reveal, hover lift, edge glow, and stronger typography.
- Preserved existing routes, CMS/data hooks, metadata, contact flows, responsive navigation, dark/light theme behavior, and project data.
- Kept motion accessible through `prefers-reduced-motion` / Framer Motion reduced-motion support.
- Preserved native smooth anchor scrolling and existing page transitions.

## Main files

- `src/components/marketing/hero.tsx`
- `src/components/marketing/core-services.tsx`
- `src/components/ui/site-experience.tsx`
- `src/app/premium.css`
- `src/app/layout.tsx`

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Validation note

The supplied project was visually reviewed at 1440px desktop and 390px mobile widths. Dependency installation could not be completed inside the delivery sandbox because outbound package-registry access was unavailable; run `npm install && npm run check` in a network-enabled environment before deployment.
