<script lang="ts">
	import Blob from '$lib/components/molecules/Blob/Blob.svelte';
	let { colors = [] }: { colors?: string[] } = $props();
</script>

<section class="h-fit flex items-center justify-center">
	<div class="flex flex-wrap items-center justify-center">
		{#each colors as color (color)}
			<Blob {color} />
		{/each}
	</div>
</section>
