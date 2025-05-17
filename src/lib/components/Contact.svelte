<script lang="ts">
  import { aboutInfo } from '$lib/data/about';
  import FadeIn from '$lib/components/animated/FadeIn.svelte';
  import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-svelte';
  
  const { contactInfo } = aboutInfo;
  
  let name = '';
  let email = '';
  let message = '';
  let formSubmitted = false;
  let submitting = false;
  
  const handleSubmit = () => {
    submitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      formSubmitted = true;
      submitting = false;
      
      // Reset form after 5 seconds
      setTimeout(() => {
        formSubmitted = false;
        name = '';
        email = '';
        message = '';
      }, 5000);
    }, 1000);
  };
</script>

<section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
  <div class="container mx-auto">
    <FadeIn>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
    </FadeIn>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <FadeIn delay={200}>
        <div class="bg-card rounded-lg shadow-sm border border-border p-8">
          <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Mail size={20} class="text-primary" />
              </div>
              <div>
                <h4 class="text-lg font-medium">Email</h4>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  class="text-muted-foreground hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Phone size={20} class="text-primary" />
              </div>
              <div>
                <h4 class="text-lg font-medium">Phone</h4>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                  class="text-muted-foreground hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <MapPin size={20} class="text-primary" />
              </div>
              <div>
                <h4 class="text-lg font-medium">Location</h4>
                <p class="text-muted-foreground">{contactInfo.location}</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Linkedin size={20} class="text-primary" />
              </div>
              <div>
                <h4 class="text-lg font-medium">LinkedIn</h4>
                <a 
                  href={`https://${contactInfo.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-muted-foreground hover:text-primary transition-colors"
                >
                  {contactInfo.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      
      <FadeIn delay={300}>
        <div class="bg-card rounded-lg shadow-sm border border-border p-8">
          <h3 class="text-2xl font-bold mb-6">Send a Message</h3>
          
          {#if formSubmitted}
            <div class="bg-green-100 text-green-800 p-4 rounded-md">
              <p class="font-medium">Your message has been sent!</p>
              <p class="mt-1">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          {:else}
            <form on:submit|preventDefault={handleSubmit} class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-1">Name</label>
                <input 
                  id="name"
                  type="text" 
                  bind:value={name} 
                  required
                  class="w-full px-4 py-2 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium mb-1">Email</label>
                <input 
                  id="email"
                  type="email" 
                  bind:value={email} 
                  required
                  class="w-full px-4 py-2 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message"
                  bind:value={message} 
                  required
                  rows="5"
                  class="w-full px-4 py-2 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors w-full justify-center"
                disabled={submitting}
              >
                {#if submitting}
                  <div class="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"></div>
                  Sending...
                {:else}
                  <Send size={18} /> Send Message
                {/if}
              </button>
            </form>
          {/if}
        </div>
      </FadeIn>
    </div>
  </div>
</section>
