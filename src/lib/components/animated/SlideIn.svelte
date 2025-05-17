<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { browser } from '$app/environment';
  
  export let delay = 0;
  export let duration = 400;
  export let direction: 'left' | 'right' | 'top' | 'bottom' = 'left';
  export let threshold = 0.1;
  
  let visible = false;
  let element: HTMLElement;
  
  const getTransform = () => {
    switch (direction) {
      case 'left': return { x: -20, y: 0 };
      case 'right': return { x: 20, y: 0 };
      case 'top': return { x: 0, y: -20 };
      case 'bottom': return { x: 0, y: 20 };
    }
  };
  
  onMount(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = browser && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      visible = true;
      return;
    }
    
    // Use IntersectionObserver if available
    if (browser && 'IntersectionObserver' in window) {
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

<div bind:this={element} class="slide-container">
  {#if visible}
    <div transition:fly={{ ...getTransform(), duration }}>
      <slot />
    </div>
  {:else}
    <div style="opacity: 0">
      <slot />
    </div>
  {/if}
</div>

<style>
  .slide-container {
    width: 100%;
  }
</style>
