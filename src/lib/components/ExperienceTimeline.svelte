<script lang="ts">
  import { experiences } from '$lib/data/experience';
  import SlideIn from '$lib/components/animated/SlideIn.svelte';
  import FadeIn from '$lib/components/animated/FadeIn.svelte';
  import Icon from '@iconify/svelte';
  
  // Icons for different companies/roles
  const getIconForRole = (company: string, position: string): string => {
    if (company.toLowerCase().includes('littlelives')) return 'mdi:school';
    if (company.toLowerCase().includes('qwik')) return 'mdi:rocket-launch';
    if (company.toLowerCase().includes('investree')) {
      if (position.toLowerCase().includes('lead')) return 'mdi:account-supervisor';
      if (position.toLowerCase().includes('architect')) return 'mdi:drawing-box';
      return 'mdi:finance';
    }
    return 'mdi:briefcase';
  };

  function formatDateRange(period: string): string {
    return period;
  }
</script>

<section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-base-200/50">
  <div class="container mx-auto">
    <FadeIn>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center text-base-content">Work Experience</h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
    </FadeIn>

    <div class="max-w-4xl mx-auto">
      <!-- Timeline using simple vertical structure -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
        
        {#each experiences as experience, index}
          <div class="relative flex items-start mb-12 pl-12 md:pl-20">
            <!-- Timeline dot -->
            <div class="absolute left-0 md:left-4 w-8 h-8 bg-primary rounded-full border-4 border-base-100 flex items-center justify-center shadow-lg z-10">
              <Icon 
                icon={getIconForRole(experience.company, experience.position)} 
                class="w-4 h-4 text-primary-content" 
                aria-label="Experience marker"
              />
            </div>
            
            <!-- Content -->
            <SlideIn delay={50 * index} direction="left">
              <div class="flex-1">
                <!-- Date -->
                <div class="mb-4">
                  <time class="inline-block px-3 py-1 text-sm font-semibold bg-primary text-primary-content rounded-full">
                    {formatDateRange(experience.period)}
                  </time>
                </div>
                
                <!-- Card -->
                <div class="bg-base-100 border border-base-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                  <!-- Header -->
                  <div class="mb-4">
                    <h3 class="text-xl font-bold text-base-content mb-2">
                      {experience.position}
                    </h3>
                    <div class="flex flex-col gap-1">
                      <span class="text-lg font-medium text-primary">{experience.company}</span>
                      <span class="text-sm text-base-content/70 flex items-center gap-1">
                        <Icon icon="mdi:map-marker" class="w-4 h-4" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <!-- Key Achievement -->
                  {#if experience.keyAchievement}
                    <div class="mb-4 p-4 bg-info/10 border border-info/20 rounded-lg">
                      <h4 class="font-semibold text-base-content mb-2 flex items-center gap-2">
                        <Icon icon="mdi:star" class="w-4 h-4 text-warning" />
                        Key Achievement:
                      </h4>
                      <p class="text-base-content/80 leading-relaxed">
                        {experience.keyAchievement}
                      </p>
                    </div>
                  {/if}

                  <!-- Achievements/Responsibilities -->
                  {#if experience.achievements && experience.achievements.length > 0}
                    <div class="collapse collapse-arrow bg-base-200/50">
                      <input type="checkbox" name="experience-{index}" />
                      <div class="collapse-title text-sm font-medium flex items-center gap-2">
                        <Icon icon="mdi:list-box" class="w-4 h-4" />
                        View all responsibilities ({experience.achievements.length})
                      </div>
                      <div class="collapse-content">
                        <ul class="space-y-3 mt-3">
                          {#each experience.achievements as achievement}
                            <li class="flex items-start gap-3">
                              <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span class="text-base-content/80 leading-relaxed text-sm">{achievement}</span>
                            </li>
                          {/each}
                        </ul>
                      </div>
                    </div>
                  {/if}
                </div>
              </div>
            </SlideIn>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  /* Enhanced timeline styling */
  .collapse-title {
    min-height: auto;
    padding: 0.75rem;
  }
  
  .collapse-content {
    padding: 0 0.75rem 0.75rem 0.75rem;
  }

  /* Smooth hover effects */
  .bg-base-100 {
    transition: all 0.2s ease-in-out;
  }

  .bg-base-100:hover {
    transform: translateY(-2px);
  }

  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    .relative .absolute {
      left: 0;
    }
    
    .pl-12 {
      padding-left: 3rem;
    }
  }

  /* Fix for bullet points alignment */
  ul li {
    list-style: none;
  }

  /* Timeline line enhancement */
  .absolute.w-0\.5 {
    background: linear-gradient(to bottom, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.2));
  }
</style>