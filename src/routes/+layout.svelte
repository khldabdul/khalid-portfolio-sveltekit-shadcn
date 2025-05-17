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
      window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
      });
    }
  });
</script>

<ModeWatcher />

<div class="min-h-screen flex flex-col bg-background text-foreground">
  <Header {scrollY} />
  
  <main class="flex-1">
    <slot />
  </main>
  
  <Footer />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    overflow-x: hidden;
  }
</style>
