import type { Project } from "@/data/site";
import { ProjectVisual } from "./ProjectVisual";
import { ArrowUpRight } from "./icons";

export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <article
      id={project.slug}
      className="grid items-center gap-10 border-t border-line py-16 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-14"
    >
      <div className={reverse ? "lg:order-2" : undefined}>
        <ProjectVisual visual={project.visual} name={project.name} />
      </div>

      <div className={reverse ? "lg:order-1" : undefined}>
        <p className="eyebrow mb-3">{project.eyebrow}</p>
        <h3 className="font-display text-3xl tracking-tight text-ink">{project.name}</h3>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{project.description}</p>

        <p className="mt-5 text-sm leading-relaxed text-ink">
          <span className="font-medium">My role — </span>
          <span className="text-ink-soft">{project.role}</span>
        </p>

        {project.highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {project.secondaryNote && (
          <p className="mt-5 rounded-lg border border-line bg-paper-warm/60 px-4 py-3 text-xs leading-relaxed text-ink-soft">
            {project.secondaryNote}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-card px-3 py-1 text-xs text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>

        {project.cta && (
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            {[project.cta, project.secondaryCta].map(
              (link) =>
                link && (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ),
            )}
          </div>
        )}
      </div>
    </article>
  );
}
