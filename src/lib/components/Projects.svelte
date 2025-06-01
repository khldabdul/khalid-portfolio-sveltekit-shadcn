<script lang="ts">
  import { projects } from '$lib/data/projects';
  import { Github, ExternalLink } from 'lucide-svelte';
</script>

<section id="projects" class="py-16 bg-background">
  <div class="brutalist-container">
    
    <!-- Section Header - Standardized -->
    <div class="mb-12">
      <h2 class="brutalist-heading-lg text-foreground">
        PROJECT HIGHLIGHTS
      </h2>
      <div class="w-24 h-1 bg-secondary mt-4"></div>
    </div>

    <!-- Projects Grid - 2 Column, Better Sizing -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {#each projects as project, i}
        <div class="border border-muted bg-card hover:border-secondary group flex flex-col h-full">
          
          <!-- Project Header with Amber Accent -->
          <div class="border-b border-muted group-hover:border-secondary p-4 bg-secondary text-secondary-foreground">
            <h3 class="text-lg font-bold">
              {project.title.toUpperCase()}
            </h3>
          </div>

          <!-- Project Content - Flexible -->
          <div class="p-4 flex-grow flex flex-col">
            
            <!-- Description -->
            <div class="mb-4">
              <p class="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <!-- Technologies - Compact Badges -->
            <div class="mb-4">
              <p class="text-xs font-medium text-foreground mb-2">
                TECHNOLOGIES:
              </p>
              <div class="flex flex-wrap gap-1">
                {#each project.technologies as tech}
                  <span class="px-2 py-1 text-xs border border-muted bg-muted text-muted-foreground group-hover:border-secondary group-hover:text-secondary">
                    {tech.toUpperCase()}
                  </span>
                {/each}
              </div>
            </div>

            <!-- Key Results - Limited to 2 -->
            <div class="mb-4 flex-grow">
              <p class="text-xs font-medium text-foreground mb-2">
                KEY RESULTS:
              </p>
              <div class="space-y-1">
                {#each project.highlights.slice(0, 2) as highlight}
                  <div class="flex items-start gap-2">
                    <div class="w-1 h-1 bg-secondary mt-2 flex-shrink-0"></div>
                    <p class="text-xs text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Project Number - Consistent Bottom Alignment -->
            <div class="mt-auto">
              <div class="border border-secondary bg-secondary text-secondary-foreground p-2 text-center">
                <p class="text-xs font-bold">
                  PROJECT #{String(i + 1).padStart(2, '0')}
                </p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Projects Summary - Amber Accent -->
    <div class="mt-16">
      <div class="border-2 border-secondary bg-secondary text-secondary-foreground p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <p class="text-2xl font-bold">
              {projects.length}
            </p>
            <p class="text-sm font-medium">FEATURED PROJECTS</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">
              {projects.reduce((total, project) => total + project.technologies.length, 0)}
            </p>
            <p class="text-sm font-medium">TECHNOLOGIES USED</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">100%</p>
            <p class="text-sm font-medium">SUCCESS RATE</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Block - Amber Accent -->
    <div class="mt-8">
      <div class="text-center">
        <a 
          href="https://github.com" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 border-2 border-secondary bg-secondary text-secondary-foreground px-6 py-3 font-medium hover:bg-background hover:text-secondary transition-none focus-brutalist"
        >
          <Github size={18} strokeWidth={2} />
          VIEW ALL PROJECTS
        </a>
      </div>
    </div>

  </div>
</section>
