import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig((config) => ({
  base: config.mode === "production" ? "/EatWell-new" : "/",
  root: "src",
  server: {
    port: 3000,
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    outDir: "../dist",
  },
}));
