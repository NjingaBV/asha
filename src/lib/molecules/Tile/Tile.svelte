<script lang="ts">
	export let images = [];
    export let speed: number = 0.5;
    let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="flex-none py-0 px-[0.5vw] md:px-[1.5vw] w-[22vmax] md:w-[33vmax]" style:transform={`translate3d(0, ${scroll * speed}px, 0)`} >
    {#each images as image}
        <div class="w-full h-[20vmax] md:h-[40vmax] my-[1vw] md:my-[3vw] mx-auto bg-cover bg-center" style={`background-image: url(${image})`} />
    {/each}
</div>