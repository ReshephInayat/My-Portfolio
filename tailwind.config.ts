import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#B63E96", // 240,86,199
      primaryDark: "#58E6D9", // 80,230,217
      red: "#DE2E09"
    },
    animation: {
      'spin-slow': 'spin 5s linear infinite',
    },
    backgroundImage: {
      CircularLight: 'repeating-radial-gradient(rgba(0,0,0,0.5) 2px,#f5f5f5 5px,#f5f5f5 100px)',
      CircularDark: 'repeating-radial-gradient(rgba(255,255,255,0.6) 2px,#1b1b1b 8px,#1b1b1b 100px)'
    }
  
  },
  plugins: [],
};
export default config;
