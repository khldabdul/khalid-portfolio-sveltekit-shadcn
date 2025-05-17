<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { browser } from '$app/environment';
  
  let { delay = 0, duration = 400, direction = 'left', threshold = 0.1, children } = $props<{
    delay?: number,
    duration?: number,
    direction?: 'left' | 'right' | 'top' | 'bottom',
    threshold?: number,
    children: any
  }>();
  
  let visible = $state(false);
  let element = $state<HTMLElement | null>(null);
  
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
      {@render children()}
    </div>
  {:else}
    <div style="opacity: 0">
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .slide-container {
    width: 100%;
  }
</style>
