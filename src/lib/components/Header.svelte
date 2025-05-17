<script lang="ts">
  import { browser } from "$app/environment";
  import { aboutInfo } from "$lib/data/about";
  import { Menu, X, Sun, Moon } from "lucide-svelte";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  export let scrollY = 0;

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  let isMobileMenuOpen = false;
  let lastScroll = 0;
  let headerVisible = true;
  let headerElement: HTMLElement;
  let headerHeight = 0;
  let isDark = false;

  // Toggle theme
  function updateThemeState() {
    isDark = document.documentElement.classList.contains('dark');
  }
  
  function toggleTheme() {
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    isDark = !isDark;
  }

  // Toggle mobile menu
  const toggleMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;

    // Prevent scrolling when menu is open
    if (browser) {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    }
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    isMobileMenuOpen = false;
    if (browser) {
      document.body.style.overflow = "";
    }
  };

  onMount(() => {
    if (headerElement) {
      headerHeight = headerElement.offsetHeight;
    }

    // Add click event listener to handle navigation
    if (browser) {
      document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a");

        if (link && link.getAttribute("href")?.startsWith("#")) {
          e.preventDefault();
          const id = link.getAttribute("href") || "";
          const element = document.querySelector(id);

          if (element) {
            const top =
              element.getBoundingClientRect().top +
              window.scrollY -
              headerHeight;
            window.scrollTo({ top, behavior: "smooth" });
            closeMenu();
          }
        }
      });
    }
    
    updateThemeState();
    
    // Listen for class changes to update the icon
    const observer = new MutationObserver(() => {
      updateThemeState();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
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
    <a href="/" class="text-xl font-bold">
      {aboutInfo.fullName.split(" ")[0]}
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center">
      <ul class="flex space-x-8 mr-4">
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
      <button 
        aria-label="Toggle theme" 
        class="p-2 rounded-md hover:bg-accent text-foreground"
        on:click={toggleTheme}
      >
        {#if isDark}
          <Sun class="h-[1.2rem] w-[1.2rem]" />
        {:else}
          <Moon class="h-[1.2rem] w-[1.2rem]" />
        {/if}
      </button>
    </nav>

    <!-- Mobile Menu Button -->
    <div class="md:hidden flex items-center gap-2">
      <button 
        aria-label="Toggle theme" 
        class="p-2 rounded-md hover:bg-accent text-foreground"
        on:click={toggleTheme}
      >
        {#if isDark}
          <Sun class="h-[1.2rem] w-[1.2rem]" />
        {:else}
          <Moon class="h-[1.2rem] w-[1.2rem]" />
        {/if}
      </button>
      <button
        class="flex items-center"
        on:click={toggleMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {#if isMobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>
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