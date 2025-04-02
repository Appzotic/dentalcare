/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#333",
        blue: "#00b8b8",
        "light-color": "#666",
        "light-bg": "#eee",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
