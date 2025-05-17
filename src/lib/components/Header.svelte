<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { slide } from 'svelte/transition';
  import { Menu, X } from 'lucide-svelte';
  import { aboutInfo } from '$lib/data/about';
  
  export let scrollY = 0;
  
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];
  
  let isMobileMenuOpen = false;
  let lastScroll = 0;
  let headerVisible = true;
  let headerElement: HTMLElement;
  let headerHeight = 0;
  
  // Toggle mobile menu
  const toggleMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    // Prevent scrolling when menu is open
    if (browser) {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    }
  };
  
  // Close menu when clicking a link
  const closeMenu = () => {
    isMobileMenuOpen = false;
    if (browser) {
      document.body.style.overflow = '';
    }
  };
  
  onMount(() => {
    if (headerElement) {
      headerHeight = headerElement.offsetHeight;
    }
    
    // Add click event listener to handle navigation
    if (browser) {
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        
        if (link && link.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          const id = link.getAttribute('href') || '';
          const element = document.querySelector(id);
          
          if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top, behavior: 'smooth' });
            closeMenu();
          }
        }
      });
    }
  });
  
  // Handle scroll direction to show/hide header
  $: {
    if (browser && scrollY > 100) {
      headerVisible = scrollY < lastScroll || scrollY < headerHeight;
      lastScroll = scrollY;
    } else {
      headerVisible = true;
    }
  }
</script>

<header 
  bind:this={headerElement}
  class="fixed top-0 left-0 w-full z-50 transition-all duration-300" 
  class:bg-background={scrollY > 50}
  class:shadow-md={scrollY > 50}
  class:translate-y-0={headerVisible}
  class:-translate-y-full={!headerVisible}
>
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <a href="#" class="text-xl font-bold">
      {aboutInfo.fullName.split(' ')[0]}
    </a>
    
    <!-- Desktop Navigation -->
    <nav class="hidden md:block">
      <ul class="flex space-x-6">
        {#each navItems as item}
          <li>
            <a 
              href={item.href} 
              class="py-2 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    
    <!-- Mobile Menu Button -->
    <button 
      class="md:hidden flex items-center" 
      on:click={toggleMenu}
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
    >
      {#if isMobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>
  
  <!-- Mobile Navigation -->
  {#if isMobileMenuOpen}
    <div 
      class="fixed inset-0 bg-background pt-16 z-40"
      transition:slide={{ duration: 200 }}
    >
      <nav class="container mx-auto px-4">
        <ul class="flex flex-col space-y-4">
          {#each navItems as item}
            <li>
              <a 
                href={item.href} 
                class="block py-2 text-xl hover:text-primary transition-colors"
                on:click={closeMenu}
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  {/if}
</header>

<style>
  header {
    backdrop-filter: blur(8px);
  }
</style>
