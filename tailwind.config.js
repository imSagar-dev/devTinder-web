/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark"
      // {
      //   corporate: {
      //     "primary": "#007bff", // Example primary color
      //     "secondary": "#6c757d", // Example secondary color
      //     "accent": "#ffc107", // Example accent color
      //     "neutral": "#f8f9fa", // Example neutral color
      //     "base-100": "#ffffff", // Example base color
      //     "info": "#17a2b8", // Example info color
      //     "success": "#28a745", // Example success color
      //     "warning": "#ffc107", // Example warning color
      //     "error": "#dc3545", // Example error color
      //   },
      // },
    ],
  },
};
