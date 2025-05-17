<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Sun, Moon } from "lucide-svelte";
  import { onMount } from 'svelte';
  
  let isDark = false;
  
  function updateThemeState() {
    // Check actual appearance by looking for the 'dark' class
    isDark = document.documentElement.classList.contains('dark');
  }
  
  function toggleTheme() {
    // Toggle between explicit light/dark modes
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  }
  
  onMount(() => {
    updateThemeState();
    
    // Listen for class changes to update the icon
    const observer = new MutationObserver(() => {
      updateThemeState();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => {
      observer.disconnect();
    };
  });
</script>

<Button variant="ghost" size="icon" aria-label="Toggle theme" on:click={toggleTheme} class="text-foreground">
  {#if isDark}
    <Sun class="h-[1.2rem] w-[1.2rem]" />
  {:else}
    <Moon class="h-[1.2rem] w-[1.2rem]" />
  {/if}
</Button>
