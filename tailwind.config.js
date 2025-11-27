/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
        },
        lavender: "#F4F2FF",
        dark: "#0F172A",
        body: "#475569",
      },
    },
  },

  plugins: [],
};
