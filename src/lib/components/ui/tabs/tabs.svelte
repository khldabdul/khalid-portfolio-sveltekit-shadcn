<script lang="ts">
  import { Tabs as TabsPrimitive } from "bits-ui";
  import { getContext } from "svelte";

  type TabsProps = TabsPrimitive.Props;
  export let value: TabsProps["value"];
  export let onValueChange: TabsProps["onValueChange"] = undefined;
  export let orientation: TabsProps["orientation"] = undefined;
  export let activationMode: TabsProps["activationMode"] = undefined;
  export let autoActivate: TabsProps["autoActivate"] = undefined;
  export let loop: TabsProps["loop"] = undefined;
  export let children: TabsProps["children"];
  let { ...rest } = $$restProps;

  const { update } = getContext("melt") as {
    update: (props: Record<string, any>) => void;
  };

  $: update({ orientation, activationMode, autoActivate, loop });
</script>

<TabsPrimitive.Root
  {value}
  {onValueChange}
  {orientation}
  {activationMode}
  {autoActivate}
  {loop}
  {...rest}
>
  {@render children()}
</TabsPrimitive.Root>
