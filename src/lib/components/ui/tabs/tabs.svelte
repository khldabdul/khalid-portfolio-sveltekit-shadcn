<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	import { getContext } from "svelte";

	type $$Props = TabsPrimitive.RootProps;
	type $$Events = TabsPrimitive.RootEvents;

	export let value: $$Props["value"] = undefined;
	export let activationMode: $$Props["activationMode"] = undefined;
	export let autoSelect: $$Props["autoSelect"] = undefined;
	export let loop: $$Props["loop"] = undefined;
	export let orientation: $$Props["orientation"] = undefined;

	export let onValueChange: ((value: string) => void) | undefined = undefined;
	export let handleValueChange = (val: string) => {
		if (onValueChange) onValueChange(val);
	};
</script>

<TabsPrimitive.Root
	{value}
	{activationMode}
	{orientation}
	{loop}
	autoSelect={autoSelect}
	onValueChange={handleValueChange}
	class={cn("w-full", $$props.class)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.Root>