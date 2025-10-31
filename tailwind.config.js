/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // 👈 must include this line
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
