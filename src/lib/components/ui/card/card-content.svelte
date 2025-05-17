<script lang="ts">
	import { cn } from "$lib/utils";

	type $$Props = {
		class?: string;
	};
</script>

<div class={cn("p-6 pt-0", $$props.class)} {...$$restProps}>
	<slot />
</div>