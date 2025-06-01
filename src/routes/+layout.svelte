<script lang="ts">
  import "../app.css";
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import "../app.postcss";
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BackgroundPattern from '$lib/components/ui/BackgroundPattern.svelte';
  import { ModeWatcher } from "mode-watcher";
  
  let scrollY = 0;
  let isDark = false;
  
  onMount(() => {
    if (browser) {
      // Check current theme
      const checkTheme = () => {
        isDark = document.documentElement.classList.contains('dark');
      };
      
      // Initial check
      checkTheme();
      
      // Watch for theme changes
      const observer = new MutationObserver(() => {
        checkTheme();
      });
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
      
      window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
      });
      
      return () => {
        observer.disconnect();
      };
    }
  });
</script>

<ModeWatcher />

<!-- Background Pattern -->
<BackgroundPattern variant={isDark ? 'dark' : 'light'} intensity="subtle" />

<!-- Enhanced Brutalist Layout -->
<div class="min-h-screen flex flex-col bg-background text-foreground relative z-10">
  <Header {scrollY} />
  
  <!-- Main Content with better spacing -->
  <main class="flex-1 pt-20 relative z-10">
    <slot />
  </main>
  
  <Footer />
</div>

<style>
  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Prevent horizontal scroll */
  :global(body) {
    overflow-x: hidden;
  }
  
  /* Enhanced color scheme support */
  :global(html) {
    color-scheme: light dark;
  }

  /* Enhanced focus states with theme-aware styling */
  :global(*:focus) {
    outline: 3px solid hsl(var(--primary)) !important;
    outline-offset: 2px;
  }
  
  /* Force brutalist aesthetic - no rounded corners */
  :global(*) {
    border-radius: 0 !important;
  }
  
  /* Enhanced text selection with theme colors */
  :global(::selection) {
    background: hsl(var(--primary) / 0.3);
    color: hsl(var(--foreground));
  }
  
  :global(::-moz-selection) {
    background: hsl(var(--primary) / 0.3);
    color: hsl(var(--foreground));
  }
  
  /* Smooth theme transitions */
  :global(html) {
    transition: color-scheme 0.3s ease;
  }
  
  /* Ensure proper stacking context */
  :global(.brutalist-container) {
    position: relative;
    z-index: 10;
  }
  
  /* Custom scrollbar styling */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }
  
  :global(::-webkit-scrollbar-track) {
    background: hsl(var(--muted));
  }
  
  :global(::-webkit-scrollbar-thumb) {
    background: hsl(var(--primary));
    border: none;
  }
  
  :global(::-webkit-scrollbar-thumb:hover) {
    background: hsl(var(--accent));
  }
  
  /* Disable animations for users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    :global(*),
    :global(*::before),
    :global(*::after) {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style>