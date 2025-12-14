<script lang="ts">
	import type { Snippet } from 'svelte';
	import SkipLink from '$lib/components/atoms/SkipLink.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import Breadcrumb from '$lib/components/molecules/Breadcrumb.svelte';
	import PriceTag from '$lib/components/molecules/PriceTag.svelte';
	import Rating from '$lib/components/molecules/Rating.svelte';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface ProductImage {
		src: string;
		alt: string;
	}

	interface Props {
		/** Breadcrumb items */
		breadcrumbs?: BreadcrumbItem[];
		/** Product images */
		images?: ProductImage[];
		/** Product title */
		title?: string;
		/** Product description */
		description?: string;
		/** Product price */
		price?: number;
		/** Sale price */
		salePrice?: number;
		/** Currency */
		currency?: string;
		/** Rating value */
		rating?: number;
		/** Number of reviews */
		reviewCount?: number;
		/** Custom CSS classes */
		class?: string;
		/** Header slot */
		header?: Snippet;
		/** Footer slot */
		footer?: Snippet;
		/** Product actions slot (add to cart, etc.) */
		actions?: Snippet;
		/** Product details slot (specs, features) */
		details?: Snippet;
		/** Related products slot */
		related?: Snippet;
	}

	let {
		breadcrumbs = [],
		images = [],
		title,
		description,
		price,
		salePrice,
		currency = '$',
		rating,
		reviewCount,
		class: className = '',
		header,
		footer,
		actions,
		details,
		related
	}: Props = $props();

	let selectedImage = $state(0);
</script>

<SkipLink href="#main-content" />

<div class="min-h-screen flex flex-col bg-page">
	{#if header}
		{@render header()}
	{/if}

	<main id="main-content" class={['flex-1', className].join(' ')}>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			{#if breadcrumbs.length > 0}
				<Breadcrumb items={breadcrumbs} class="mb-6" />
			{/if}

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
				<!-- Product Images -->
				<div class="space-y-4">
					{#if images.length > 0}
						<div class="aspect-square bg-bg-subtle rounded-2xl overflow-hidden">
							<Image
								src={images[selectedImage].src}
								alt={images[selectedImage].alt}
								class="w-full h-full object-cover"
							/>
						</div>

						{#if images.length > 1}
							<div class="flex gap-2 overflow-x-auto pb-2">
								{#each images as image, i}
									<button
										type="button"
										class={[
											'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors',
											selectedImage === i
												? 'border-accent'
												: 'border-transparent'
										].join(' ')}
										onclick={() => (selectedImage = i)}
									>
										<Image
											src={image.src}
											alt={image.alt}
											class="w-full h-full object-cover"
										/>
									</button>
								{/each}
							</div>
						{/if}
					{/if}
				</div>

				<!-- Product Info -->
				<div class="space-y-6">
					{#if title}
						<Heading level={1} class="text-3xl md:text-4xl font-bold text-fg">
							{title}
						</Heading>
					{/if}

					{#if rating !== undefined}
						<div class="flex items-center gap-2">
							<Rating value={rating} readonly size="sm" />
							{#if reviewCount !== undefined}
								<span class="text-sm text-fg-muted">({reviewCount} reviews)</span>
							{/if}
						</div>
					{/if}

					{#if price !== undefined}
						<PriceTag {price} {salePrice} {currency} size="lg" />
					{/if}

					{#if description}
						<Text class="text-fg-muted">
							{description}
						</Text>
					{/if}

					{#if actions}
						<div class="pt-4">
							{@render actions()}
						</div>
					{/if}
				</div>
			</div>

			{#if details}
				<div class="mt-16">
					{@render details()}
				</div>
			{/if}

			{#if related}
				<div class="mt-16">
					{@render related()}
				</div>
			{/if}
		</div>
	</main>

	{#if footer}
		{@render footer()}
	{/if}
</div>
