/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        edushare: {
          "primary": "#4f46e5",          // Indigo - main brand color
          "primary-content": "#ffffff",
          "secondary": "#10b981",        // Emerald - growth/learning
          "secondary-content": "#ffffff",
          "accent": "#f59e0b",           // Amber - highlights
          "accent-content": "#1f2937",
          "neutral": "#1e293b",          // Slate dark
          "neutral-content": "#f1f5f9",
          "base-100": "#ffffff",         // White background
          "base-200": "#f8fafc",         // Slate 50
          "base-300": "#e2e8f0",         // Slate 200
          "base-content": "#1e293b",     // Slate 800
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#eab308",
          "error": "#ef4444",
        },
      },
    ],
  },
};
