import { experience } from "@/data/site";

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="border-t border-line py-12 sm:py-14">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-16">
          <p className="eyebrow">Experience</p>
          <ul className="max-w-xl space-y-4">
            {experience.map((entry) => (
              <li key={`${entry.organization}-${entry.period}`}>
                <p className="text-base text-ink">{entry.organization}</p>
                <p className="text-sm text-ink-soft">{entry.role}</p>
                <p className="text-xs text-ink-faint">{entry.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
