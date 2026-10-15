import { person } from "@/data/site";
import { ArrowUpRight } from "./icons";

export function Contact() {
  const links = [
    { label: "GitHub", href: person.github },
    ...(person.email ? [{ label: person.email, href: `mailto:${person.email}` }] : []),
    ...(person.linkedin ? [{ label: "LinkedIn", href: person.linkedin }] : []),
  ];

  return (
    <section id="contact" className="border-t border-line py-24 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="section-heading">Let's talk</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            The best place to see more of my work right now is GitHub.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/45"
              >
                {l.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
