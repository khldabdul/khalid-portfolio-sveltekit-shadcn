<script lang="ts">
  import { experiences } from '$lib/data/experience';
  import SlideIn from '$lib/components/animated/SlideIn.svelte';
  import FadeIn from '$lib/components/animated/FadeIn.svelte';
  import { Badge } from 'lucide-svelte';
  import { writable } from 'svelte/store';
  
  // Initialize experience details visibility state
  let detailsVisible = experiences.map(() => false);
  
  // Toggle function for details visibility
  function toggleDetails(index: number) {
    detailsVisible[index] = !detailsVisible[index];
  }
  
  // Determine if we're on an odd or even index for alternating layout
  const isAlternating = (i: number) => i % 2 === 0;
</script>

<section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
  <div class="container mx-auto">
    <FadeIn>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">Work Experience</h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
    </FadeIn>
    
    <div class="relative">
      <!-- Timeline Line -->
      <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border rounded"></div>
      
      <div class="space-y-8">
        {#each experiences as exp, i}
          <div class="relative">
            <SlideIn 
              delay={100 * (i + 1)} 
              direction={isAlternating(i) ? 'left' : 'right'}
            >
              <div class={`md:w-1/2 ${isAlternating(i) ? 'md:pr-10 md:ml-0' : 'md:pl-10 md:ml-auto'}`}>
                <!-- Timeline dot for desktop -->
                <div class="hidden md:block absolute top-6 w-5 h-5 rounded-full bg-primary left-1/2 transform -translate-x-1/2 z-10 shadow-md"></div>
                
                <div class="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div class="flex flex-col mb-4">
                    <span class="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3 self-start">
                      {exp.period}
                    </span>
                    <h3 class="text-2xl font-bold">{exp.position}</h3>
                    <div class="flex flex-wrap items-center mt-1">
                      <span class="text-lg font-medium">{exp.company}</span>
                      <span class="mx-2 text-muted-foreground">•</span>
                      <span class="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                  
                  <div class="mt-4">
                    <button 
                      class="flex items-center text-sm font-medium mb-3 hover:text-primary transition-colors" 
                      on:click={() => toggleDetails(i)}
                      aria-expanded={detailsVisible[i]}
                    >
                      <span class="mr-1">{detailsVisible[i] ? 'Hide' : 'Show'} responsibilities</span>
                      <svg 
                        class="w-4 h-4 transition-transform duration-200" 
                        class:rotate-180={detailsVisible[i]} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    {#if detailsVisible[i]}
                      <ul class="space-y-2 list-disc pl-5 transition-all">
                        {#each exp.achievements as achievement}
                          <li>{achievement}</li>
                        {/each}
                      </ul>
                    {/if}
                  </div>
                  
                  {#if exp.keyAchievement}
                    <div class="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p class="font-medium">Key Achievement: {exp.keyAchievement}</p>
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
