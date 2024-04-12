import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Set your site URL
  // site: 'https://site.url',
  
  // update the `base` to your needs
  // base: '',
  
  scopedStyleStrategy: "where",
  integrations: [tailwind({
    applyBaseStyles: false,
    config: './tailwind.config.ts',
    nesting: true,
  }), icon()],
});