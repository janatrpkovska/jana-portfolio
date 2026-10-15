import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF6F0",
        "paper-warm": "#F3ECE2",
        ink: "#262119",
        "ink-soft": "#5B5248",
        "ink-faint": "#8A8175",
        accent: "#A65C3B",
        "accent-soft": "#D9A98A",
        line: "#E6DCCC",
        card: "#FFFDFA",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(38, 33, 25, 0.04), 0 8px 24px -12px rgba(38, 33, 25, 0.12)",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
