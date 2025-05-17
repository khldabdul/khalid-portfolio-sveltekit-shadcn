<script lang="ts">
  import FadeIn from "$lib/components/animated/FadeIn.svelte";
  import TypewriterText from "$lib/components/animated/TypewriterText.svelte";
  import { aboutInfo } from "$lib/data/about";
  import { Download, Github, Linkedin } from "lucide-svelte";

  const { fullName, title, photoUrl, shortBio, contactInfo } = aboutInfo;
</script>

<section
  id="home"
  class="min-h-screen flex items-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30"
>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <FadeIn delay={200}>
        <div class="flex flex-col space-y-6 max-w-xl">
          <span class="text-primary font-medium">Hello, I'm</span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <TypewriterText text={fullName} delay={500} speed={50} />
          </h1>
          <p class="text-xl sm:text-2xl font-medium text-muted-foreground">
            {title}
          </p>
          <p class="text-lg">{shortBio}</p>

          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              See Projects
            </a>
            <a
              href="/files/resume.pdf"
              download
              class="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 rounded-md font-medium transition-colors"
            >
              <Download size={18} /> Resume
            </a>
          </div>

          <div class="flex items-center gap-4 pt-2">
            <a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <div class="relative aspect-square w-full max-w-md mx-auto lg:ml-auto">
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"
          ></div>
          <img
            src={photoUrl}
            alt={fullName}
            class="w-full h-full object-cover rounded-full p-2 relative z-10"
          />

          <!-- Animated decoration circles -->
          <div
            class="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-full animate-pulse"
          ></div>
          <div
            class="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-full animate-pulse"
            style="animation-delay: 1s"
          ></div>
        </div>
      </FadeIn>
    </div>
  </div>
</section>

<style>
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  .animate-pulse {
    animation: pulse 4s ease-in-out infinite;
  }
</style>
