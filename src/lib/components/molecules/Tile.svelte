<script lang="ts">
	let {
		images = [],
		speed = 0.5
	}: {
		images?: string[];
		speed?: number;
	} = $props();

	let scroll = $state(0);
</script>

<svelte:window bind:scrollY={scroll} />

<div
	class="flex-none py-0 px-[0.5vw] md:px-[1.5vw] w-[22vmax] md:w-[33vmax]"
	style:transform={`translate3d(0, ${scroll * speed}px, 0)`}
>
	{#each images as image (image)}
		<div
			class="w-full h-[20vmax] md:h-[40vmax] my-[1vw] md:my-[3vw] mx-auto bg-cover bg-center"
			style={`background-image: url(${image})`}
		></div>
	{/each}
</div>
