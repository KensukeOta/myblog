// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: "https://kensuke-ota.vercel.app",
  integrations: [tailwind(), svelte()],
  output: 'server',
  adapter: vercel()
});