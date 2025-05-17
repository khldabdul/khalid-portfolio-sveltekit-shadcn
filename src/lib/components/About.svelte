<script lang="ts">
  import { aboutInfo } from '$lib/data/about';
  import FadeIn from '$lib/components/animated/FadeIn.svelte';
  import SlideIn from '$lib/components/animated/SlideIn.svelte';
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

<section id="about" class="py-20 px-4 sm:px-6 lg:px-8">
  <div class="container mx-auto">
    <FadeIn>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">About Me</h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
    </FadeIn>
    
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
      <SlideIn direction="left" delay={200} class="lg:col-span-3">
        <div class="prose prose-lg max-w-none">
          <p class="text-lg leading-relaxed">{longBio}</p>
          <p class="text-lg leading-relaxed mt-4">
            With a focus on building robust testing solutions, I've helped organizations improve their
            product quality and accelerate their development cycles. I believe in continuous learning
            and staying updated with the latest testing technologies and methodologies.
          </p>
        </div>
      </SlideIn>
      
      <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {#each highlights as highlight, i}
          <SlideIn direction="right" delay={200 + (i * 100)}>
            <div class="bg-card p-6 rounded-lg border border-border/50 hover:shadow-md transition-all hover:bg-card/95 hover:scale-105 duration-300 h-full">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon icon={highlight.icon} width="24" height="24" class="text-primary" />
              </div>
              <h3 class="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p class="text-muted-foreground">{highlight.description}</p>
            </div>
          </SlideIn>
        {/each}
      </div>
    </div>
  </div>
</section>