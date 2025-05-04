import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), monacoEditorPlugin({
    languageWorkers: ['json', 'typescript', 'css', 'html', 'editorWorkerService'],
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
