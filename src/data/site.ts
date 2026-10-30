// Single source of truth for portfolio copy and links.
// Only verified, defensible claims live here — see the audit notes
// delivered alongside this project for what was checked and how.

export type CTA = {
  label: string;
  href: string;
};

export type ImageFit = "cover" | "contain";

export type ProjectImage = {
  src: string; // public/ path
  alt: string;
  fit: ImageFit; // "cover" fills the frame (crops edges); "contain" shows the whole image, letterboxed
  objectPosition?: string; // CSS object-position, defaults to "center"
  aspectRatio?: string; // e.g. "1919 / 803" — sizes the frame to the image so nothing is cropped or letterboxed
};

export type ProjectVisual = {
  type: "screenshots" | "gallery" | "image" | "placeholder";
  images?: string[]; // public/ paths — Lit Candle's multi-shot gallery only
  gallery?: ProjectImage[]; // multi-shot gallery where each image keeps its own aspect ratio; first is the main image
  image?: ProjectImage; // single real image (screenshot or logo) — RoadWatch, Puzzle Bloom, Guess the Flag
  icon: "candle" | "road" | "puzzle" | "flag" | "chat" | "paw" | "chart";
};

export type Project = {
  slug: string;
  name: string;
  kind: "solo" | "team";
  eyebrow: string; // short context line
  description: string;
  role: string;
  highlights: string[];
  stack: string[];
  cta?: CTA;
  secondaryCta?: CTA; // optional second link, e.g. source code next to a live demo
  secondaryNote?: string; // e.g. caveat about scope
  visual: ProjectVisual;
  contributionStatus?: "confirmed" | "needs-confirmation";
};

export const person = {
  name: "Jana Trpkovska",
  title: "Junior Full-Stack Developer",
  subtitle: "AI-Assisted Development",
  tagline:
    "I build practical web applications — from the customer-facing interface to the business logic behind it — and use AI-assisted tools to prototype and iterate faster.",
  github: "https://github.com/janatrpkovska",
  email: "trpkovskaj@yahoo.com" as string | null,
  linkedin: "https://www.linkedin.com/in/jana-trpkovska-54689521b/" as string | null,
  // CV not ready yet — left null on purpose. Button stays hidden until this is set.
  cvUrl: null as string | null,
};

export const about = {
  paragraphs: [
    "I'm a junior full-stack developer working across frontend, server logic and databases. I'd rather build a practical system end to end than a UI demo on its own — Lit Candle, a small business I run myself, gave me a real set of workflows (orders, inventory, customer communication) to turn into software instead of a hypothetical brief.",
    "I use AI-assisted development for prototyping, debugging and faster iteration. That doesn't mean accepting whatever gets generated — I read the code it produces, test it, and fix what's wrong before it ships. Guess the Flag was my first project built this way; Lit Candle and RoadWatch are where I use the same workflow on larger, more consequential problems.",
  ],
};

export const howIWork = {
  heading: "How I work",
  steps: [
    "Start from a real problem or idea",
    "Prototype with AI assistance",
    "Read and understand the generated implementation",
    "Integrate it into the application",
    "Debug and test",
    "Iterate",
  ],
  note: "I use AI to accelerate development while staying responsible for understanding, testing, and improving the implementation.",
};

