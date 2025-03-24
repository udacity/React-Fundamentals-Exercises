import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths instead of absolute
  root: process.cwd(),
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 3001,
    strictPort: true,
    allowedHosts: ["localhost", ".prod.udacity-student-workspaces.com"],
    // Improve proxy configuration to handle all static assets
    proxy: {
      // Ensure all assets and module requests are properly rewritten
      "^/proxy/3001/(.*)$": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\/3001\//, "/"),
      },
    },
  },
  build: {
    // Ensure assets use relative paths in production
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // Use a custom format for asset filenames to avoid path issues
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
