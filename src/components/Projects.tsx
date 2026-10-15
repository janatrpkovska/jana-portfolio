import { mainProjects } from "@/data/site";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Selected Projects</p>
          <h2 className="section-heading">Things I've built and can walk you through</h2>
        </div>

        <div className="mt-6">
          {mainProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
