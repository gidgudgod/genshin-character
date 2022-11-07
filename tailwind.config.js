/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/script/component/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      slg: "946px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#F1BB2D",
        secondary: "#393B40",
        accent: "#CFD0D1",
        neutral: "#FAFAFA",
        base: "#F0F0F0",
        active: "#F4D5A3",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  },
  plugins: [],
};
