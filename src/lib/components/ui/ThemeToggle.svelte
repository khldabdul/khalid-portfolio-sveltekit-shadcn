<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  
  let isDark = false;
  let mounted = false;
  
  onMount(() => {
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    updateTheme();
    mounted = true;
  });
  
  function toggleTheme() {
    isDark = !isDark;
    updateTheme();
  }
  
  function updateTheme() {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

{#if mounted}
  <button
    on:click={toggleTheme}
    class="theme-toggle"
    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    <div class="icon-container">
      {#if isDark}
        <Icon icon="lucide:sun" width={20} height={20} />
      {:else}
        <Icon icon="lucide:moon" width={20} height={20} />
      {/if}
    </div>
    <span class="theme-label">
      {isDark ? 'LIGHT' : 'DARK'}
    </span>
  </button>
{/if}

<style>
  .theme-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: hsl(var(--background));
    color: hsl(var(--foreground));
    border: 2px solid hsl(var(--border));
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .theme-toggle:hover {
    background: hsl(var(--foreground));
    color: hsl(var(--background));
    border-color: hsl(var(--foreground));
  }
  
  .theme-toggle:focus {
    outline: 3px solid hsl(var(--primary));
    outline-offset: 2px;
  }
  
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .theme-label {
    font-family: inherit;
  }
  
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .theme-toggle {
      transition: none;
    }
  }
</style>