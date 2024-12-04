import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig((config) => ({
  base: config.mode === "production" ? "/EatWell-new" : "/",
  root: "src",
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "assets/",
          dest: "",
        },
      ],
    }),
  ],
  build: {
    outDir: "../dist",
  },
}));
