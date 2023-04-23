import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          light: "#323232",
          dark: "#141415",
        },
        gray: {
          light: "#F4F6F8",
          medium: "#f3f5fb",
          dark: "#787878",
        },
        blue: {
          light: "#74caff",
          dark: "#0c53b7",
        },
        yellow: {
          light: "#ffe16a",
          dark: "#b78103 ",
        },
      },
      fontFamily: {
        body: ["var(--font-body)", "system-ui"],
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "1280px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
