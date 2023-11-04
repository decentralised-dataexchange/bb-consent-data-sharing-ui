import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/main.jsx"),
      name: "ConsentBbDataSharingUi",
      // the proper extensions will be added
      fileName: "consentBbDataSharingUi",
    },
    minify: "terser",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "consentBbDataSharingUi.css";
          return assetInfo.name;
        },
        entryFileNames: (chunkInfo) => {
          chunkInfo.type;
          if (chunkInfo.name == "main") return "consentBbDataSharingUi.js";
          return chunkInfo.name;
        },
      },
    },
  },
})
