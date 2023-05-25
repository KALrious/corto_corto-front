import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
//@ts-ignore
import { resolve } from "path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@fonts": resolve("./src/fonts"),
    },
  },
});
