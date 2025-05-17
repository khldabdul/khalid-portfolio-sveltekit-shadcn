#!/usr/bin/env node

console.log('Creating initial SvelteKit structure...');

const fs = require('fs');
const path = require('path');

try {
  // Create .svelte-kit directory if it doesn't exist
  const svelteKitDir = path.join(__dirname, '.svelte-kit');
  if (!fs.existsSync(svelteKitDir)) {
    fs.mkdirSync(svelteKitDir, { recursive: true });
    console.log('Created .svelte-kit directory');
  }

  // Create generated/server directory
  const serverDir = path.join(svelteKitDir, 'generated', 'server');
  fs.mkdirSync(serverDir, { recursive: true });
  console.log('Created generated/server directory');

  // Create a minimal internal.js file
  const internalJsPath = path.join(serverDir, 'internal.js');
  fs.writeFileSync(internalJsPath, `
// This is a placeholder for SvelteKit's generated internal.js
export const building = false;
export const version = "1.0.0";
export const assets = "";
export const base = "";
export const env = {};
export const prefixed = {};
export const prerendering = false;
export const public_env = {};
  `);
  console.log('Created placeholder internal.js');

  // Create a minimal tsconfig.json in .svelte-kit
  const tsconfigPath = path.join(svelteKitDir, 'tsconfig.json');
  fs.writeFileSync(tsconfigPath, JSON.stringify({
    "compilerOptions": {
      "allowJs": true,
      "checkJs": true,
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "resolveJsonModule": true,
      "skipLibCheck": true,
      "sourceMap": true,
      "strict": true
    },
    "extend": "../tsconfig.json"
  }, null, 2));
  console.log('Created .svelte-kit/tsconfig.json');

  // Create minimal types
  const typesDir = path.join(svelteKitDir, 'types');
  fs.mkdirSync(typesDir, { recursive: true });
  
  // Create $app directory
  const appDir = path.join(typesDir, '$app');
  fs.mkdirSync(appDir, { recursive: true });
  
  // Create basic type files
  fs.writeFileSync(path.join(appDir, 'environment.d.ts'), 'export declare const browser: boolean;\nexport declare const dev: boolean;');
  fs.writeFileSync(path.join(appDir, 'navigation.d.ts'), 'export declare function goto(url: string): Promise<void>;');
  fs.writeFileSync(path.join(appDir, 'stores.d.ts'), 'export declare const page: any;');

  // Create minimal app.d.ts
  fs.writeFileSync(path.join(typesDir, 'app.d.ts'), '// See https://kit.svelte.dev/docs/types#app\ndeclare namespace App {}');

  console.log('Initial setup complete!');
} catch (error) {
  console.error('Error during initialization:', error);
}
