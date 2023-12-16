/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2.2rem",
        sm: "2.3rem", //640px
        md: "2.5rem", //768px
        lg: "5rem", //1024px
        xl: "7rem", //1280px
        "2xl": "8rem", //1536px
      },
    },
    extend: {},
  },
  plugins: [],
};
