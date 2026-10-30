import Link from "next/link";
import { person } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="focus-ring font-display text-lg tracking-tight text-ink">
          Jana Trpkovska
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Link
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink transition-colors hover:border-ink/40"
        >
          GitHub
        </Link>
      </div>
      <nav aria-label="Mobile" className="border-t border-line/70 sm:hidden">
        <div className="container-page flex items-center justify-between gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring inline-flex min-h-11 items-center px-1 text-xs font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
