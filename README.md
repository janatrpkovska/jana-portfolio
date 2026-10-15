# Jana Trpkovska — Portfolio

Personal portfolio site. Next.js 14 (App Router), TypeScript, Tailwind CSS. No CMS, no database, no backend — content lives in `src/data/site.ts`.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Almost everything on the page — hero copy, about text, project descriptions, skills, education, contact links — comes from `src/data/site.ts`. Edit that file and the page updates; you generally won't need to touch the components.

Notable fields left empty on purpose, pending real information:

- `person.email`, `person.linkedin`, `person.cvUrl` — contact links only render when these are set.
- `education` — the Education section only renders once this array has entries.

## Build

```bash
npm run build
npm run start
```

## Project images

Lit Candle screenshots live in `public/images/lit-candle/`. Other projects currently use a generated placeholder visual (see `src/components/ProjectVisual.tsx`) until real screenshots are supplied — drop images into `public/images/<project>/` and point `visual.images` at them in `site.ts` to switch a project over to real screenshots.
