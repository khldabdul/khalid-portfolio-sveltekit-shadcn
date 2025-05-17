import adapter from "@sveltejs/adapter-auto";
import sveltepreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: sveltepreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    files: {
      serviceWorker: "src/service-worker",
      lib: "src/lib",
      routes: "src/routes",
      appTemplate: "src/app.html",
    },
    alias: {
      $components: "src/lib/components",
      $stores: "src/lib/stores",
      $utils: "src/lib/utils",
      $assets: "src/assets",
      $lib: "src/lib",
      $app: "src/lib/app",
    },
  },
};

export default config;
