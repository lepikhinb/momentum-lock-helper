import { resolve } from "path"
import { defineConfig } from "vite"
import eslintPlugin from "vite-plugin-eslint"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Momentum Lock",
      fileName: `momentum-lock-helper`,
    },
  },
  plugins: [eslintPlugin()],
})