export const mainProjects: Project[] = [
  {
    slug: "lit-candle",
    name: "Lit Candle",
    kind: "solo",
    eyebrow: "Real small business I own — handmade candles",
    description:
      "A full storefront and admin system built around how my own candle business actually runs: products, custom scents and colors, made-to-order stock, orders, and customer communication. Built solo, from database schema to UI.",
    role: "Designed and built solo — database schema, business logic, storefront, admin tools, and the automated test suite.",
    highlights: [
      "Public storefront plus a protected admin area covering products, taxonomy, scents, colors, and bulk editing",
      "Order status changes go through a fixed transition table enforced on the server, not just hidden or shown in the UI",
      "Bouquets are a dedicated product type with their own sizes, pricing, and box inventory — not assembled from other catalog items",
      "Order confirmation never depends on email succeeding: the order is committed to the database first, email sent after",
      "721/721 automated tests passing, alongside a clean TypeScript typecheck, ESLint, and production build",
    ],
    stack: ["Next.js 14", "TypeScript", "React", "Tailwind CSS", "PostgreSQL", "Prisma", "Resend"],
    cta: {
      label: "View Case Study",
      href: "https://github.com/janatrpkovska/lit-candle-ecommerce-system",
    },
    visual: {
      type: "screenshots",
      images: [
        "/images/lit-candle/01-storefront-home.png",
        "/images/lit-candle/02-catalog.png",
        "/images/lit-candle/03-product-page.png",
        "/images/lit-candle/04-cart-checkout.png",
        "/images/lit-candle/05-order-tracking.png",
        "/images/lit-candle/06-admin-dashboard.png",
      ],
      icon: "candle",
    },
  },
  {
    slug: "opendatascope",
    name: "OpenDataScope",
    kind: "solo",
    eyebrow: "University project — Introduction to Data Science",
    description:
      "A research and analytics web application comparing North Macedonia's open-data ecosystem with international benchmarks, featuring interactive data visualizations, country comparisons, documented methodology, and reproducible data validation.",
    role: "Author and developer — research question, data collection and analysis, and the web application.",
    highlights: [
      "Compares North Macedonia's portal (data.gov.mk) with six national portals, with the EU portal shown separately as an aggregator",
      "Interactive charts with chart/table views, plus a Compare page for side-by-side portal comparison",
      "Comparisons are labelled Direct, Partial or Context only, because portals count different units",
      "Documented methodology, source register, and a fixed, timestamped research snapshot",
      "Frozen local CSV data validated at build time, with SHA-256 checksums and downloadable tables",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    cta: {
      label: "Live Demo",
      href: "https://open-data-scope.vercel.app",
    },
    secondaryCta: {
      label: "GitHub",
      href: "https://github.com/janatrpkovska/OpenDataScope",
    },
    visual: {
      type: "gallery",
      icon: "chart",
      gallery: [
        {
          src: "/opendatascope-macedonia.png",
          alt: "OpenDataScope North Macedonia page: bar chart comparing theme shares of North Macedonian datasets with the EU portal",
          fit: "cover",
          aspectRatio: "1919 / 900",
        },
        {
          src: "/opendatascope-compare.png",
          alt: "OpenDataScope Compare page: side-by-side comparison of North Macedonia, the United Kingdom, the United States and the Netherlands",
          fit: "cover",
          aspectRatio: "1919 / 870",
        },
        {
          src: "/opendatascope-homepage.png",
          alt: "OpenDataScope homepage showing the research question and key findings",
          fit: "cover",
          aspectRatio: "1919 / 803",
        },
        {
          src: "/opendatascope-methodology.png",
          alt: "OpenDataScope Methodology and sources page with research question and table of contents",
          fit: "cover",
          aspectRatio: "1919 / 900",
        },
      ],
    },
  },
  {
    slug: "mona-mayhem",
    name: "Mona Mayhem",
    kind: "solo",
    eyebrow: "GitHub Copilot Dev Days — workshop project extended and deployed",
    description:
      "A retro arcade-style game that puts two GitHub profiles head-to-head, compares their public contribution activity, and announces the winner with an interactive showdown.",
    role: "Built and extended the GitHub Copilot Dev Days workshop project using GitHub Copilot and Claude Code, then deployed it on Vercel.",
    highlights: [
      "Compare GitHub contribution totals and year-long contribution heatmaps for two usernames",
      "Animated battle countdown, winner or tie announcement, and longest contribution streaks",
      "Sound effects with a mute toggle, shareable results, and recent battle history saved locally",
      "Server-side contribution API with username validation, caching, and helpful error states",
    ],
    stack: ["Astro", "TypeScript", "GitHub Copilot", "Claude Code", "Vercel"],
    cta: {
      label: "Live Demo",
      href: "https://mona-mayhem.vercel.app",
    },
    secondaryCta: {
      label: "GitHub",
      href: "https://github.com/janatrpkovska/mona-mayhem",
    },
    visual: {
      type: "image",
      icon: "puzzle",
      image: {
        src: "/images/mona-mayhem/mona-mayhem-preview.png",
        alt: "Mona Mayhem arcade game showing a GitHub contribution battle between torvalds and gaearon, winner, heatmaps, and battle history",
        fit: "cover",
        aspectRatio: "1150 / 869",
      },
    },
  },
  {
    slug: "roadwatch",
    name: "RoadWatch",
    kind: "solo",
    eyebrow: "University project — interactive scene analysis + computer vision",
    description:
      "An interactive tool for laying out and analyzing accident scenes: a canvas-based editor for placing and adjusting vehicles by hand, connected to a computer-vision backend that can detect vehicles from an uploaded photo and drop them into the same scene automatically.",
    role: "Built both sides — the frontend scene editor and the Flask/computer-vision backend.",
    highlights: [
      "Canvas scene editor: place, select, drag, rotate, resize, zoom, and pan vehicles, plus distance measurement and per-vehicle notes",
      "Undo/redo history, and scene save/load and image export as JSON and PNG",
      "A real Flask /analyze endpoint, called from the frontend with an uploaded image via fetch and FormData",
      "YOLOv8 detects vehicles in the photo; OpenCV (Canny edges + PCA) estimates each vehicle's orientation",
      "Detected vehicles are converted into the same data structure the manual editor uses, so AI output and manual edits share one scene model",
    ],
    stack: ["JavaScript", "HTML5 Canvas", "Python", "Flask", "YOLOv8 (Ultralytics)", "OpenCV"],
    secondaryNote:
      "A computer-vision integration and visualization tool, not a certified or legally admissible accident-reconstruction system.",
    cta: {
      label: "View Code",
      href: "https://github.com/janatrpkovska/RoadWatch",
    },
    visual: {
      type: "image",
      icon: "road",
      image: {
        src: "/images/roadwatch/roadwatch.png",
        alt: "RoadWatch interactive accident-scene editor",
        fit: "contain",
      },
    },
  },
  {
    slug: "puzzle-bloom",
    name: "Puzzle Bloom",
    kind: "solo",
    eyebrow: "Solo 48-hour hackathon MVP",
    description:
      "A safety and wellbeing-oriented, multilingual interactive experience, designed and shipped independently within a 48-hour hackathon window, built and deployed with Bolt.",
    role: "Solo — product decisions, prototyping, and shipping the MVP within the hackathon deadline.",
    highlights: [
      "Working, deployed product shipped independently within a 48-hour hackathon",
      "Used Bolt's AI-assisted workflow to move from concept to a live product quickly",
      "Multilingual interface aimed at making the experience approachable to more people",
      "Safety- and wellbeing-oriented product framing, scoped deliberately for a 48-hour build",
    ],
    stack: ["Bolt (AI-assisted build & deploy)"],
    secondaryNote:
      "Source code isn't available for this one — it lives as a deployed Bolt project rather than a separate repository.",
    cta: {
      label: "View Live Project",
      href: "https://puzzle-bloom-mvp-kj6k.bolt.host/",
    },
    visual: {
      type: "image",
      icon: "puzzle",
      image: {
        src: "/images/puzzle-bloom/puzzle-bloom.png",
        alt: "Puzzle Bloom project logo",
        fit: "contain",
      },
    },
  },
  {
    slug: "guess-the-flag",
    name: "Guess the Flag",
    kind: "solo",
    eyebrow: "My first AI-assisted project",
    description:
      "A flag-guessing quiz with difficulty levels, hints, and a live scoreboard. An early AI-assisted project that marked the start of experimenting with faster development workflows — less polished than Lit Candle or RoadWatch, but a real, working app.",
    role: "Solo, built early in my AI-assisted development experience.",
    highlights: [
      "Vue 3 + Vite quiz app with Easy/Medium/Hard difficulty levels and a per-round timer",
      "Hint system with a cooldown, plus live correct/incorrect score tracking",
      "Scores written to and a leaderboard streamed live from Firebase Firestore",
      "Player name is captured and stored locally per session — there's no real authentication behind it",
    ],
    stack: ["Vue 3", "Vite", "Firebase (Firestore)"],
    visual: {
      type: "image",
      icon: "flag",
      image: {
        src: "/images/guess-the-flag/guess-the-flag.png",
        alt: "Guess the Flag quiz interface",
        fit: "cover",
      },
    },
  },
];

// PetNest is intentionally excluded from `teamProjects` (and so from the live site) until
// Jana confirms her individual contribution — see PORTFOLIO_AUDIT_REPORT.md §15/§18.
// Kept here, fully written, so it can be restored with a one-line change once confirmed:
// just add `petnestDraft` back into the `teamProjects` array below.
const petnestDraft: Project = {
  slug: "petnest",
  name: "PetNest",
  kind: "team",
  eyebrow: "Team project — university",
  description:
    "An early-stage Angular application built with a team of students. The snapshot available for this portfolio shows authentication scaffolding (login/register); the rest of the feature set isn't reflected in what I have to review yet.",
  role: "My contribution: needs confirmation from Jana before this is described further.",
  highlights: [],
  stack: ["Angular", "TypeScript"],
  visual: { type: "placeholder", icon: "paw" },
  contributionStatus: "needs-confirmation",
};
void petnestDraft; // referenced only to avoid an unused-variable lint error while it's parked

export const teamProjects: Project[] = [
  {
    slug: "univibe",
    name: "UniVibe",
    kind: "team",
    eyebrow: "Team project — university",
    description:
      "A student event-discovery platform: browsing and filtering campus events by category, saving events, an AI chatbot assistant, and a scheduled scraper that keeps the event list current. Built by a team of students, each owning different parts of the app.",
    role: "My contribution: category pages and chatbot functionality — the category browsing UI and the backend chatbot service/controller behind the in-app assistant.",
    highlights: [
      "Full scope: React frontend, Java Spring Boot backend, PostgreSQL, and a scheduled event scraper",
      "My part: category browsing pages, and the chatbot assistant (frontend widget + backend service/controller)",
    ],
    stack: ["React", "Java", "Spring Boot", "PostgreSQL"],
    visual: { type: "placeholder", icon: "chat" },
    contributionStatus: "confirmed",
  },
];

export const skills = {
  Frontend: ["JavaScript", "TypeScript", "Astro", "React", "Next.js", "Vue", "Angular", "Tailwind CSS", "Recharts", "HTML", "CSS"],
  Backend: ["Java (Spring Boot)", "Node.js / Next.js server actions", "Python (Flask)"],
  Data: ["PostgreSQL", "Prisma", "Firebase / Firestore"],
  "AI / Computer Vision": ["YOLOv8", "OpenCV", "AI-assisted development", "Bolt"],
  "Tools & Workflow": ["Git", "GitHub", "GitHub Copilot", "Claude Code"],
};

export const education: { institution: string; detail: string; status?: string; period?: string }[] = [
  {
    institution: "Faculty of Computer Science and Engineering (FINKI), Ss. Cyril and Methodius University in Skopje",
    detail:
      "B.Sc. studies in Computer Science and Engineering, Application of Information Technologies (PIT)",
    status: "Coursework completed · Bachelor's thesis in progress",
    period: "2019 – Present",
  },
];
