import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // This matches https://olena3k.github.io/my-portfolio/
  // If the repository name changes, update this path.
  base: "/portfolio-new/",
});
