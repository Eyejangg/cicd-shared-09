import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Use relative path for GitHub Pages deployment compatibility
  base: "./",
  plugins: [react()],
});
