<script lang="ts">
  import { browser } from "$app/environment";
  import { aboutInfo } from "$lib/data/about";
  import { Menu, X, Sun, Moon } from "lucide-svelte";
  import { onMount } from "svelte";

  // Remove unused scrollY export
  // If needed later, can be added back as: let { scrollY = 0 } = $props();

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
  ];

  let isMobileMenuOpen = false;
  let headerElement: HTMLElement;
  let headerHeight = 0;
  let isDark = false;

  // Theme management
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

  // Mobile menu management
  const toggleMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (browser) {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    }
  };

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

    // Handle navigation clicks
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
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      updateThemeState();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  });
</script>

<!-- Brutalist Header - Always Visible, No Animations -->
<header
  bind:this={headerElement}
  class="fixed top-0 left-0 w-full z-50 bg-background border-b-2 border-foreground"
>
  <div class="brutalist-container">
    <div class="flex justify-between items-center py-4">
      
      <!-- Logo/Name - Brutalist Typography -->
      <a 
        href="/" 
        class="brutalist-heading-md text-foreground hover:text-primary focus-brutalist no-underline"
      >
        {aboutInfo.fullName.split(" ")[0].toUpperCase()}
      </a>

      <!-- Desktop Navigation - Minimal -->
      <nav class="hidden md:flex items-center gap-8">
        <ul class="flex items-center gap-6">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                class="brutalist-small text-foreground hover:text-primary focus-brutalist"
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
        
        <!-- Theme Toggle - Brutalist Style -->
        <button 
          aria-label="Toggle theme" 
          class="border-brutalist border-foreground p-2 bg-background text-foreground hover:bg-foreground hover:text-background focus-brutalist"
          on:click={toggleTheme}
        >
          {#if isDark}
            <Sun size={16} strokeWidth={2} />
          {:else}
            <Moon size={16} strokeWidth={2} />
          {/if}
        </button>
      </nav>

      <!-- Mobile Controls -->
      <div class="md:hidden flex items-center gap-2">
        <!-- Mobile Theme Toggle -->
        <button 
          aria-label="Toggle theme" 
          class="border-brutalist border-foreground p-2 bg-background text-foreground hover:bg-foreground hover:text-background focus-brutalist"
          on:click={toggleTheme}
        >
          {#if isDark}
            <Sun size={16} strokeWidth={2} />
          {:else}
            <Moon size={16} strokeWidth={2} />
          {/if}
        </button>
        
        <!-- Mobile Menu Button -->
        <button
          class="border-brutalist border-foreground p-2 bg-background text-foreground hover:bg-foreground hover:text-background focus-brutalist"
          on:click={toggleMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {#if isMobileMenuOpen}
            <X size={20} strokeWidth={2} />
          {:else}
            <Menu size={20} strokeWidth={2} />
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation - Brutalist Overlay -->
  {#if isMobileMenuOpen}
    <div class="fixed inset-0 bg-background border-t-2 border-foreground pt-20 z-40 md:hidden">
      <nav class="brutalist-container">
        <ul class="space-y-4">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                class="block py-4 px-4 border-brutalist border-foreground bg-background text-foreground hover:bg-foreground hover:text-background focus-brutalist"
                on:click={closeMenu}
              >
                <span class="brutalist-heading-md">{item.label}</span>
              </a>
            </li>
          {/each}
        </ul>
        
        <!-- Mobile Contact Block -->
        <div class="mt-8 border-brutalist border-foreground p-4 bg-foreground text-background">
          <p class="brutalist-small">READY TO WORK</p>
          <p class="brutalist-body mt-2">Available for new projects</p>
        </div>
      </nav>
    </div>
  {/if}
</header>
