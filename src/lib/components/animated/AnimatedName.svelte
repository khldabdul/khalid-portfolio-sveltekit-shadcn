<script lang="ts">
  import { onMount } from 'svelte';
  
  export let name: string;
  export let variant: 'underline' | 'gradient' = 'underline';
  export let className: string = '';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

{#if variant === 'underline'}
  <!-- Animated Underline Effect -->
  <span 
    class="animated-name-underline {className}" 
    class:mounted
  >
    {name.toUpperCase()}
  </span>
{:else if variant === 'gradient'}
  <!-- Gradient Text Effect -->
  <span 
    class="animated-name-gradient {className}" 
    class:mounted
  >
    {name.toUpperCase()}
  </span>
{/if}

<style>
  .animated-name-underline {
    position: relative;
    display: inline-block;
    background: linear-gradient(
      90deg,
      hsl(var(--primary)) 0%,
      hsl(var(--accent)) 50%,
      hsl(var(--primary)) 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  .animated-name-underline::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      hsl(var(--primary)),
      hsl(var(--accent)),
      hsl(var(--primary))
    );
    transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .animated-name-underline.mounted::after {
    width: 100%;
  }
  
  .animated-name-gradient {
    background: linear-gradient(
      45deg,
      hsl(var(--primary)),
      hsl(var(--accent)),
      hsl(var(--primary)),
      hsl(var(--accent))
    );
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 4s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 50% 100%;
    }
    75% {
      background-position: 0% 50%;
    }
  }
  
  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .animated-name-underline,
    .animated-name-gradient {
      animation: none;
    }
    
    .animated-name-underline {
      -webkit-text-fill-color: hsl(var(--foreground));
    }
    
    .animated-name-gradient {
      -webkit-text-fill-color: hsl(var(--foreground));
    }
    
    .animated-name-underline::after {
      transition: none;
      width: 100%;
      background: hsl(var(--primary));
    }
  }
</style>