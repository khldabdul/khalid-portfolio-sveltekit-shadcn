<script lang="ts">
	import { cn } from "$lib/utils";

	type $$Props = {
		class?: string;
	};
</script>

<p class={cn("text-sm text-muted-foreground", $$props.class)} {...$$restProps}>
	<slot />
</p>