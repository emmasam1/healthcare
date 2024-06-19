/** @type {import('tailwindcss').Config} */
export default {
  // vite.config.js
  build: {
    outDir: "build", // If you want to output to 'build' instead of 'dist'
  },

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
