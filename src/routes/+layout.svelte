<script lang="ts">
  import "../app.css";
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import "../app.postcss";
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { ModeWatcher } from "mode-watcher";
  
  let scrollY = 0;
  
  onMount(() => {
    if (browser) {
      // Set default to light mode for brutalist theme (can be toggled)
      if (!document.documentElement.hasAttribute('data-theme')) {
        // Start with light mode - pure brutalism
        document.documentElement.classList.remove('dark');
      }
      
      window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
      });
    }
  });
</script>

<ModeWatcher />

<!-- Brutalist Layout Foundation -->
<div class="min-h-screen flex flex-col bg-background text-foreground">
  <Header {scrollY} />
  
  <!-- Main Content - No cyberpunk styling -->
  <main class="flex-1 pt-20">
    <slot />
  </main>
  
  <Footer />
</div>

<style>
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Prevent horizontal scroll */
  :global(body) {
    overflow-x: hidden;
  }
  
  /* Brutalist foundation - no cyberpunk defaults */
  :global(html) {
    color-scheme: light dark;
  }

  /* Ensure all focus states use brutalist styling */
  :global(*:focus) {
    outline: 3px solid hsl(var(--primary)) !important;
    outline-offset: 2px;
  }

  /* Remove any residual rounded corners */
  :global(*) {
    border-radius: 0 !important;
  }
</style>
