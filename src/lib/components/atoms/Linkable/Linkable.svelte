<script lang="ts">
	export let isLinkable = false;
	export let link: string;
</script>

{#if isLinkable}
	<a href={link} target="_blank" class="cursor-pointer"><slot /></a>
{:else}
	<slot />
{/if}
