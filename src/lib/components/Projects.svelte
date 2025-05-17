<script lang="ts">
  import { projects } from '$lib/data/projects';
  import SlideIn from '$lib/components/animated/SlideIn.svelte';
  import FadeIn from '$lib/components/animated/FadeIn.svelte';
  import { Code, CheckCircle } from 'lucide-svelte';
</script>

<section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
  <div class="container mx-auto">
    <FadeIn>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">Project Highlights</h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
    </FadeIn>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project, i}
        <SlideIn delay={100 * (i + 1)} direction="bottom">
          <div class="bg-card h-full rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3">{project.title}</h3>
              <p class="text-muted-foreground mb-6">{project.description}</p>
              
              <div class="mb-6">
                <h4 class="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">Technologies</h4>
                <div class="flex flex-wrap gap-2">
                  {#each project.technologies as tech}
                    <span class="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
              
              <h4 class="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">Key Results</h4>
              <ul class="space-y-2">
                {#each project.highlights as highlight}
                  <li class="flex items-start">
                    <CheckCircle size={16} class="text-primary shrink-0 mt-1 mr-2" />
                    <span>{highlight}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </SlideIn>
      {/each}
    </div>
    
    <FadeIn delay={400}>
      <div class="text-center mt-12">
        <a 
          href="https://github.com" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          <Code size={18} /> See More Projects
        </a>
      </div>
    </FadeIn>
  </div>
</section>
