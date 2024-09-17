import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import dynamicImport from "vite-plugin-dynamic-import"

export default defineConfig({
  base: "/",
  plugins: [react(), dynamicImport()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
