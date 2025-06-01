<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  export let titles: string[] = [
    "Senior QA Engineer",
    "Test Architect", 
    "Software Consultant",
    "AI Innovation Enthusiast"
  ];
  export let typeSpeed = 80;
  export let deleteSpeed = 50;
  export let pauseDuration = 2000;
  export let className = '';
  
  let displayedText = '';
  let currentTitleIndex = 0;
  let isTyping = true;
  let element: HTMLElement;
  
  onMount(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = browser && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      displayedText = titles[0];
      return;
    }
    
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    
    const typeText = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (isTyping) {
        // Typing phase
        if (charIndex < currentTitle.length) {
          displayedText = currentTitle.slice(0, charIndex + 1);
          charIndex++;
          timeout = setTimeout(typeText, typeSpeed);
        } else {
          // Finished typing, pause then start deleting
          timeout = setTimeout(() => {
            isTyping = false;
            typeText();
          }, pauseDuration);
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          charIndex--;
          displayedText = currentTitle.slice(0, charIndex);
          timeout = setTimeout(typeText, deleteSpeed);
        } else {
          // Finished deleting, move to next title
          currentTitleIndex = (currentTitleIndex + 1) % titles.length;
          isTyping = true;
          timeout = setTimeout(typeText, typeSpeed);
        }
      }
    };
    
    // Start the animation
    typeText();
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  });
</script>

<span class="animated-job-title {className}" bind:this={element}>
  {displayedText}<span class="cursor" aria-hidden="true">|</span>
</span>

<style>
  .animated-job-title {
    display: inline;
    position: relative;
    min-height: 1.2em;
  }
  
  .cursor {
    display: inline-block;
    margin-left: 2px;
    animation: blink 1s step-end infinite;
    color: currentColor;
    font-weight: normal;
  }
  
  @keyframes blink {
    from, to { opacity: 0; }
    50% { opacity: 1; }
  }
  
  @media (prefers-reduced-motion: reduce) {
    .cursor {
      animation: none;
      opacity: 1;
    }
  }
</style>