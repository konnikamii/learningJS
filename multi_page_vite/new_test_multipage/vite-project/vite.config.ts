import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

console.log(__dirname);
console.log(resolve(__dirname, "index.html"));
console.log(resolve(__dirname, "src/login/index.html"));
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [react(), TanStackRouterVite()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/htmls/index.html"),
        about: resolve(__dirname, "src/htmls/about.html"),
        pricing: resolve(__dirname, "src/htmls/pricing.html"),
        //login: resolve(__dirname, "src/login/index.html"),
      },
    },
  },
});
