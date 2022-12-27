<script lang="ts">
	import Carousel from '$lib/components/organisms/Carousel/Carousel.svelte';
	import Hero from '$lib/components/molecules/Hero/Hero.svelte';
	import Nav from '$lib/components/molecules/Nav/Nav.svelte';
	import HeroTile from '$lib/components/organisms/HeroTile/HeroTile.svelte';

	import type { LinkType, SliceType } from '$lib/models';

	export let navLinks: LinkType[] = [];
	export let slices: SliceType[] = [];
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
	export let alternateColor = false;

	const bgColor = (index: number) => {
		if (alternateColor) {
			return index % 2 === 1 ? '#f5f5f5' : '#ffffff';
		}
		return '#ffffff';
	};
</script>

<main class={`flex flex-col h-full ${open && 'fixed'}`}>
	{#if open}
		<Nav headerMenu={false} links={navLinks} />
	{/if}
	{#each slices as slice, index}
		<section class="w-full h-full" style="background-color:{bgColor(index)}">
			{#if slice.name === 'carousel'}
				<div class="container mx-auto">
					<Carousel {...slice} />
				</div>
			{/if}
			{#if slice.name === 'hero'}
				<div>
					<Hero {...slice} />
				</div>
			{/if}
			{#if slice.name === 'tiles'}
				<div class="relative overflow-hidden h-[30vh] md:h-[50vh]">
					<HeroTile {...slice} />
				</div>
			{/if}
		</section>
	{/each}
</main>
