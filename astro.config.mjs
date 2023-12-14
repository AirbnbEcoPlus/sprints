import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  ViewTransitions: true,
  integrations: [tailwind(), react()],
  site: 'https://airbnbecoplus.github.io',
  base: '/sprints',
});
