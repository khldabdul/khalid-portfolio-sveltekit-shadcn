<script lang="ts">
  import FadeIn from "$lib/components/animated/FadeIn.svelte";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "$lib/components/ui/tabs/tabs";
  import { skillCategories } from "$lib/data/skills";

  // Use state with Runes
  let activeCategory = $state(skillCategories[0].name);

  // Handler functions using Runes
  function handleValueChange(val: string) {
    activeCategory = val;
  }
</script>

<section id="skills" class="py-20 px-4 sm:px-6 lg:px-8">
  <div class="container mx-auto">
    <FadeIn>
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Technical Skills
      </h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
    </FadeIn>

    <Tabs
      value={activeCategory}
      onValueChange={handleValueChange}
      class="w-full"
    >
      <div class="flex justify-center mb-8 overflow-x-auto pb-2">
        <TabsList>
          {#each skillCategories as category (category.name)}
            <TabsTrigger value={category.name}>{category.name}</TabsTrigger>
          {/each}
        </TabsList>
      </div>

      {#each skillCategories as category (category.name)}
        <TabsContent
          value={category.name}
          class="mt-6 animate-in fade-in-50 duration-300"
        >
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {#each category.skills as skill, i}
              <FadeIn delay={50 * i}>
                <div
                  class="flex flex-col items-center p-6 bg-muted/30 rounded-lg hover:shadow-md transition-all hover:bg-muted/50 border border-border h-full"
                >
                  {#if skill.icon}
                    <div
                      class="w-12 h-12 mb-4 flex items-center justify-center"
                    >
                      <img
                        src={`/icons/${skill.icon}.svg`}
                        alt={skill.name}
                        class="max-w-full max-h-full"
                        onerror={function (this: HTMLImageElement) {
                          this.style.display = "none";
                          (
                            this.nextElementSibling as HTMLElement
                          ).style.display = "flex";
                        }}
                      />
                      <div
                        class="hidden w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center"
                      >
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                  {:else}
                    <div
                      class="w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center"
                    >
                      {skill.name.charAt(0)}
                    </div>
                  {/if}
                  <span class="text-center font-medium">{skill.name}</span>
                </div>
              </FadeIn>
            {/each}
          </div>
        </TabsContent>
      {/each}
    </Tabs>
  </div>
</section>
