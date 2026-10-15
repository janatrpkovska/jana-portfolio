import { person } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-ink-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {person.name}</p>
        <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
