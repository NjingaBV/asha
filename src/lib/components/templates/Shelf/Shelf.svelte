<script lang="ts">
	import {
		Carousel,
		Features,
		Hero,
		Nav,
		HeroTile,
		Slogan,
		TextAnimation
	} from '$lib/components';
	import type { LinkType, SliceType } from '$lib/models';
	import type { ComponentType } from 'svelte';

	export let navLinks: LinkType[] = [];
	export let slices: SliceType[] = [];
	export let open = false;

	export let alternateColor = false;

	const bgColor = (index: number) => {
		if (alternateColor) {
			return index % 2 === 1 ? '#f5f5f5' : '#ffffff';
		}
		return '#ffffff';
	};

	const getComponent = (slice: SliceType): ComponentType | undefined => {
		switch (slice.name) {
			case 'carousel':
				return Carousel;
			case 'hero':
				return Hero;
			case 'slogan':
				return Slogan;
			case 'features':
				return Features;
			case 'text-animation':
				return TextAnimation;
			case 'tiles':
				return HeroTile;
		}
	};
</script>

<main class={`flex flex-col h-full ${open && 'fixed'}`}>
	{#if open}
		<Nav headerMenu={false} links={navLinks} />
	{/if}
	{#each slices as slice, index}
		<section class="w-full h-full" style="background-color:{bgColor(index)}">
			<svelte:component this={getComponent(slice)} {...slice} />
		</section>
	{/each}
</main>
