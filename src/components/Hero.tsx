import { person } from "@/data/site";
import { ArrowUpRight } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 sm:pt-28">
      <div className="container-page">
        <div className="max-w-3xl animate-reveal">
          <p className="eyebrow mb-5">{person.title} · {person.subtitle}</p>
          <h1 className="font-display text-5xl leading-[1.08] tracking-tight text-ink sm:text-6xl">
            {person.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {person.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/45"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 hidden h-72 w-72 rounded-full bg-accent-soft/20 blur-3xl sm:block"
      />
    </section>
  );
}
