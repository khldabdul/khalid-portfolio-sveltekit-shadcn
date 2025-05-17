<script lang="ts">
  import { fade } from 'svelte/transition';
  import { browser } from '$app/environment';
  
  // Props using Runes
  let { delay = 0, duration = 400, threshold = 0.1, children } = $props();
  
  // State with Runes
  let visible = $state(false);
  let element = $state<HTMLElement | null>(null);
  
  // Setup with $effect (replaces onMount)
  $effect(() => {
    if (!browser) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      visible = true;
      return;
    }
    
    // Use IntersectionObserver if available
    if ('IntersectionObserver' in window && element) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              visible = true;
            }, delay);
            observer.disconnect();
          }
        },
        { threshold }
      );
      
      observer.observe(element);
      
      return () => observer.disconnect();
    } else {
      // Fallback for browsers without IntersectionObserver
      setTimeout(() => {
        visible = true;
      }, delay);
    }
  });
</script>

<div bind:this={element} class="fade-container">
  {#if visible}
    <div transition:fade={{ duration }}>
      {@render children()}
    </div>
  {:else}
    <div style="opacity: 0">
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .fade-container {
    width: 100%;
  }
</style>
