#!/usr/bin/env node

console.log('Initializing SvelteKit project...');

// Force create the empty .svelte-kit directory
const fs = require('fs');
const path = require('path');

const svelteKitDir = path.join(__dirname, '.svelte-kit');
if (!fs.existsSync(svelteKitDir)) {
  fs.mkdirSync(svelteKitDir, { recursive: true });
  console.log('Created .svelte-kit directory');
}

console.log('Initialization complete');
