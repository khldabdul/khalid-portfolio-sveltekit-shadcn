<script lang="ts">
  import FadeIn from "$lib/components/animated/FadeIn.svelte";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Card from "$lib/components/ui/card";
  import { skillCategories } from "$lib/data/skills";
  import Icon from "@iconify/svelte";

  // Use state with Runes
  let activeCategory = $state(skillCategories[0].name);

  // Handler functions using Runes
  function handleValueChange(val: string) {
    activeCategory = val;
  }

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
</script>

<section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10">
  <div class="container mx-auto">
    <FadeIn>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Technical Skills
      </h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
    </FadeIn>

    <Tabs.Root
      value={activeCategory}
      onValueChange={handleValueChange}
      class="w-full"
    >
      <div class="flex justify-center mb-8 overflow-x-auto pb-2">
        <Tabs.List class="bg-background/50 backdrop-blur-sm border">
          {#each skillCategories as category (category.name)}
            <Tabs.Trigger value={category.name}>{category.name}</Tabs.Trigger>
          {/each}
        </Tabs.List>
      </div>

      {#each skillCategories as category (category.name)}
        <Tabs.Content
          value={category.name}
          class="mt-6 animate-in fade-in-50 duration-300"
        >
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {#each category.skills as skill, i}
              <FadeIn delay={50 * i}>
                <Card.Root class="h-full hover:shadow-md transition-all hover:bg-card/95 hover:scale-105 duration-300 border border-border/50">
                  <Card.Header class="space-y-0 pb-2">
                    <div class="w-full flex justify-center">
                      <div class="w-16 h-16 mb-4 flex items-center justify-center bg-primary/5 rounded-full p-3">
                        {#if iconMap[skill.name]}
                          <Icon icon={iconMap[skill.name]} width="38" height="38" />
                        {:else}
                          <div class="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center">
                            {skill.name.charAt(0)}
                          </div>
                        {/if}
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Content class="text-center pt-0">
                    <Card.Title class="text-lg font-medium pt-0">{skill.name}</Card.Title>
                  </Card.Content>
                </Card.Root>
              </FadeIn>
            {/each}
          </div>
        </Tabs.Content>
      {/each}
    </Tabs.Root>
  </div>
</section>
