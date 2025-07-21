import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build", // Change output directory from 'dist' to 'build'
    assetsDir: "static", // Put assets in 'static' folder instead of 'assets'
    rollupOptions: {
      input: {
        main: "./src/main.js",
        bundle: "./src/bundle-entry.js",
      },
      output: {
        // Control where different file types go
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === "bundle" ? "js/bundle.js" : "js/[name].js";
        },
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          // Organize assets by type
          const extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `images/[name].[ext]`;
          }
          if (/css/i.test(extType)) {
            return `css/[name].[ext]`;
          }
          return `static/[name]-[hash].[ext]`;
        },
      },
    },
  },
});
