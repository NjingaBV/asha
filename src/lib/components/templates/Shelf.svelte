<script lang="ts">
	import CallToAction from '$lib/components/molecules/CallToAction.svelte';
	import Carousel from '$lib/components/organisms/Carousel.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import Hero from '$lib/components/molecules/Hero.svelte';
	import HeroTile from '$lib/components/organisms/HeroTile.svelte';
	import Nav from '$lib/components/atoms/Nav.svelte';
	import Slogan from '$lib/components/organisms/Slogan.svelte';
	import TextAnimation from '$lib/components/organisms/TextAnimation.svelte';
	import type { LinkType, SliceType } from '$lib/models';

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

	const bgColor = (index: number) => {
		if (alternateColor) {
			return index % 2 === 1 ? '#f5f5f5' : '#ffffff';
		}
		return '#ffffff';
	};

	// Relaxed typing to accommodate varying component prop types
	const getComponent = (slice: SliceType): any => {
		switch (slice.name) {
			case 'call-to-action':
				return CallToAction;
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
		{@const Component = getComponent(slice)}
		<section class="w-full h-full" style="background-color:{bgColor(index)}">
			{#if Component}
				<Component {...slice} />
			{/if}
		</section>
	{/each}
</main>
