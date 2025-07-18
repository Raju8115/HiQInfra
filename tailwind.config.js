/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(80px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideUp: "slideUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

