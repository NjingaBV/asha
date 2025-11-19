<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import ProductCard from '$lib/components/molecules/ProductCard.svelte';
	import FilterTabs from '$lib/components/molecules/FilterTabs.svelte';
	import CarouselControls from '$lib/components/molecules/CarouselControls.svelte';
	import type { AppleColor } from '$lib/models/color.type';
	import { onMount } from 'svelte';

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
		imageContainerClass = ''
	}: {
		title?: string;
		products?: Product[];
		tabs?: Tab[];
		cardVariant?: 'default' | 'minimal';
		imageContainerClass?: string;
	} = $props();

	let activeTab = $state(tabs[0]?.id ?? 'all');
	let scrollContainer: HTMLElement;
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

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

<section class="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
	<div class="max-w-[90rem] mx-auto">
		<div class="flex flex-col items-start mb-10 gap-8">
			<Heading level={2} class="text-5xl md:text-6xl font-bold text-black tracking-tight">
				{title}
			</Heading>

			<FilterTabs {tabs} {activeTab} onSelect={(id) => (activeTab = id)} />
		</div>

		<div
			bind:this={scrollContainer}
			onscroll={checkScroll}
			class="flex gap-6 overflow-x-auto pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar snap-x"
		>
			{#each filteredProducts as product (product.id)}
				<div class="flex-none w-[320px] md:w-[400px] snap-center">
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
				</div>
			{/each}
		</div>

		<div class="flex justify-end mt-4">
			<CarouselControls {canScrollLeft} {canScrollRight} onScroll={scroll} />
		</div>
	</div>
</section>
