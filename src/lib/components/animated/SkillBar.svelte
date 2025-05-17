<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  export let label: string;
  export let percentage = 100;
  export let color = 'var(--primary)';
  export let delay = 0;
  
  let currentWidth = 0;
  let element: HTMLElement;
  let visible = false;
  
  onMount(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = browser && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      currentWidth = percentage;
      return;
    }
    
    // Use IntersectionObserver if available
    if (browser && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && !visible) {
            visible = true;
            animateBar();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(element);
      
      return () => observer.disconnect();
    } else {
      // Fallback for browsers without IntersectionObserver
      setTimeout(() => {
        animateBar();
      }, delay);
    }
  });
  
  function animateBar() {
    const startTime = Date.now();
    const duration = 1000; // Animation duration in ms
    
    const updateWidth = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      currentWidth = progress * percentage;
      
      if (progress < 1) {
        requestAnimationFrame(updateWidth);
      }
    };
    
    setTimeout(() => {
      requestAnimationFrame(updateWidth);
    }, delay);
  }
</script>

<div class="skill-bar-container" bind:this={element}>
  <div class="skill-info">
    <span class="skill-label">{label}</span>
    <span class="skill-percentage">{Math.round(currentWidth)}%</span>
  </div>
  <div class="skill-bar">
    <div 
      class="skill-progress" 
      style="width: {currentWidth}%; background-color: {color};"
    ></div>
  </div>
</div>

<style>
  .skill-bar-container {
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
  }
  
  .skill-label {
    font-weight: 500;
  }
  
  .skill-percentage {
    color: var(--muted-foreground);
  }
  
  .skill-bar {
    height: 8px;
    width: 100%;
    background-color: var(--muted);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .skill-progress {
    height: 100%;
    border-radius: 4px;
    transition: width 0.1s ease-out;
  }
</style>
