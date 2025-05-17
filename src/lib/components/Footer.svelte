<script lang="ts">
  import { aboutInfo } from '$lib/data/about';
  import { Mail, MapPin, Linkedin, Github } from 'lucide-svelte';
  import Icon from "@iconify/svelte";
  
  const { contactInfo, fullName } = aboutInfo;
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-muted/30 py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-2xl font-bold mb-4">{fullName}</h3>
        <p class="mb-6 max-w-md">Senior QA Engineer specialized in test automation with a passion for improving traditional work processes using AI and innovative technologies.</p>
        
        <div class="flex space-x-4">
          <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn Profile">
            <Icon icon="mdi:linkedin" width="24" height="24" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub Profile">
            <Icon icon="mdi:github" width="24" height="24" />
          </a>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4">Contact Information</h3>
        <ul class="space-y-3">
          <li class="flex items-center">
            <Icon icon="mdi:email" class="mr-2 text-primary" width="20" height="20" />
            <a href={`mailto:${contactInfo.email}`} class="hover:text-primary transition-colors">
              {contactInfo.email}
            </a>
          </li>
          <li class="flex items-start">
            <Icon icon="mdi:map-marker" class="mr-2 mt-1 text-primary" width="20" height="20" />
            <span>{contactInfo.location}</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
      <p>&copy; {currentYear} {fullName}. All rights reserved.</p>
    </div>
  </div>
</footer>