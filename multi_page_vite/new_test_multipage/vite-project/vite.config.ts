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
  },
  plugins: [react(), TanStackRouterVite()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        home2: resolve(__dirname, "index2.html"),
        //login: resolve(__dirname, "src/login/index.html"),
      },
    },
  },
});
