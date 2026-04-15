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
        // Exact Framer design tokens
        primary: "rgb(0, 0, 0)",
        secondary: "rgb(153, 153, 153)",
        surface: "rgb(255, 255, 255)",
        muted: "rgb(245, 245, 245)",
        border: "rgb(230, 230, 230)",
      },
      fontFamily: {
        // Inter Variable — matches Framer site exactly
        sans: [
          "var(--font-inter)",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        // Framer typography scale
        "nav":    ["14px", { lineHeight: "1em",   letterSpacing: "-0.01em" }],
        "body-sm":["14px", { lineHeight: "1.5em", letterSpacing: "-0.01em" }],
        "body":   ["18px", { lineHeight: "1.4em", letterSpacing: "-0.01em" }],
        "body-lg":["22px", { lineHeight: "1.1em", letterSpacing: "-0.01em" }],
        "card-h": ["22px", { lineHeight: "1em",   letterSpacing: "-0.02em" }],
        "section":["32px", { lineHeight: "1em",   letterSpacing: "-0.03em" }],
        "hero":   ["40px", { lineHeight: "1em",   letterSpacing: "-0.04em" }],
        "footer": ["15px", { lineHeight: "1em",   letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
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
