<script lang="ts">
	import { cn } from "$lib/utils";

	type $$Props = {
		class?: string;
	};
</script>

<div class={cn("flex flex-col space-y-1.5 p-6", $$props.class)} {...$$restProps}>
	<slot />
</div>