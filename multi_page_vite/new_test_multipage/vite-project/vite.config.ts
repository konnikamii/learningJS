import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    // proxy: {
    //   "/": "http://localhost:8080",
    // },
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
  //root: resolve(__dirname, "src/htmls"),
});
