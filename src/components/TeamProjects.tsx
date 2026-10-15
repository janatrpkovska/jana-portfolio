import { teamProjects } from "@/data/site";
import { projectIcons } from "./icons";

export function TeamProjects() {
  return (
    <section aria-labelledby="team-projects-heading" className="border-t border-line py-24 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Team Projects</p>
          <h2 id="team-projects-heading" className="section-heading">
            Built with other students
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {teamProjects.length === 1
              ? "A group university project. What's credited here is specifically my own part, not the team's combined work."
              : "Group university projects. What's credited here is specifically my own part, not the team's combined work."}
          </p>
        </div>

        <div
          className={
            "mt-10 grid gap-6 " +
            (teamProjects.length === 1 ? "max-w-md sm:grid-cols-1" : "sm:grid-cols-2")
          }
        >
          {teamProjects.map((project) => {
            const Icon = projectIcons[project.visual.icon];
            const needsConfirmation = project.contributionStatus === "needs-confirmation";
            return (
              <div
                key={project.slug}
                className="rounded-2xl border border-line bg-card p-7 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-paper-warm text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{project.name}</h3>
                    <p className="text-xs uppercase tracking-[0.1em] text-ink-faint">Team project</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.description}</p>

                <div
                  className={
                    "mt-5 rounded-lg border px-4 py-3 text-sm leading-relaxed " +
                    (needsConfirmation
                      ? "border-dashed border-ink-faint/50 text-ink-faint italic"
                      : "border-line bg-paper-warm/60 text-ink")
                  }
                >
                  <span className="font-medium not-italic">My contribution — </span>
                  {project.role.replace("My contribution: ", "")}
                </div>

                {project.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span key={s} className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
