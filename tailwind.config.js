import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        "base-100": "rgb(255, 255, 255)",
        "base-200": "rgba(40, 40, 40, 0.03)",
        "base-content": "rgb(21, 11, 43)",
        "base-content-secondary": "rgba(21, 11, 43, 0.6)",
        "card-base-content": "rgb(40, 40, 40)",
        "card-base-content-secondary": "rgba(40, 40, 40, 0.7)",
        primary: "rgb(11, 229, 138)",
        "primary-content": "rgb(21, 11, 43)",
        secondary: "rgb(255, 255, 255)",
        "secondary-content": "rgb(255, 255, 255)",
        "banner-content": "rgb(255, 255, 255)",
        "banner-content-secondary": "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [daisyui],
};
