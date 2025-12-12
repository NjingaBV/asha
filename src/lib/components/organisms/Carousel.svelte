<script lang="ts">
	import Card from '$lib/molecules/Card.svelte';
	import CarouselControls from '$lib/molecules/CarouselControls.svelte';
	import type { CardType } from 'src/lib/models';
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
			behavior: prefersReducedMotion ? 'instant' : 'smooth'
		});
	}

	function goToSlide(index: number) {
		if (!scrollContainer || index < 0 || index >= cards.length) return;
		const cardWidth = scrollContainer.clientWidth * 0.8;
		scrollContainer.scrollTo({
			left: index * cardWidth,
			behavior: prefersReducedMotion ? 'instant' : 'smooth'
		});
	}

	function handleKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowLeft':
			case 'Left':
				event.preventDefault();
				if (currentSlideIndex > 0) {
					goToSlide(currentSlideIndex - 1);
				}
				break;
			case 'ArrowRight':
			case 'Right':
				event.preventDefault();
				if (currentSlideIndex < cards.length - 1) {
					goToSlide(currentSlideIndex + 1);
				}
				break;
			case 'Home':
				event.preventDefault();
				goToSlide(0);
				break;
			case 'End':
				event.preventDefault();
				goToSlide(cards.length - 1);
				break;
		}
	}

	// Check for reduced motion preference
	let prefersReducedMotion = $state(false);

	onMount(() => {
		checkScroll();

		// Check reduced motion preference
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = motionQuery.matches;

		const handleMotionChange = (e: MediaQueryListEvent) => {
			prefersReducedMotion = e.matches;
		};

		motionQuery.addEventListener('change', handleMotionChange);
		window.addEventListener('resize', checkScroll);

		return () => {
			motionQuery.removeEventListener('change', handleMotionChange);
			window.removeEventListener('resize', checkScroll);
		};
	});

	// Announcement for screen readers when slide changes
	let slideAnnouncement = $derived(
		cards.length > 0 ? `Slide ${currentSlideIndex + 1} of ${cards.length}` : ''
	);

	// Generate unique ID for the carousel
	const carouselId = `carousel-${Math.random().toString(36).slice(2, 9)}`;
</script>

<section
	class="py-8 px-4 sm:px-6 lg:px-8 bg-bg"
	aria-label={ariaLabel}
	aria-roledescription="carousel"
>
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
						id="{carouselId}-title"
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

		<!-- svelte-ignore a11y_no_noninteractive_tabindex a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={scrollContainer}
			onscroll={checkScroll}
			onkeydown={handleKeydown}
			tabindex="0"
			role="group"
			aria-label="Slides"
			aria-describedby={title ? `${carouselId}-title` : undefined}
			class="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar snap-x focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
		>
			{#each cards as card, i (i)}
				<div
					class="flex-none w-[320px] md:w-[400px] snap-center"
					role="group"
					aria-roledescription="slide"
					aria-label="Slide {i + 1} of {cards.length}"
				>
					<Card {...card} />
				</div>
			{/each}
		</div>

		<div class="flex justify-between items-center mt-2">
			<!-- Slide indicators for screen readers -->
			<div class="sr-only">
				Current slide: {currentSlideIndex + 1} of {cards.length}
			</div>

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
