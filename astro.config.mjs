// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const url =
  import.meta.env.SITE ||
  // TODO: 合ってるのかこれ？
  import.meta.env["PUBLIC_APP_URL"] ||
  "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site: url,
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
