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
      boxShadow: {
        default:
          "rgba(0, 0, 0, 0.377) 10px 10px 8px, #ffffff 1.5px 1.5px 2px 0px inset, #c7c3c0 -3.2px -3.2px 8px 0px inset;",
        "default-hover":
          "rgba(0, 0, 0, 0.377) 0px 0px 0px, inset 0.5px 0.5px 4px #000000, #c7c3c0 -3.2px -3.2px 8px 0px inset;",
        error:
          "rgba(0, 0, 0, 0.377) 10px 10px 8px, #fb702c 2px 2px 10px 0px inset, #d42a02 -4px -4px 1px 0px inset;",
        "error-hover":
          "rgba(0, 0, 0, 0.377) 0px 0px 0px, inset 0.5px 0.5px 4px #000000, #d42a02 -3.2px -3.2px 8px 0px inset;",
        success:
          "rgba(0, 0, 0, 0.377) 10px 10px 8px, #A5F3D6 2px 2px 10px 0px inset, #18AE78 -4px -4px 1px 0px inset;",
        "success-hover":
          "rgba(0, 0, 0, 0.377) 0px 0px 0px, inset 0.5px 0.5px 4px #000000, #18AE78 -3.2px -3.2px 8px 0px inset;",
        accent:
          "rgba(0, 0, 0, 0.377) 10px 10px 8px, #a8a6a4 1.5px 1.5px 1px 0px inset, #545251 -3.2px -3.2px 8px 0px inset;",
        "accent-hover":
          "rgba(0, 0, 0, 0.377) 0px 0px 0px, inset 0.5px 0.5px 4px #000000, #545251 -3.2px -3.2px 8px 0px inset;",
      },
    },
  },
  plugins: [],
};
export default config;
