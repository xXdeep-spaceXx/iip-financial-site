import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // IIP design tokens — reference CSS custom properties
        bg:      "var(--bg)",
        bg2:     "var(--bg2)",
        bg3:     "var(--bg3)",
        accent:  "var(--accent)",
        "accent-l": "var(--accent-l)",
        "accent-d": "var(--accent-d)",
        ink:     "var(--text)",
        ink2:    "var(--text2)",
        ink3:    "var(--text3)",
        // Legacy aliases kept for transition
        primary:   "#1a1a2e",
        secondary: "var(--text3)",
        surface:   "var(--bg)",
        muted:     "var(--bg2)",
        border:    "rgba(26,26,46,0.1)",
      },
      fontFamily: {
        sans:     ["var(--font-inter)",    "Inter",         "system-ui", "sans-serif"],
        grotesk:  ["var(--font-grotesk)",  "Space Grotesk", "system-ui", "sans-serif"],
        fraunces: ["var(--font-fraunces)", "Fraunces",      "Georgia",   "serif"],
      },
      fontSize: {
        // Shared type scale
        "nav":    ["14px", { lineHeight: "1em",   letterSpacing: "-0.01em" }],
        "body-sm":["14px", { lineHeight: "1.5em", letterSpacing: "-0.01em" }],
        "body":   ["18px", { lineHeight: "1.4em", letterSpacing: "-0.01em" }],
        "body-lg":["22px", { lineHeight: "1.1em", letterSpacing: "-0.01em" }],
        "card-h": ["22px", { lineHeight: "1em",   letterSpacing: "-0.02em" }],
        "section":["36px", { lineHeight: "1em",   letterSpacing: "-0.02em" }],
        "hero":   ["52px", { lineHeight: "1em",   letterSpacing: "-0.03em" }],
        "footer": ["14px", { lineHeight: "1em",   letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
