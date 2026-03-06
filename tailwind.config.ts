import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F4E9D8",
        clay: "#A66C3D",
        pine: "#294436",
        moss: "#7B8F63",
        bark: "#4E3A2D",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Georgia", "Cambria", "\"Times New Roman\"", "serif"],
      },
      boxShadow: {
        soft: "0 20px 45px rgba(41, 68, 54, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
