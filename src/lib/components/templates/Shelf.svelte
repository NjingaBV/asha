<script lang="ts">
	import Carousel from '$lib/organisms/Carousel.svelte';
	import FeatureSection from '$lib/organisms/FeatureSection.svelte';
	import Hero from '$lib/organisms/Hero.svelte';
	import HeroTile from '$lib/organisms/HeroTile.svelte';
	import NavigationBar from '$lib/molecules/NavigationBar.svelte';
	import Slogan from '$lib/organisms/Slogan.svelte';
	import TextAnimation from '$lib/organisms/TextAnimation.svelte';
	import type { LinkType, SliceType } from 'src/lib/models';

	let {
		navLinks = [],
		slices = [],
		open = $bindable(false),
		alternateColor = false
	}: {
		navLinks?: LinkType[];
		slices?: SliceType[];
		open?: boolean;
		alternateColor?: boolean;
	} = $props();

	const getBgClass = (index: number) => {
		if (alternateColor) {
			return index % 2 === 1 ? 'bg-page-alt' : 'bg-page';
		}
		return 'bg-page';
	};

	// Relaxed typing to accommodate varying component prop types
	const getComponent = (slice: SliceType): any => {
		switch (slice.name) {
			case 'carousel':
				return Carousel;
			case 'hero':
				return Hero;
			case 'slogan':
				return Slogan;
			case 'features':
				return FeatureSection;
			case 'text-animation':
				return TextAnimation;
			case 'tiles':
				return HeroTile;
		}
	};
</script>

<main class={`flex flex-col h-full ${open && 'fixed'}`}>
	{#if open}
		<NavigationBar links={navLinks} headerMenu={false} />
	{/if}
	{#each slices as slice, index}
		{@const Component = getComponent(slice)}
		<section class="w-full h-full {getBgClass(index)}">
			{#if Component}
				<Component {...slice} />
			{/if}
		</section>
	{/each}
</main>
