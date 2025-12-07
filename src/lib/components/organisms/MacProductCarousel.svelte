<script lang="ts">
	import { createActor } from 'xstate';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import ProductCard from '$lib/components/molecules/ProductCard.svelte';
	import Card from '$lib/components/molecules/Card.svelte';
	import FilterTabs from '$lib/components/molecules/FilterTabs.svelte';
	import CarouselControls from '$lib/components/molecules/CarouselControls.svelte';
	import type { AppleColor } from '$lib/models/color.type';
	import { onMount } from 'svelte';
	import { macMachine } from '$lib/machines/mac.machine';

	interface Product {
		id: string;
		title: string;
		subtitle?: string;
		description: string;
		priceDetail?: string;
		image: string;
		colors: AppleColor[];
		badge?: string;
		badgeColor?: 'blue' | 'orange' | 'neutral';
		primaryAction: { label: string; href: string };
		secondaryAction: { label: string; href: string };
		category: string;
		textColor?: 'white' | 'black';
	}

	interface Tab {
		id: string;
		label: string;
	}

	let {
		title = '',
		products = [],
		tabs = [],
		cardVariant = 'default',
		imageContainerClass = '',
		cardType = 'product'
	}: {
		title?: string;
		products?: Product[];
		tabs?: Tab[];
		cardVariant?: 'default' | 'minimal';
		imageContainerClass?: string;
		cardType?: 'product' | 'feature';
	} = $props();

	// ============================================
	// State Machine
	// ============================================

	const actor = createActor(macMachine);
	actor.start();

	// Subscribe to state changes
	let machineState = $state(actor.getSnapshot());

	actor.subscribe((snapshot) => {
		machineState = snapshot;
	});

	// Cleanup
	$effect(() => {
		return () => actor.stop();
	});

	// Initialize active tab if provided
	$effect(() => {
		if (tabs.length > 0 && !machineState.context.filteredCategory) {
			actor.send({ type: 'FILTER_PRODUCTS', category: tabs[0].id });
		}
	});

	// ============================================
	// Component State
	// ============================================

	let scrollContainer: HTMLElement;
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

	const activeTab = $derived(machineState.context.filteredCategory || 'all');

	const filteredProducts = $derived(
		activeTab === 'all'
			? products
			: products.filter((p) => p.category.toLowerCase() === activeTab)
	);

	function checkScroll() {
		if (!scrollContainer) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
		canScrollLeft = scrollLeft > 0;
		canScrollRight = scrollLeft < scrollWidth - clientWidth - 10; // -10 buffer
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
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 bg-bg overflow-hidden">
	<div class="max-w-[90rem] mx-auto">
		<div class="flex flex-col items-start mb-10 gap-8">
			<Heading level={2} class="text-5xl md:text-6xl font-bold text-fg tracking-tight">
				{title}
			</Heading>

			{#if tabs.length > 0}
				<FilterTabs
					{tabs}
					{activeTab}
					onSelect={(id) => actor.send({ type: 'FILTER_PRODUCTS', category: id })}
				/>
			{/if}
		</div>

		<div
			bind:this={scrollContainer}
			onscroll={checkScroll}
			class="flex gap-6 overflow-x-auto pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar snap-x"
		>
			{#each filteredProducts as product (product.id)}
				<div class="flex-none w-[320px] md:w-[400px] snap-center">
					{#if cardType === 'feature'}
						<Card
							title={product.title}
							subtitle={product.subtitle}
							overview={product.description}
							imgSrc={product.image}
							buttonLink={product.primaryAction.href}
							overlayButton={true}
							textPosition="top"
							textColor={product.textColor || 'black'}
							class="h-[500px]"
							rounded={true}
						/>
					{:else}
						<ProductCard
							title={product.title}
							subtitle={product.subtitle}
							description={product.description}
							priceDetail={product.priceDetail}
							image={product.image}
							colors={product.colors}
							badge={product.badge}
							badgeColor={product.badgeColor}
							primaryAction={product.primaryAction}
							secondaryAction={product.secondaryAction}
							layout="center"
							className="h-full"
							variant={cardVariant}
							{imageContainerClass}
						/>
					{/if}
				</div>
			{/each}
		</div>

		<div class="flex justify-end mt-4">
			<CarouselControls {canScrollLeft} {canScrollRight} onScroll={scroll} />
		</div>
	</div>
</section>
