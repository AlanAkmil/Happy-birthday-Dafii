import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0b0813",
        panel: "#141020",
        panelEdge: "#241b38",
        violet: {
          DEFAULT: "#8b5cf6",
          bright: "#a78bfa",
          deep: "#5b21b6",
        },
        magenta: "#c026d3",
        bone: "#f1eee8",
        smoke: "#9a92ad",
      },
      fontFamily: {
        display: ["var(--font-rajdhani)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        rise: {
          "0%": { transform: "translateY(0)", opacity: "0.9" },
          "100%": { transform: "translateY(-120vh)", opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(139,92,246,0.0)" },
          "50%": { boxShadow: "0 0 24px rgba(139,92,246,0.35)" },
        },
      },
      animation: {
        flicker: "flicker 3s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;