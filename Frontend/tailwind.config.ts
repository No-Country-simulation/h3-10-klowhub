import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary_a: "#D194E2",
        primary_b: "#B95ED4",
        primary_b_500: "#702486",
        primary_c_200: "#D194E2",
      },
    },
  },
  plugins: [],
} satisfies Config;
