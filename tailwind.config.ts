import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f1e8",
        cream: "#efe4d5",
        ink: "#171411",
        charcoal: "#302b25",
        burgundy: "#5a1721",
        olive: "#68715b",
        gold: "#a98343"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"]
      },
      letterSpacing: {
        editorial: "0.08em"
      }
    }
  },
  plugins: []
};

export default config;
