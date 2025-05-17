<script lang="ts">
  import { aboutInfo } from '$lib/data/about';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Education from '$lib/components/Education.svelte';
  
  // SEO metadata
  const title = `${aboutInfo.fullName} | ${aboutInfo.title}`;
  const description = "Senior QA Engineer specialized in test automation with expertise in Playwright, Cypress, and AI-assisted testing. Experienced in leading QA teams and implementing innovative testing solutions.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>

<Hero />
<About />
<Experience />
<Skills />
<Projects />
<Education />
