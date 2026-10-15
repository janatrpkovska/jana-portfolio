import { education } from "@/data/site";

// Renders nothing if `education` in site.ts is ever emptied again —
// intentional fallback rather than a visible placeholder/TODO.
export function Education() {
  if (education.length === 0) return null;

  return (
    <section id="education" className="border-t border-line py-24 sm:py-28">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-16">
          <p className="eyebrow">Education</p>
          <ul className="max-w-xl space-y-4">
            {education.map((entry) => (
              <li key={entry.institution}>
                <p className="text-base text-ink">{entry.institution}</p>
                <p className="text-sm text-ink-soft">{entry.detail}</p>
                {entry.status && <p className="mt-1 text-sm text-ink">{entry.status}</p>}
                {entry.period && <p className="text-xs text-ink-faint">{entry.period}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
