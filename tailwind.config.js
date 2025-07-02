/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        github: {
          dark: '#0d1117',
          text: '#c9d1d9',
          border: '#30363d',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
