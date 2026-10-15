import { howIWork } from "@/data/site";

export function HowIWork() {
  return (
    <section aria-labelledby="how-i-work-heading" className="border-y border-line/70 bg-paper-warm/60 py-20">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-16">
          <p id="how-i-work-heading" className="eyebrow">
            {howIWork.heading}
          </p>
          <div className="max-w-2xl">
            <ol className="flex flex-wrap gap-x-2 gap-y-3 text-sm text-ink-soft">
              {howIWork.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-line bg-card px-3 py-1.5 text-ink">
                    {step}
                  </span>
                  {i < howIWork.steps.length - 1 && (
                    <span aria-hidden="true" className="text-ink-faint">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">{howIWork.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
