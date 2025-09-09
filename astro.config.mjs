// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ramonsecondgit.github.io',
  base: '/astro_prueba_delete',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

});