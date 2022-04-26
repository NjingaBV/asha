<script lang="ts">
    import Blob from '$lib/molecules/Blob/Blob.svelte';
    export let colors: string[] = [];
</script>

<div class="h-fit flex items-center justify-center">
	<div class="flex flex-wrap items-center justify-center">
        {#each colors as color}
            <Blob color={color} />
        {/each}
	</div>
</div>
