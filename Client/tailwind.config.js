/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#3e9c35",
      },
      gridTemplateColumns: {
        "1/3-2/3": "1fr 2fr",
      },
      gridTemplateRows: {
        "1/4-3/4": "1fr 3fr",
      },
    },
  },
  plugins: [],
};
