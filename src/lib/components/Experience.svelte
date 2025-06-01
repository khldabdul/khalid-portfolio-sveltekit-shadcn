<script lang="ts">
  import { experiences } from "$lib/data/experience";
  import Icon from "@iconify/svelte";
  import { ChevronDown } from "lucide-svelte";

  // Icons for different companies/roles - brutalist minimal
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

  // Track which sections are expanded
  let expandedSections: { [key: number]: boolean } = {};

  function toggleSection(index: number) {
    expandedSections[index] = !expandedSections[index];
  }

  // Calculate unique companies count
  const uniqueCompanies = new Set(experiences.map(exp => exp.company)).size;
</script>

<section id="experience" class="py-16 bg-background">
  <div class="brutalist-container">
    
    <!-- Section Header - Standardized -->
    <div class="mb-12">
      <h2 class="brutalist-heading-lg text-foreground">
        WORK EXPERIENCE
      </h2>
      <div class="w-24 h-1 bg-secondary mt-4"></div>
    </div>

    <!-- Timeline - Less Boxing, More Focus -->
    <div class="space-y-8">
      {#each experiences as exp, i}
        <div class="border-l-4 border-secondary pl-6 relative">
          
          <!-- Timeline Dot -->
          <div class="absolute -left-3 top-0 w-4 h-4 border-2 border-secondary bg-secondary"></div>
          
          <!-- Experience Content -->
          <div class="pb-6">
            
            <!-- Header Info -->
            <div class="mb-4">
              <!-- Desktop layout: side by side -->
              <div class="hidden sm:flex items-start justify-between gap-4">
                <div class="flex-grow">
                  <h3 class="text-xl font-bold text-foreground mb-2">
                    {exp.position.toUpperCase()}
                  </h3>
                  <p class="text-lg font-medium text-secondary mb-1">
                    {exp.company.toUpperCase()}
                  </p>
                  <p class="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
                <div class="flex-shrink-0">
                  <div class="border border-secondary bg-secondary text-secondary-foreground px-3 py-1">
                    <p class="text-xs font-medium">
                      {exp.period.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Mobile layout: stacked -->
              <div class="sm:hidden">
                <h3 class="text-lg font-bold text-foreground mb-2">
                  {exp.position.toUpperCase()}
                </h3>
                <p class="text-base font-medium text-secondary mb-1">
                  {exp.company.toUpperCase()}
                </p>
                <p class="text-sm text-muted-foreground mb-3">
                  {exp.location}
                </p>
                <!-- Date below on mobile -->
                <div class="inline-block">
                  <div class="border border-secondary bg-secondary text-secondary-foreground px-2 py-1">
                    <p class="text-xs font-medium">
                      {exp.period.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Achievement - Amber Highlight -->
            {#if exp.keyAchievement}
              <div class="mb-4 border-l-2 border-secondary pl-4">
                <p class="text-xs font-medium text-secondary mb-2">KEY ACHIEVEMENT:</p>
                <p class="text-sm text-muted-foreground leading-relaxed">
                  {exp.keyAchievement}
                </p>
              </div>
            {/if}

            <!-- Collapsible Responsibilities -->
            <div>
              <button
                class="flex items-center justify-between w-full text-left py-2 border-b border-muted hover:border-secondary group focus-brutalist"
                on:click={() => toggleSection(i)}
              >
                <p class="text-xs font-medium text-foreground group-hover:text-secondary">
                  RESPONSIBILITIES ({exp.achievements.length})
                </p>
                <ChevronDown 
                  size={16} 
                  class="text-muted-foreground group-hover:text-secondary transform transition-none {expandedSections[i] ? 'rotate-180' : ''}"
                />
              </button>
              
              {#if expandedSections[i]}
                <div class="pt-3 space-y-2">
                  {#each exp.achievements as achievement}
                    <div class="flex items-start gap-2">
                      <div class="w-1 h-1 bg-secondary mt-2 flex-shrink-0"></div>
                      <p class="text-xs text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Experience Summary - Amber Accent -->
    <div class="mt-16">
      <div class="border-2 border-secondary bg-secondary text-secondary-foreground p-6">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div class="text-center">
            <p class="text-2xl font-bold">
              {experiences.length}
            </p>
            <p class="text-sm font-medium">POSITIONS</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">5+</p>
            <p class="text-sm font-medium">YEARS EXP</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">
              {uniqueCompanies}
            </p>
            <p class="text-sm font-medium">COMPANIES</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">
              {experiences.reduce((total, exp) => total + exp.achievements.length, 0)}
            </p>
            <p class="text-sm font-medium">ACHIEVEMENTS</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
