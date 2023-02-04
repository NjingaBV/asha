<script lang="ts">
	export let isLinkable = false;
	export let link: string | undefined;
	export let target: '_blank' | '_self' | '_parent' | '_top' = '_self';
</script>

{#if isLinkable}
	<a href={link} {target} rel="noreferrer" class="cursor-pointer"><slot /></a>
{:else}
	<slot />
{/if}
