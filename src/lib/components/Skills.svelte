<script lang="ts">
  import { skillCategories } from "$lib/data/skills";
  import Icon from "@iconify/svelte";

  // Map of skill names to Iconify icon names
  const iconMap: Record<string, string> = {
    TypeScript: "logos:typescript-icon",
    JavaScript: "logos:javascript",
    Java: "logos:java",
    "Node.js": "logos:nodejs-icon",
    Playwright: "devicon:playwright",
    Cypress: "logos:cypress-icon",
    "Mocha.js": "logos:mocha",
    Appium: "logos:appium",
    WebdriverIO: "logos:webdriverio",
    k6: "logos:k6-icon",
    Postman: "logos:postman-icon",
    MySQL: "logos:mysql-icon",
    PostgreSQL: "logos:postgresql",
    Redis: "logos:redis",
    JIRA: "devicon:jira",
    OpenProject: "mdi:open-source-initiative",
    ClickUp: "simple-icons:clickup",
    "AIO Tests": "mdi:test-tube",
    QMetry: "mdi:checkbox-marked-circle-outline",
    "Allure Report": "mdi:file-document-outline",
    mochawesome: "mdi:file-chart-outline",
    "jam.dev": "mdi:dev-to",
    DBeaver: "mdi:database-outline"
  };

  // Flatten all skills into single array for compact display
  const allSkills = skillCategories.flatMap(category => category.skills);
</script>

<section id="skills" class="py-16 bg-background">
  <div class="brutalist-container">
    
    <!-- Section Header - Standardized -->
    <div class="mb-12">
      <h2 class="brutalist-heading-lg text-foreground">
        TECHNICAL SKILLS
      </h2>
      <div class="w-24 h-1 bg-secondary mt-4"></div>
    </div>

    <!-- Unified Skills Grid - Clean Layout -->
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {#each allSkills as skill}
        <div class="group text-center p-3 hover:scale-105 transition-none">
          
          <!-- Icon with Amber Accent -->
          <div class="mb-3">
            <div class="w-10 h-10 mx-auto border border-muted bg-card flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-none">
              {#if iconMap[skill.name]}
                <Icon 
                  icon={iconMap[skill.name]} 
                  width="20" 
                  height="20"
                />
              {:else}
                <span class="text-sm font-bold">
                  {skill.name.charAt(0)}
                </span>
              {/if}
            </div>
          </div>

          <!-- Skill Name -->
          <div>
            <p class="text-xs font-medium text-muted-foreground group-hover:text-secondary leading-tight">
              {skill.name.toUpperCase()}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Skills Summary - Amber Accent -->
    <div class="mt-16">
      <div class="border-2 border-secondary bg-secondary text-secondary-foreground p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <p class="text-2xl font-bold">
              {allSkills.length}+
            </p>
            <p class="text-sm font-medium">TECHNOLOGIES</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">
              {skillCategories.length}
            </p>
            <p class="text-sm font-medium">CATEGORIES</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold">5+</p>
            <p class="text-sm font-medium">YEARS EXPERIENCE</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
