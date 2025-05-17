<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  export let text: string;
  export let speed = 50;
  export let delay = 0;
  
  let displayedText = '';
  let element: HTMLElement;
  
  onMount(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = browser && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      displayedText = text;
      return;
    }
    
    let timeout: NodeJS.Timeout;
    let index = 0;
    
    const typeNextChar = () => {
      if (index < text.length) {
        displayedText += text[index];
        index++;
        timeout = setTimeout(typeNextChar, speed);
      }
    };
    
    // Start typing after the delay
    setTimeout(() => {
      typeNextChar();
    }, delay);
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  });
</script>

<span class="typewriter" bind:this={element}>
  {displayedText}<span class="cursor" aria-hidden="true"></span>
</span>

<style>
  .typewriter {
    display: inline;
    position: relative;
  }
  
  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: currentColor;
    margin-left: 2px;
    animation: blink 1s step-end infinite;
    vertical-align: text-bottom;
  }
  
  @keyframes blink {
    from, to { opacity: 0; }
    50% { opacity: 1; }
  }
  
  @media (prefers-reduced-motion: reduce) {
    .cursor {
      animation: none;
    }
  }
</style>
