<script lang="ts">
  import { educationInfo } from '$lib/data/education';
  import FadeIn from '$lib/components/animated/FadeIn.svelte';
  import { GraduationCap, Calendar, MapPin, Award } from 'lucide-svelte';
</script>

<section id="education" class="py-20 px-4 sm:px-6 lg:px-8">
  <div class="container mx-auto max-w-4xl">
    <FadeIn>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">Education</h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
    </FadeIn>
    
    <div class="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
      {#each educationInfo as education, i}
        <FadeIn delay={200}>
          <div class="p-8">
            <div class="flex items-start">
              <div class="mr-4 mt-1">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={24} class="text-primary" />
                </div>
              </div>
              
              <div>
                <h3 class="text-2xl font-bold">{education.degree}</h3>
                <h4 class="text-xl font-medium mt-1">{education.institution}</h4>
                
                <div class="mt-4 space-y-2 text-muted-foreground">
                  <div class="flex items-center">
                    <Calendar size={18} class="mr-2" />
                    <span>{education.graduationDate}</span>
                  </div>
                  
                  <div class="flex items-center">
                    <MapPin size={18} class="mr-2" />
                    <span>{education.location}</span>
                  </div>
                  
                  {#if education.gpa}
                    <div class="flex items-center">
                      <Award size={18} class="mr-2" />
                      <span>GPA: {education.gpa}</span>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        
        {#if i < educationInfo.length - 1}
          <div class="border-t border-border"></div>
        {/if}
      {/each}
    </div>
    
    <FadeIn delay={300}>
      <div class="mt-12 bg-muted/30 rounded-lg p-6 text-center">
        <h3 class="text-xl font-semibold mb-3">Professional Development</h3>
        <p>Continuously enhancing skills through self-learning, online courses, and industry certifications in test automation, performance testing, and AI-assisted quality assurance.</p>
      </div>
    </FadeIn>
  </div>
</section>
