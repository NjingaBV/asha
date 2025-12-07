<script lang="ts">
	import Card from '$lib/components/molecules/Card.svelte';
	import CarouselControls from '$lib/components/molecules/CarouselControls.svelte';
	import type { CardType } from '$lib/models';
	import { onMount } from 'svelte';

	let {
		title = '',
		category = '',
		overview = '',
		color = '#6b6b6b',
		cards = [],
		ariaLabel = 'Carousel'
	}: {
		title: string;
		category: string;
		overview: string;
		color?: `#${string}`;
		cards?: Array<CardType>;
		/** Accessible label for the carousel region */
		ariaLabel?: string;
	} = $props();

	let scrollContainer: HTMLElement;
	let canScrollLeft = $state(false);
	let canScrollRight = $state(false);
	let currentSlideIndex = $state(0);

	function checkScroll() {
		if (!scrollContainer) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
		canScrollLeft = scrollLeft > 0;
		canScrollRight = scrollLeft < scrollWidth - clientWidth - 10;

		// Calculate current slide index based on scroll position
		if (cards.length > 0) {
			const cardWidth = scrollContainer.clientWidth * 0.8;
			currentSlideIndex = Math.round(scrollLeft / cardWidth);
		}
	}

	function scroll(direction: 'left' | 'right') {
		if (!scrollContainer) return;
		const scrollAmount = scrollContainer.clientWidth * 0.8;
		scrollContainer.scrollBy({
			left: direction === 'left' ? -scrollAmount : scrollAmount,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		checkScroll();
		window.addEventListener('resize', checkScroll);
		return () => window.removeEventListener('resize', checkScroll);
	});

	// Announcement for screen readers when slide changes
	let slideAnnouncement = $derived(
		cards.length > 0 ? `Slide ${currentSlideIndex + 1} of ${cards.length}` : ''
	);
</script>

<section class="py-8 px-4 sm:px-6 lg:px-8 bg-bg" role="region" aria-label={ariaLabel}>
	<div class="max-w-[90rem] mx-auto">
		<div class="flex flex-col items-start mb-6 gap-6">
			{#if title}
				<div>
					{#if category}
						<h5
							class="text-sm md:text-xs font-semibold tracking-widest uppercase letter-spacing category-color opacity-80 mb-3 md:mb-4"
							style="--text-color: {color};"
						>
							{category}
						</h5>
					{/if}
					<h2
						class="font-black text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4 md:mb-6"
					>
						{title}
					</h2>
					{#if overview}
						<p
							class="text-base md:text-lg lg:text-xl leading-relaxed text-opacity-75 max-w-2xl"
						>
							{overview}
						</p>
					{/if}
				</div>
			{/if}
		</div>

		<div
			bind:this={scrollContainer}
			onscroll={checkScroll}
			class="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar snap-x"
		>
			{#each cards as card, i (i)}
				<div class="flex-none w-[320px] md:w-[400px] snap-center">
					<Card {...card} />
				</div>
			{/each}
		</div>

		<div class="flex justify-end mt-2">
			<CarouselControls {canScrollLeft} {canScrollRight} onScroll={scroll} />
		</div>

		<!-- Live region for screen reader announcements -->
		<span class="sr-only" aria-live="polite" aria-atomic="true">{slideAnnouncement}</span>
	</div>
</section>

<style>
	.category-color {
		color: var(--text-color);
	}
</style>
