// vite.config.ts
import { defineConfig } from "file:///D:/Node-Code/multi_page_vite/new_test_multipage/vite-project/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Node-Code/multi_page_vite/new_test_multipage/vite-project/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import { TanStackRouterVite } from "file:///D:/Node-Code/multi_page_vite/new_test_multipage/vite-project/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
var __vite_injected_original_dirname = "D:\\Node-Code\\multi_page_vite\\new_test_multipage\\vite-project";
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    strictPort: true
    // proxy: {
    //   "/": "http://localhost:8080",
    // },
  },
  plugins: [react(), TanStackRouterVite()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__vite_injected_original_dirname, "src/htmls/index.html"),
        about: resolve(__vite_injected_original_dirname, "src/htmls/about.html"),
        pricing: resolve(__vite_injected_original_dirname, "src/htmls/pricing.html"),
        app: resolve(__vite_injected_original_dirname, "src/htmls/app.html")
      }
    }
  }
  //root: resolve(__dirname, "src/htmls"),
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOb2RlLUNvZGVcXFxcbXVsdGlfcGFnZV92aXRlXFxcXG5ld190ZXN0X211bHRpcGFnZVxcXFx2aXRlLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE5vZGUtQ29kZVxcXFxtdWx0aV9wYWdlX3ZpdGVcXFxcbmV3X3Rlc3RfbXVsdGlwYWdlXFxcXHZpdGUtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTm9kZS1Db2RlL211bHRpX3BhZ2Vfdml0ZS9uZXdfdGVzdF9tdWx0aXBhZ2Uvdml0ZS1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFRhblN0YWNrUm91dGVyVml0ZSB9IGZyb20gXCJAdGFuc3RhY2svcm91dGVyLXZpdGUtcGx1Z2luXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICAvLyBwcm94eToge1xuICAgIC8vICAgXCIvXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXG4gICAgLy8gfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIFRhblN0YWNrUm91dGVyVml0ZSgpXSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBob21lOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaHRtbHMvaW5kZXguaHRtbFwiKSxcbiAgICAgICAgYWJvdXQ6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9odG1scy9hYm91dC5odG1sXCIpLFxuICAgICAgICBwcmljaW5nOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaHRtbHMvcHJpY2luZy5odG1sXCIpLFxuICAgICAgICBhcHA6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9odG1scy9hcHAuaHRtbFwiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgLy9yb290OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaHRtbHNcIiksXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1gsU0FBUyxvQkFBb0I7QUFDN1ksT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixTQUFTLDBCQUEwQjtBQUhuQyxJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJZDtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztBQUFBLEVBQ3ZDLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxzQkFBc0I7QUFBQSxRQUMvQyxPQUFPLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsUUFDaEQsU0FBUyxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLFFBQ3BELEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
