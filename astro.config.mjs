// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://charlie-to.github.io",
  base: "/h-lab-page",
  output: "static",
  integrations: [icon(), tailwind()],
  i18n: {
    locales: ["en","jp"],
    defaultLocale: "jp",
    routing:{
      prefixDefaultLocale: false
    }
  }
});