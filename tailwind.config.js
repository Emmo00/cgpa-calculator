/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s linear infinite'
      }
    },
  },
  plugins: [],
};
