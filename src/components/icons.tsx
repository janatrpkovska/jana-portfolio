// Minimal, hand-drawn-feel line icons used only as project placeholders
// and small UI accents. Intentionally plain — no icon library dependency.

export function CandleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M24 6c2.5 3 3.5 5 3.5 7a3.5 3.5 0 1 1-7 0c0-2 1-4 3.5-7Z" stroke="currentColor" strokeWidth="1.4" />
      <rect x="17" y="17" width="14" height="24" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M17 24h14M17 31h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function RoadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M16 8 8 40M32 8l8 32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 10v4M24 20v4M24 30v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="12" y="22" width="9" height="5" rx="1" transform="rotate(-8 12 22)" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function PuzzleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M17 10h8v3.2a2.6 2.6 0 1 0 0 5.2V21h6a2.8 2.8 0 1 1 0 5.6V31h-6v3a2.6 2.6 0 1 1-5.2 0v-3H10v-8h3a2.6 2.6 0 1 0 0-5.2V15h4v-5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M14 6v36" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 8c6-3 8 3 14 0v14c-6 3-8-3-14 0V8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 13a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H21l-8 6v-6h-0a4 4 0 0 1-4-4V13Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M16 17h16M16 23h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="30" rx="9" ry="7" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="13" cy="18" rx="3.4" ry="4.2" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="22" cy="13" rx="3.4" ry="4.2" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="32" cy="14" rx="3.4" ry="4.2" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="38" cy="21" rx="3.2" ry="4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 8v32h32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="26" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="23" y="18" width="6" height="18" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="32" y="12" width="6" height="24" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export const projectIcons = {
  chart: ChartIcon,
  candle: CandleIcon,
  road: RoadIcon,
  puzzle: PuzzleIcon,
  flag: FlagIcon,
  chat: ChatIcon,
  paw: PawIcon,
};

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
