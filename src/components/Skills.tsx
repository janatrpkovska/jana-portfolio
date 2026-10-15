import { skills } from "@/data/site";

export function Skills() {
  const groups = Object.entries(skills);
  return (
    <section id="skills" className="border-t border-line py-24 sm:py-28">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-16">
          <p className="eyebrow">Skills &amp; Tools</p>
          <div className="grid gap-8 sm:grid-cols-2">
            {groups.map(([group, items]) => (
              <div key={group}>
                <h3 className="text-sm font-medium text-ink">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-card px-3 py-1 text-xs text-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
