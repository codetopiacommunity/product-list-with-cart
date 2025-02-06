// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px", // minimum mobile width
        md: "375px", // mobile design width
        lg: "1440px", // desktop design width
        xl: "1600px", // additional large screen breakpoint
      },
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        rose50: "hsl(20, 50%, 98%)",
        rose100: "hsl(13, 31%, 94%)",
        rose300: "hsl(14, 25%, 72%)",
        rose400: "hsl(7, 20%, 60%)",
        rose500: "hsl(12, 20%, 44%)",
        rose900: "hsl(14, 65%, 9%)",
      },
      fontFamily: {
        "red-hat": ["Red Hat Text", "sans-serif"],
      },
      fontSize: {
        base: "16px", // Body copy font size
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        // Optional: Extend spacing for margin, padding, etc.
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [],
};
