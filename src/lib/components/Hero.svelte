<script lang="ts">
  import { aboutInfo } from "$lib/data/about";
  import Icon from "@iconify/svelte";
  import AnimatedName from "$lib/components/animated/AnimatedName.svelte";
  import AnimatedJobTitle from "$lib/components/animated/AnimatedJobTitle.svelte";

  const { fullName, photoUrl, shortBio, contactInfo } = aboutInfo;
</script>

<section
  id="home"
  class="min-h-screen flex items-center py-8 px-8 bg-background relative"
>
  <div class="brutalist-container w-full">
    <!-- Asymmetrical Grid - Optimized for viewport -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
      
      <!-- Left side - Typography Statement Block -->
      <div class="lg:col-span-7 space-y-6">
        <!-- Status Label -->
        <div class="border-brutalist border-foreground inline-block">
          <p class="brutalist-small px-4 py-2 bg-foreground text-background">
            PORTFOLIO
          </p>
        </div>
        
        <!-- Main Typography Block -->
        <div class="space-y-4">
          <!-- Animated Name with both options -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
            <!-- You can switch between 'underline' and 'gradient' variants -->
            <AnimatedName 
              name={fullName} 
              variant="underline" 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight"
            />
          </h1>
          
          <!-- Alternative gradient version - uncomment to try -->
          <!-- 
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
            <AnimatedName 
              name={fullName} 
              variant="gradient" 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight"
            />
          </h1>
          -->
          
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-normal text-foreground">
            <AnimatedJobTitle 
              className="text-xl sm:text-2xl lg:text-3xl font-normal text-foreground"
            />
          </h2>
          
          <div class="max-w-xl">
            <p class="text-base sm:text-lg leading-relaxed text-foreground">
              {shortBio}
            </p>
          </div>
        </div>

        <!-- Action Block -->
        <div class="space-y-4 pt-4">
          <div class="flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              class="brutalist-button focus-brutalist"
            >
              VIEW WORK
            </a>
            <!-- Resume button is now hidden -->
            <!-- 
            <a
              href="/files/resume.pdf"
              download
              class="brutalist-button-secondary inline-flex items-center justify-center gap-3 focus-brutalist"
            >
              <Icon icon="lucide:download" width={16} height={16} /> RESUME
            </a>
            -->
          </div>

          <!-- Social Links Block -->
          <div class="border-brutalist border-foreground p-3 bg-background">
            <div class="flex items-center gap-6">
              <p class="brutalist-small text-foreground">CONNECT:</p>
              <div class="flex items-center gap-3">
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-foreground hover:text-primary focus-brutalist transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Icon icon="simple-icons:linkedin" width={20} height={20} />
                </a>
                <a
                  href="https://github.com/khldabdul"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-foreground hover:text-accent focus-brutalist transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Icon icon="simple-icons:github" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side - Image as Brutalist Geometric Block -->
      <div class="lg:col-span-5">
        <div class="max-w-sm mx-auto lg:mx-0 lg:ml-auto">
          
          <!-- Main Image Block -->
          <div class="border-brutalist-thick border-foreground bg-background p-3">
            <div class="aspect-square">
              <img
                src={photoUrl}
                alt={fullName}
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <!-- Status Block with accent color -->
          <div class="mt-4">
            <div class="border-brutalist border-accent bg-accent text-accent-foreground p-3">
              <div class="text-center">
                <p class="brutalist-small font-bold">AVAILABLE FOR WORK</p>
              </div>
            </div>
          </div>

          <!-- Info Block -->
          <div class="mt-3">
            <div class="border-brutalist border-foreground bg-background p-3">
              <div class="space-y-1">
                <div class="flex justify-between">
                  <span class="brutalist-small">LOCATION:</span>
                  <span class="brutalist-small">REMOTE</span>
                </div>
                <div class="flex justify-between">
                  <span class="brutalist-small">STATUS:</span>
                  <span class="brutalist-small text-primary font-bold">OPEN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>