<script lang="ts">
	import { cn } from "$lib/utils";
	import { buttonVariants } from "./button.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	type Props = {
		href?: string;
		variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
		size?: "default" | "sm" | "lg" | "icon" | "icon-sm";
	} & (HTMLButtonAttributes | HTMLAnchorAttributes);

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: Props["variant"] = "default";
	export let size: Props["size"] = "default";
	export let href: Props["href"] = undefined;

	export const getAttrs = () => ({
		class: cn(buttonVariants({ variant, size, className })),
		href
	});
</script>

<svelte:element
	this={href ? "a" : "button"}
	{...$$restProps}
	{...getAttrs()}
>
	<slot />
</svelte:element>
