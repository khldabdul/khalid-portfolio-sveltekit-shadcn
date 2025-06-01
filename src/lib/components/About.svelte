<script lang="ts">
  import { aboutInfo } from '$lib/data/about';
  import Icon from "@iconify/svelte";
  
  const { longBio } = aboutInfo;
  
  const highlights = [
    {
      icon: "mdi:code-brackets",
      title: "Automation Expert",
      description: "Skilled in developing efficient test automation frameworks with Playwright and Cypress"
    },
    {
      icon: "mdi:trophy-award",
      title: "Quality Champion",
      description: "Established quality standards and best practices across multiple organizations"
    },
    {
      icon: "mdi:account-group",
      title: "Team Leader",
      description: "Experienced in mentoring and leading QA teams to meet organizational objectives"
    },
    {
      icon: "mdi:lightbulb-on",
      title: "Innovator",
      description: "Integration of AI solutions for more efficient testing processes and improved coverage"
    }
  ];
</script>

<section id="about" class="py-16 bg-background">
  <div class="brutalist-container">
    
    <!-- Section Header - Standardized -->
    <div class="mb-12">
      <h2 class="brutalist-heading-lg text-foreground">
        ABOUT ME
      </h2>
      <div class="w-24 h-1 bg-secondary mt-4"></div>
    </div>
    
    <!-- Bio - Clean Typography -->
    <div class="mb-16">
      <p class="text-lg leading-relaxed text-muted-foreground max-w-4xl">
        {longBio}
      </p>
    </div>

    <!-- Highlights Grid - Less Boxing -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each highlights as highlight}
        <div class="group">
          
          <!-- Icon with Amber Accent -->
          <div class="mb-4">
            <div class="w-12 h-12 border-2 border-secondary bg-secondary text-secondary-foreground flex items-center justify-center group-hover:bg-background group-hover:text-secondary transition-none">
              <Icon 
                icon={highlight.icon} 
                width="24" 
                height="24"
              />
            </div>
          </div>
          
          <!-- Content -->
          <div>
            <h3 class="brutalist-heading-md text-foreground mb-3 group-hover:text-secondary">
              {highlight.title.toUpperCase()}
            </h3>
            <p class="text-muted-foreground leading-relaxed">
              {highlight.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <!-- About Summary - Amber Accent -->
    <div class="mt-16">
      <div class="border-2 border-secondary bg-secondary text-secondary-foreground p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <p class="text-2xl font-bold">AI</p>
            <p class="text-sm font-medium">INTEGRATION</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">QA</p>
            <p class="text-sm font-medium">LEADERSHIP</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">TEST</p>
            <p class="text-sm font-medium">AUTOMATION</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">TEAM</p>
            <p class="text-sm font-medium">MENTORING</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
