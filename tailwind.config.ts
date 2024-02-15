import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "star-dust": {
          "50": "#f7f7f7",
          "100": "#ededec",
          "200": "#dfdfde",
          "300": "#c9c7c7",
          "400": "#aeacac",
          "500": "#a2a09f",
          "600": "#8a8886",
          "700": "#7c7a79",
          "800": "#686665",
          "900": "#555353",
          "950": "#363635",
        },
      },
      animation: {
        fade: "fadeIn 500ms ease",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
