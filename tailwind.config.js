/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "overlay-show": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          light: "rgb(var(--primary-light) / <alpha-value>)",
          main: "rgb(var(--primary-main) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
        },
        secondary: {
          light: "rgb(var(--secondary-light) / <alpha-value>)",
          main: "rgb(var(--secondary-main) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
