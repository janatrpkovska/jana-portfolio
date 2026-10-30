# Jana Trpkovska — Developer Portfolio

Personal developer portfolio showcasing projects in full-stack web development, AI-assisted workflows, data visualization, and computer vision.

**[View live portfolio](https://jana-portfolio-sigma.vercel.app)** · [GitHub profile](https://github.com/janatrpkovska) · [LinkedIn](https://www.linkedin.com/in/jana-trpkovska-54689521b/)

## About this site

Built as a single-page portfolio with sections for my background, development approach, selected projects, technical skills, education, and contact information. The content is maintained in one TypeScript file so project details and links are easy to update.

**Portfolio tech stack:** Next.js 15 (App Router), React 18, TypeScript, and Tailwind CSS. Hosted on Vercel.

> The technologies listed in the projects below describe those individual projects, not dependencies of this portfolio website.

## Selected projects

| Project | Focus | Links |
| --- | --- | --- |
| **Lit Candle** | E-commerce and admin system for my handmade candle business, including product customization, orders, and inventory | [Case study / code](https://github.com/janatrpkovska/lit-candle-ecommerce-system) |
| **OpenDataScope** | Research and interactive visualizations comparing North Macedonia's open-data ecosystem with international portals | [Live demo](https://open-data-scope.vercel.app) · [GitHub](https://github.com/janatrpkovska/OpenDataScope) |
| **Mona Mayhem** | Retro arcade GitHub contribution battle; started at GitHub Copilot Dev Days and extended with extra features | [Play](https://mona-mayhem.vercel.app) · [GitHub](https://github.com/janatrpkovska/mona-mayhem) |
| **RoadWatch** | Interactive traffic-scene editor with a Flask, YOLOv8, and OpenCV computer-vision backend | [GitHub](https://github.com/janatrpkovska/RoadWatch) |
| **Puzzle Bloom** | Multilingual interactive MVP built during a 48-hour solo hackathon | [Live project](https://puzzle-bloom-mvp-kj6k.bolt.host/) |
| **Guess the Flag** | Flag quiz built with Vue 3, Vite, and Firebase Firestore | Featured in the portfolio |

**Team project:** UniVibe — a university event-discovery platform. My contributions included category browsing pages and chatbot functionality. Project descriptions on the website distinguish my work from the team's overall scope.

## Run locally

**Prerequisites:** Node.js and npm.

```bash
git clone https://github.com/janatrpkovska/jana-portfolio.git
cd jana-portfolio
npm install
npm run dev
```

Open **http://localhost:3000**.

### Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run typecheck` | Run the TypeScript type checker |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Update portfolio content

Most content is defined in [`src/data/site.ts`](src/data/site.ts), including:

- Introduction, About, and How I Work sections
- Solo and team projects, descriptions, technology stacks, and links
- Skills, education, and contact details

To add a project, create an entry in `mainProjects` or `teamProjects` in `src/data/site.ts` with its role, highlights, stack, and optional links. The project cards are rendered by [`src/components/Projects.tsx`](src/components/Projects.tsx) and [`src/components/ProjectCard.tsx`](src/components/ProjectCard.tsx).

Project visuals are configured through the `visual` field and rendered by [`src/components/ProjectVisual.tsx`](src/components/ProjectVisual.tsx). Supported layouts include:

- `screenshots` for multiple image paths
- `gallery` for images with individual sizing and aspect ratios
- `image` for a single screenshot or logo
- `placeholder` when no image is available

Images are stored under `public/` and referenced with root-relative URLs, for example `/images/mona-mayhem/mona-mayhem-preview.png`.

The GitHub and LinkedIn links are configured; the CV link is intentionally hidden until a CV URL is added.

## Deployment

The portfolio is deployed on [Vercel](https://vercel.com/) and linked to this GitHub repository. Changes pushed to the connected `main` branch trigger a production deployment.

**Live URL:** https://jana-portfolio-sigma.vercel.app

---

Built and maintained by [Jana Trpkovska](https://github.com/janatrpkovska).
