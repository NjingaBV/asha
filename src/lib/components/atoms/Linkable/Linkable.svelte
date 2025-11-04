<script lang="ts">
	let {
		isLinkable = false,
		link = undefined,
		target = '_self',
		children
	}: {
		isLinkable?: boolean;
		link?: string;
		target?: string;
		children: any;
	} = $props();
</script>

{#if isLinkable}
	<a href={link} {target} rel="noreferrer" class="cursor-pointer">{@render children?.()}</a>
{:else}
	{@render children?.()}
{/if}
