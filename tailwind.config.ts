import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        orbitron: ["var(--font-orbitron)"],
      },
      colors: {
        industrial: {
          950: "#05070a",
          900: "#0a0e17",
          800: "#151e2d",
          700: "#1e2a3a",
          accent: "#ff6b35",
          accentHover: "#e55a2b",
          steel: "#64748b",
          chrome: "#94a3b8",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shine": "shine 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "metallic": "linear-gradient(135deg, #1e2a3a 0%, #0a0e17 50%, #151e2d 100%)",
        "grid-pattern": "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
