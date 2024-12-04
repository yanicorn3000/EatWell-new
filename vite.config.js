import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: config.mode === "production" ? "/eatwell" : "/",
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
});
