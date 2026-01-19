/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Elegant palette derived from provided moodboard
        primary: {
          50: "#F1EEED",
          100: "#E6E1E0",
          200: "#D9D2D1",
          300: "#C9C0BE",
          400: "#B7AFAD",
          500: "#B1A6A4", // taupe
          600: "#9E9492",
          700: "#87807E",
          800: "#6F6A68",
          900: "#5A5553",
          950: "#413F3D", // charcoal
        },
        accent: {
          50: "#EEF0F4",
          100: "#E0E4EA",
          200: "#C6CDD6",
          300: "#A9B2C0",
          400: "#8793A6",
          500: "#697184", // blue-gray
          600: "#5E6676",
          700: "#4D5361",
          800: "#3F4451",
          900: "#323541",
          950: "#252832",
        },
        beige: {
          50: "#F2F1EF", // off-white
          100: "#ECEAE7",
          200: "#D8CFD0", // soft mauve
          300: "#CFC6C7",
          400: "#C6BCBD",
          500: "#BDB2B3",
          600: "#B3A8A9",
          700: "#A89D9E",
          800: "#9D9293",
          900: "#938889",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
