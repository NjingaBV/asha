<script lang="ts">
	let {
		isLinkable = false,
		link = undefined,
		target = '_self',
		children
	} = $props();
</script>

{#if isLinkable}
	<a href={link} {target} rel="noreferrer" class="cursor-pointer"><slot /></a>
{:else}
	<slot />
{/if}
