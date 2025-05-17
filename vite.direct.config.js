import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      dev: true,
    }
  })],
  resolve: {
    alias: {
      '$lib': resolve('./src/lib'),
      '$app/environment': resolve('./src/lib/environment.js'),
      '$app/navigation': resolve('./src/lib/navigation.js'),
      '$app/stores': resolve('./src/lib/stores.js')
    }
  },
  build: {
    outDir: 'build',
    emptyOutDir: true
  }
});