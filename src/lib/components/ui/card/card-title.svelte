<script lang="ts">
	import { cn } from "$lib/utils";

	type $$Props = {
		class?: string;
	};
</script>

<h3 class={cn("text-2xl font-semibold leading-none tracking-tight", $$props.class)} {...$$restProps}>
	<slot />
</h3>