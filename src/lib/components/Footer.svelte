<script lang="ts">
  import { aboutInfo } from '$lib/data/about';
  import { Mail, MapPin, Linkedin, Github } from 'lucide-svelte';
  
  const { contactInfo, fullName } = aboutInfo;
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-background border-t-brutalist-thick border-foreground">
  <div class="brutalist-container py-brutalist-xl">
    
    <!-- Contact Block -->
    <div class="border-brutalist border-foreground p-6 bg-foreground text-background">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Contact Info -->
        <div>
          <h3 class="brutalist-heading-md mb-4">
            CONTACT
          </h3>
          <div class="space-y-4">
            <div class="border-brutalist border-background p-3 bg-background text-foreground">
              <div class="flex items-center gap-3">
                <Mail size={20} strokeWidth={2} />
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  class="brutalist-body hover:text-primary focus-brutalist"
                >
                  {contactInfo.email.toUpperCase()}
                </a>
              </div>
            </div>
            
            <div class="border-brutalist border-background p-3 bg-background text-foreground">
              <div class="flex items-center gap-3">
                <MapPin size={20} strokeWidth={2} />
                <span class="brutalist-body">
                  {contactInfo.location.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Social Links -->
        <div>
          <h3 class="brutalist-heading-md mb-4">
            SOCIAL
          </h3>
          <div class="space-y-4">
            <a 
              href={`https://${contactInfo.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="block border-brutalist border-background p-3 bg-background text-foreground hover:bg-foreground hover:text-background focus-brutalist"
            >
              <div class="flex items-center gap-3">
                <Linkedin size={20} strokeWidth={2} />
                <span class="brutalist-body">LINKEDIN PROFILE</span>
              </div>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="block border-brutalist border-background p-3 bg-background text-foreground hover:bg-foreground hover:text-background focus-brutalist"
            >
              <div class="flex items-center gap-3">
                <Github size={20} strokeWidth={2} />
                <span class="brutalist-body">GITHUB PROFILE</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Status Block -->
    <div class="mt-6 border-brutalist border-foreground p-4 bg-background">
      <div class="text-center space-y-2">
        <p class="brutalist-small font-bold text-foreground">
          STATUS: AVAILABLE FOR NEW OPPORTUNITIES
        </p>
        <p class="brutalist-small text-foreground">
          &copy; {currentYear} {fullName.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>

  </div>
</footer>
