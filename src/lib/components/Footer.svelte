<script lang="ts">
  import ThemeToggle from "$lib/components/ui/ThemeToggle.svelte";
  import { aboutInfo } from "$lib/data/about";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  const { contactInfo, fullName } = aboutInfo;
  const currentYear = new Date().getFullYear();

  // Stats data
  const stats = [
    { label: "Years Experience", value: 5, icon: "lucide:trophy", suffix: "+" },
    {
      label: "Projects Completed",
      value: 25,
      icon: "lucide:code",
      suffix: "+",
    },
    { label: "Technologies", value: 15, icon: "lucide:zap", suffix: "+" },
    {
      label: "Coffee Consumed",
      value: 1247,
      icon: "lucide:coffee",
      suffix: " cups",
    },
  ];

  // Action cards data
  const actionCards = [
    // {
    //   title: "Download Resume",
    //   description: "View my complete professional experience",
    //   icon: "lucide:download",
    //   href: "/files/resume.pdf",
    //   download: true,
    //   primary: true,
    // },
    {
      title: "Schedule a Call",
      description: "Let's discuss your project needs",
      icon: "lucide:calendar",
      href:
        "mailto:" +
        contactInfo.email +
        "?subject=Schedule a Call - Project Discussion",
      primary: false,
    },
    {
      title: "View Projects",
      description: "Explore my latest work and case studies",
      icon: "lucide:user",
      href: "#projects",
      primary: false,
    },
  ];

  // Animation state
  let mounted = false;
  let statsVisible = false;
  let counters = stats.map(() => 0);

  // Improved counter animation
  function animateCounters() {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameDuration);

    stats.forEach((stat, index) => {
      let frame = 0;
      const increment = stat.value / totalFrames;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;

        if (progress >= 1) {
          counters[index] = stat.value;
          clearInterval(timer);
        } else {
          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          counters[index] = Math.round(stat.value * easeOutCubic);
        }
      }, frameDuration);
    });
  }

  onMount(() => {
    mounted = true;

    // Trigger stats animation after a short delay
    setTimeout(() => {
      statsVisible = true;
      animateCounters();
    }, 500);
  });
</script>

