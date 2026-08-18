import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

const alias = { "@": fileURLToPath(new URL(".", import.meta.url)) };
const ignored = ["node_modules/**", ".next/**", "storybook-static/**", "tests/e2e/**"];

export default defineConfig({
  test: {
    projects: [
      {
        plugins: [react()],
        resolve: { alias },
        test: {
          name: "dom",
          environment: "jsdom",
          globals: true,
          setupFiles: ["./tests/setup.ts"],
          include: ["**/*.test.{ts,tsx}"],
          exclude: ignored,
        },
      },
    ],
  },
});
