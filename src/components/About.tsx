import { about } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-16">
          <p className="eyebrow">About</p>
          <div className="max-w-2xl space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
