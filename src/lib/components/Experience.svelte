<script lang="ts">
  import FadeIn from "$lib/components/animated/FadeIn.svelte";
  import SlideIn from "$lib/components/animated/SlideIn.svelte";
  import { experiences } from "$lib/data/experience";
  import Icon from "@iconify/svelte";

  // Icons for different companies/roles
  const getIconForRole = (company: string, position: string): string => {
    if (company.toLowerCase().includes("littlelives")) return "mdi:school";
    if (company.toLowerCase().includes("qwik")) return "mdi:rocket-launch";
    if (company.toLowerCase().includes("investree")) {
      if (position.toLowerCase().includes("lead"))
        return "mdi:account-supervisor";
      if (position.toLowerCase().includes("architect"))
        return "mdi:drawing-box";
      return "mdi:finance";
    }
    return "mdi:briefcase";
  };

  // Determine if item should be on left (even index) or right (odd index)
  const isLeft = (index: number) => index % 2 === 0;

  // State for collapsible sections
  let openSections: { [key: number]: boolean } = {};

  function toggleSection(index: number) {
    openSections[index] = !openSections[index];
  }
</script>

<section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
  <div class="container mx-auto">
    <FadeIn>
      <h2
        class="text-3xl sm:text-4xl font-bold mb-4 text-center text-foreground"
      >
        Work Experience
      </h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
    </FadeIn>

    <!-- Balanced spacing - not too wide, not too close -->
    <div class="max-w-6xl mx-auto">
      <div class="timeline-container relative">
        <!-- Central timeline line -->
        <div
          class="timeline-line absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform -translate-x-1/2 hidden md:block"
        ></div>

        {#each experiences as exp, i}
          <div class="timeline-item relative flex items-center mb-16 md:mb-24">
            {#if isLeft(i)}
              <!-- Left side layout - equal spacing from timeline -->
              <div class="w-full md:w-7/12 md:pr-16 order-2 md:order-1">
                <SlideIn delay={50 * i} direction="left">
                  <!-- Date badge -->
                  <div class="flex justify-start md:justify-end mb-4">
                    <div
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary text-primary-foreground"
                    >
                      {exp.period}
                    </div>
                  </div>

                  <!-- Experience card -->
                  <div
                    class="bg-card shadow-lg border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                  >
                    <h3 class="text-xl font-bold text-card-foreground mb-2">
                      {exp.position}
                    </h3>
                    <div class="flex flex-col mb-4">
                      <span class="text-lg font-medium text-primary"
                        >{exp.company}</span
                      >
                      <span
                        class="text-sm text-muted-foreground flex items-center gap-1"
                      >
                        <Icon icon="mdi:map-marker" class="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <!-- Key achievement -->
                    {#if exp.keyAchievement}
                      <div
                        class="mb-4 p-3 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg"
                      >
                        <p class="text-sm font-medium text-card-foreground">
                          <Icon
                            icon="mdi:star"
                            class="w-4 h-4 text-yellow-500 inline mr-1"
                          />
                          <strong>Key Achievement:</strong>
                          {exp.keyAchievement}
                        </p>
                      </div>
                    {/if}

                    <!-- Collapsible section with fixed bullet points -->
                    <div
                      class="bg-muted/50 rounded-lg border border-border overflow-hidden"
                    >
                      <button
                        class="w-full p-3 text-left text-sm font-medium text-card-foreground hover:bg-muted/80 transition-colors duration-200 flex items-center gap-2"
                        on:click={() => toggleSection(i)}
                      >
                        <Icon icon="mdi:list-box" class="w-4 h-4" />
                        <span
                          >View responsibilities ({exp.achievements
                            .length})</span
                        >
                        <Icon
                          icon="mdi:chevron-down"
                          class="w-4 h-4 ml-auto transform transition-transform duration-200 {openSections[
                            i
                          ]
                            ? 'rotate-180'
                            : ''}"
                        />
                      </button>
                      {#if openSections[i]}
                        <div class="px-3 pb-3">
                          <ul class="space-y-3 pl-0">
                            {#each exp.achievements as achievement}
                              <li class="flex items-start gap-3 text-sm">
                                <span
                                  class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                ></span>
                                <span
                                  class="text-muted-foreground leading-relaxed"
                                  >{achievement}</span
                                >
                              </li>
                            {/each}
                          </ul>
                        </div>
                      {/if}
                    </div>
                  </div>
                </SlideIn>
              </div>

              <!-- Center icon -->
              <div
                class="timeline-icon absolute left-1/2 transform -translate-x-1/2 z-10 order-1 md:order-2 hidden md:flex"
              >
                <SlideIn delay={100 + 50 * i}>
                  <div
                    class="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background"
                  >
                    <Icon
                      icon={getIconForRole(exp.company, exp.position)}
                      class="w-6 h-6 text-primary-foreground"
                    />
                  </div>
                </SlideIn>
              </div>

              <!-- Right side empty space for left layout -->
              <div class="hidden md:block w-7/12 order-3"></div>
            {:else}
              <!-- Right side layout - optimal distance from center -->
              <!-- Left side empty space for right layout -->
              <div class="hidden md:block w-7/12 order-1"></div>

              <!-- Center icon -->
              <div
                class="timeline-icon absolute left-1/2 transform -translate-x-1/2 z-10 order-2 hidden md:flex"
              >
                <SlideIn delay={100 + 50 * i}>
                  <div
                    class="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background"
                  >
                    <Icon
                      icon={getIconForRole(exp.company, exp.position)}
                      class="w-6 h-6 text-primary-foreground"
                    />
                  </div>
                </SlideIn>
              </div>

              <!-- Right side content - equal spacing from timeline -->
              <div class="w-full md:w-7/12 md:pl-8 order-2 md:order-3">
                <SlideIn delay={50 * i} direction="right">
                  <!-- Date badge -->
                  <div class="flex justify-start mb-4">
                    <div
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary text-primary-foreground"
                    >
                      {exp.period}
                    </div>
                  </div>

                  <!-- Experience card -->
                  <div
                    class="bg-card shadow-lg border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                  >
                    <h3 class="text-xl font-bold text-card-foreground mb-2">
                      {exp.position}
                    </h3>
                    <div class="flex flex-col mb-4">
                      <span class="text-lg font-medium text-primary"
                        >{exp.company}</span
                      >
                      <span
                        class="text-sm text-muted-foreground flex items-center gap-1"
                      >
                        <Icon icon="mdi:map-marker" class="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <!-- Key achievement -->
                    {#if exp.keyAchievement}
                      <div
                        class="mb-4 p-3 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg"
                      >
                        <p class="text-sm font-medium text-card-foreground">
                          <Icon
                            icon="mdi:star"
                            class="w-4 h-4 text-yellow-500 inline mr-1"
                          />
                          <strong>Key Achievement:</strong>
                          {exp.keyAchievement}
                        </p>
                      </div>
                    {/if}

                    <!-- Collapsible section with fixed bullet points -->
                    <div
                      class="bg-muted/50 rounded-lg border border-border overflow-hidden"
                    >
                      <button
                        class="w-full p-3 text-left text-sm font-medium text-card-foreground hover:bg-muted/80 transition-colors duration-200 flex items-center gap-2"
                        on:click={() => toggleSection(i)}
                      >
                        <Icon icon="mdi:list-box" class="w-4 h-4" />
                        <span
                          >View responsibilities ({exp.achievements
                            .length})</span
                        >
                        <Icon
                          icon="mdi:chevron-down"
                          class="w-4 h-4 ml-auto transform transition-transform duration-200 {openSections[
                            i
                          ]
                            ? 'rotate-180'
                            : ''}"
                        />
                      </button>
                      {#if openSections[i]}
                        <div class="px-3 pb-3">
                          <ul class="space-y-3 pl-0">
                            {#each exp.achievements as achievement}
                              <li class="flex items-start gap-3 text-sm">
                                <span
                                  class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                ></span>
                                <span
                                  class="text-muted-foreground leading-relaxed"
                                  >{achievement}</span
                                >
                              </li>
                            {/each}
                          </ul>
                        </div>
                      {/if}
                    </div>
                  </div>
                </SlideIn>
              </div>
            {/if}

            <!-- Mobile icon (shown on mobile only) -->
            <div class="md:hidden absolute -left-3 top-4 order-1">
              <div
                class="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background"
              >
                <Icon
                  icon={getIconForRole(exp.company, exp.position)}
                  class="w-5 h-5 text-primary-foreground"
                />
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .timeline-container {
    position: relative;
    padding: 2rem 0;
  }

  .timeline-item {
    min-height: 200px;
    /* Fixed alignment for timeline items */
    display: flex;
    align-items: flex-start;
  }

  /* Ensure proper spacing between timeline items */
  .timeline-item:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -60px;
    transform: translateX(-50%);
    width: 1px;
    height: 60px;
    background: hsl(var(--primary) / 0.3);
  }

  /* Fixed mobile responsive adjustments */
  @media (max-width: 768px) {
    .timeline-item {
      padding-left: 3.5rem;
      min-height: auto;
      margin-bottom: 2rem !important;
    }

    .timeline-item::before {
      content: "";
      position: absolute;
      left: 20px;
      top: 40px;
      bottom: -40px;
      width: 2px;
      background: hsl(var(--primary) / 0.3);
    }

    .timeline-item:last-child::before {
      display: none;
    }

    /* Remove extra padding on mobile - cards take full width */
    .timeline-item .md\\:pr-16 {
      padding-right: 0;
    }

    .timeline-item .md\\:pl-16 {
      padding-left: 0;
    }
  }

  /* Fix for bullet points - remove default list styling */
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Enhanced timeline icon positioning */
  .timeline-icon {
    top: 2rem;
  }

  /* Responsive font sizes */
  @media (max-width: 640px) {
    .text-xl {
      font-size: 1.125rem;
    }

    .text-lg {
      font-size: 1rem;
    }
  }

  /* Additional visual enhancement */
  .timeline-item:hover .timeline-icon > div > div {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
</style>
