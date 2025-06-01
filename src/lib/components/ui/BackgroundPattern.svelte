<script lang="ts">
  export let variant: 'light' | 'dark' = 'light';
  export let intensity: 'subtle' | 'medium' | 'strong' = 'subtle';
</script>

<div class="background-pattern {variant} {intensity}" aria-hidden="true">
  <!-- Geometric Pattern SVG -->
  <svg class="pattern-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <pattern id="grid-{variant}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.1"/>
        <rect x="0" y="0" width="1" height="20" fill="currentColor" opacity="0.05"/>
        <rect x="0" y="0" width="20" height="1" fill="currentColor" opacity="0.05"/>
      </pattern>
      
      <pattern id="hexagon-{variant}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <polygon 
          points="20,5 35,15 35,25 20,35 5,25 5,15" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="0.5" 
          opacity="0.08"
        />
      </pattern>
      
      <pattern id="triangle-{variant}" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <polygon 
          points="15,3 25,20 5,20" 
          fill="currentColor" 
          opacity="0.03"
        />
      </pattern>
    </defs>
    
    <!-- Layered patterns -->
    <rect width="100%" height="100%" fill="url(#grid-{variant})"/>
    <rect width="100%" height="100%" fill="url(#hexagon-{variant})"/>
    <rect width="100%" height="100%" fill="url(#triangle-{variant})"/>
  </svg>
  
  <!-- Additional gradient overlay -->
  <div class="gradient-overlay"></div>
</div>

<style>
  .background-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
    /* Ensure proper mobile viewport handling */
    min-width: 100%;
    min-height: 100%;
  }
  
  .pattern-svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  /* Light theme patterns */
  .background-pattern.light {
    color: hsl(var(--primary));
  }
  
  .background-pattern.light .gradient-overlay {
    background: 
      radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.03) 0%, transparent 70%),
      radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.02) 0%, transparent 70%),
      linear-gradient(45deg, transparent 48%, hsl(var(--primary) / 0.01) 49%, hsl(var(--primary) / 0.01) 51%, transparent 52%);
  }
  
  /* Dark theme patterns */
  .background-pattern.dark {
    color: hsl(var(--primary));
  }
  
  .background-pattern.dark .gradient-overlay {
    background: 
      radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.05) 0%, transparent 70%),
      radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.03) 0%, transparent 70%),
      linear-gradient(135deg, transparent 48%, hsl(var(--primary) / 0.02) 49%, hsl(var(--primary) / 0.02) 51%, transparent 52%);
  }
  
  /* Intensity variations */
  .background-pattern.subtle {
    opacity: 0.6;
  }
  
  .background-pattern.medium {
    opacity: 0.8;
  }
  
  .background-pattern.strong {
    opacity: 1;
  }
  
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .background-pattern {
      opacity: 0.3;
    }
  }
</style>