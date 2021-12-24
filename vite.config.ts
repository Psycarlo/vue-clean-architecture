import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ mode }) => {
  const config = { plugins: [vue()], resolve: {} };
  if (mode === "mock") {
    config.resolve = {
      alias: { apiMode: path.resolve(__dirname, "src/api/data-access/mock") },
    };
  } else {
    config.resolve = {
      alias: { apiMode: path.resolve(__dirname, "src/api/data-access/real") },
    };
  }
  return config;
});
