// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://white-river-0596dd700-preview.eastasia.4.azurestaticapps.net",
  base: "/",
  output: "static",
  integrations: [icon(), tailwind()],
  i18n: {
    locales: ["en", "jp"],
    defaultLocale: "jp",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
