/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          45: "#1E1E1E",
          46: "#231F20",
        },
        red: {
          50: "#F81E1E",
          51: "#4D1F21",
          52: "#591212",
        },
        gray: {
          60: "#E8E8E1",
          61: "#D9D9D9",
        },
        white: {
          70: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