<footer class="bg-background border-t-brutalist-thick border-foreground mt-16">
  <div class="brutalist-container py-16">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      <!-- Left Side - Contact & Info -->
      <div class="space-y-8">
        <!-- Header -->
        <div class="space-y-4">
          <h2 class="brutalist-heading-lg text-foreground">
            LET'S WORK TOGETHER
          </h2>
          <div class="w-16 h-1 bg-primary"></div>
          <p class="brutalist-body text-muted-foreground max-w-md">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <!-- Contact Information Cards -->
        <div class="space-y-4">
          <!-- Email Card -->
          <div
            class="border-brutalist border-foreground bg-card p-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group email-card"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              class="flex items-center justify-between w-full"
            >
              <div class="flex items-center gap-4">
                <div
                  class="p-2 bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300"
                >
                  <Icon icon="lucide:mail" width={20} height={20} />
                </div>
                <div>
                  <p
                    class="brutalist-small text-muted-foreground group-hover:text-primary-foreground"
                  >
                    EMAIL
                  </p>
                  <p class="brutalist-body font-medium">{contactInfo.email}</p>
                </div>
              </div>
              <Icon
                icon="lucide:external-link"
                width={16}
                height={16}
                class="opacity-50 group-hover:opacity-100"
              />
            </a>
          </div>

          <!-- Location Card -->
          <div class="border-brutalist border-foreground bg-card p-4">
            <div class="flex items-center gap-4">
              <div class="p-2 bg-accent text-accent-foreground">
                <Icon icon="lucide:map-pin" width={20} height={20} />
              </div>
              <div>
                <p class="brutalist-small text-muted-foreground">LOCATION</p>
                <p class="brutalist-body font-medium">{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
          <h3 class="brutalist-heading-sm text-foreground">CONNECT WITH ME</h3>
          <div class="flex gap-3">
            <a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 border-brutalist border-foreground bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 focus-brutalist group"
              aria-label="LinkedIn Profile"
            >
              <Icon icon="simple-icons:linkedin" width={24} height={24} />
            </a>

            <a
              href="https://github.com/khldabdul"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 border-brutalist border-foreground bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 focus-brutalist group"
              aria-label="GitHub Profile"
            >
              <Icon icon="simple-icons:github" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>

      <!-- Right Side - Stats & Action Cards -->
      <div class="space-y-8">
        <!-- Quick Stats -->
        <div class="border-brutalist-thick border-foreground bg-card p-6">
          <h3 class="brutalist-heading-md text-foreground mb-6">
            BY THE NUMBERS
          </h3>

          <div class="grid grid-cols-2 gap-4">
            {#each stats as stat, index}
              <div
                class="text-center space-y-2 p-4 border-brutalist border-border bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <div class="flex justify-center">
                  <Icon
                    icon={stat.icon}
                    width={24}
                    height={24}
                    class="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                  />
                </div>
                <div class="space-y-1">
                  <div class="brutalist-heading-lg font-black">
                    {#if statsVisible && mounted}
                      <span>{counters[index]}</span>
                    {:else}
                      <span>0</span>
                    {/if}
                    <span
                      class="text-primary group-hover:text-primary-foreground"
                      >{stat.suffix}</span
                    >
                  </div>
                  <p
                    class="brutalist-small text-muted-foreground group-hover:text-primary-foreground"
                  >
                    {stat.label.toUpperCase()}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Action Cards -->
        <div class="space-y-4">
          <h3 class="brutalist-heading-sm text-foreground">READY TO START?</h3>

          {#each actionCards as card}
            <a
              href={card.href}
              download={card.download || undefined}
              class="block border-brutalist border-foreground p-4 bg-background transition-all duration-300 group focus-brutalist"
              class:hover:bg-primary={card.primary}
              class:hover:text-primary-foreground={card.primary}
              class:hover:border-primary={card.primary}
              class:hover:bg-accent={!card.primary}
              class:hover:text-accent-foreground={!card.primary}
              class:hover:border-accent={!card.primary}
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="p-2 transition-colors duration-300"
                    class:bg-primary={card.primary}
                    class:text-primary-foreground={card.primary}
                    class:bg-accent={!card.primary}
                    class:text-accent-foreground={!card.primary}
                    class:group-hover:bg-primary-foreground={card.primary}
                    class:group-hover:text-primary={card.primary}
                    class:group-hover:bg-accent-foreground={!card.primary}
                    class:group-hover:text-accent={!card.primary}
                  >
                    <Icon icon={card.icon} width={20} height={20} />
                  </div>
                  <div>
                    <p class="brutalist-body font-bold">{card.title}</p>
                    <p
                      class="brutalist-small text-muted-foreground group-hover:text-inherit"
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
                <Icon
                  icon="lucide:external-link"
                  width={16}
                  height={16}
                  class="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          {/each}
        </div>

        <!-- Theme Toggle -->
        <div class="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="mt-16 pt-8 border-t-brutalist border-foreground">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <!-- Left - Status -->
        <div class="space-y-2">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground"
          >
            <div class="w-2 h-2 bg-current rounded-full animate-pulse"></div>
            <span class="brutalist-small font-bold"
              >AVAILABLE FOR NEW PROJECTS</span
            >
          </div>
          <p class="brutalist-small text-muted-foreground">
            Currently accepting freelance and full-time opportunities
          </p>
        </div>

        <!-- Right - Copyright -->
        <div class="text-left md:text-right space-y-1">
          <p class="brutalist-body font-medium text-foreground">
            &copy; {currentYear}
            {fullName.toUpperCase()}
          </p>
          <div
            class="flex items-center gap-1 text-muted-foreground justify-start md:justify-end"
          >
            <span class="brutalist-small">MADE WITH</span>
            <Icon
              icon="lucide:heart"
              width={14}
              height={14}
              class="text-destructive fill-current"
            />
            <!-- <span class="brutalist-small">IN REMOTE</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  /* FIXED: Text selection in email card hover states */
  .email-card:hover ::selection {
    background: hsl(var(--primary-foreground) / 0.9) !important;
    color: hsl(var(--primary)) !important;
  }

  .email-card:hover ::-moz-selection {
    background: hsl(var(--primary-foreground) / 0.9) !important;
    color: hsl(var(--primary)) !important;
  }

  /* Ensure text is visible when hovering over the entire card */
  .email-card:hover * {
    color: inherit;
  }

  /* Smooth transitions for all interactive elements */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Animation for stats */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Counter animation enhancement */
  .brutalist-heading-lg {
    font-variant-numeric: tabular-nums;
  }

  /* Hover effects for action cards */
  .group:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px hsl(var(--primary) / 0.15);
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .group:hover {
      transform: none;
      box-shadow: none;
    }

    .animate-pulse {
      animation: none;
    }
  }
</style>
