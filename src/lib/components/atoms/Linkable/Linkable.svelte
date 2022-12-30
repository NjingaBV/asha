<script lang="ts">
	export let isLinkable = false;
	export let link: string | undefined;
</script>

{#if isLinkable}
	<a href={link} target="_blank" rel="noreferrer" class="cursor-pointer"><slot /></a>
{:else}
	<slot />
{/if}
