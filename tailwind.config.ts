import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Open Sans", "sans-serif"],
        accent: ["Barlow", "sans-serif"],
      },
      colors: {
        primary: '#FFFFFF',
        secondary: {
          DEFAULT: '#1F1F1F', // Dark black
          gray: '#4B5563',    // Gray tone
        },
        accent: '#0EA5E9', // Sky blue
        mainText: '#000000',       // Main text
        accentText: '#FFFFFF', // For text on accent buttons
      },
    },
  },
  plugins: [],
};
export default config;
