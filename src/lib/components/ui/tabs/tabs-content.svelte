<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	type $$Props = TabsPrimitive.ContentProps;

	export let value: $$Props["value"];
	export let forceMount: $$Props["forceMount"] = undefined;
</script>

<TabsPrimitive.Content
	{value}
	{forceMount}
	class={cn(
		"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		$$props.class
	)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.Content>