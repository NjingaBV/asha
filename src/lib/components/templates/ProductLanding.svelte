<script lang="ts">
	import ProductGrid from '../organisms/ProductGrid.svelte';
	import Heading from '../atoms/Heading.svelte';
	import Text from '../atoms/Text.svelte';
	import Button from '../atoms/Button.svelte';
	import SkipLink from '../atoms/SkipLink.svelte';
	import type { Product, Action } from '../../models/product.type';

	interface Props {
		/** Hero section title */
		heroTitle?: string;
		/** Hero section description */
		heroDescription?: string;
		/** Primary action button in hero */
		primaryAction?: Action;
		/** Secondary action button in hero */
		secondaryAction?: Action;
		/** Products section title */
		productsTitle?: string;
		/** Array of products to display */
		products?: Product[];
		/** Features section title */
		featuresTitle?: string;
		/** Custom CSS classes */
		class?: string;
	}

	let {
		heroTitle = 'Welcome',
		heroDescription = 'Discover our amazing products and features.',
		primaryAction,
		secondaryAction,
		productsTitle = 'Our Products',
		products = [],
		featuresTitle = 'Features',
		class: className = ''
	}: Props = $props();
</script>

<SkipLink href="#main-content" />

<main id="main-content" class="min-h-screen bg-page {className}">
	<!-- Hero Section -->
	{#if heroTitle || heroDescription || primaryAction || secondaryAction}
		<section class="relative bg-page-alt py-20 px-4 sm:px-6 lg:px-8">
			<div class="max-w-360 mx-auto text-center">
				{#if heroTitle}
					<Heading level={1} class="text-5xl md:text-7xl font-semibold text-primary mb-6">
						{heroTitle}
					</Heading>
				{/if}
				{#if heroDescription}
					<Text class="text-xl text-secondary mb-8 max-w-2xl mx-auto">
						{heroDescription}
					</Text>
				{/if}
				{#if primaryAction || secondaryAction}
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						{#if primaryAction}
							<Button
								tone="primary"
								size="lg"
								href={primaryAction.href}
								onclick={primaryAction.onClick}
							>
								{primaryAction.label}
							</Button>
						{/if}
						{#if secondaryAction}
							<Button
								tone="secondary"
								size="lg"
								href={secondaryAction.href}
								onclick={secondaryAction.onClick}
							>
								{secondaryAction.label}
							</Button>
						{/if}
					</div>
				{/if}
			</div>
		</section>
	{/if}

	<!-- Products Section -->
	{#if products.length > 0}
		<ProductGrid title={productsTitle} {products} columns={2} />
	{/if}

	<!-- Features Section -->
	{#if featuresTitle}
		<section class="py-16 px-4 sm:px-6 lg:px-8">
			<div class="max-w-360 mx-auto">
				<div class="text-center mb-12">
					<Heading level={2} class="text-3xl md:text-4xl font-semibold text-primary mb-4">
						{featuresTitle}
					</Heading>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<!-- Feature cards can be added here via slot or additional props -->
					<div class="bg-bg-subtle rounded-3xl p-8 text-center">
						<div
							class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
						>
							<svg
								class="w-8 h-8 text-accent"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
						</div>
						<Heading level={3} class="text-xl font-bold text-fg mb-4">
							Performance
						</Heading>
						<Text class="text-fg-muted">Go fast. Go far.</Text>
					</div>

					<div class="bg-bg-subtle rounded-3xl p-8 text-center">
						<div
							class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
						>
							<svg
								class="w-8 h-8 text-accent"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								></path>
							</svg>
						</div>
						<Heading level={3} class="text-xl font-bold text-fg mb-4">
							Smart Features
						</Heading>
						<Text class="text-fg-muted">Powered by AI.</Text>
					</div>

					<div class="bg-bg-subtle rounded-3xl p-8 text-center">
						<div
							class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
						>
							<svg
								class="w-8 h-8 text-accent"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
								></path>
							</svg>
						</div>
						<Heading level={3} class="text-xl font-bold text-fg mb-4">
							User Friendly
						</Heading>
						<Text class="text-fg-muted">Easy to use. Easy to love.</Text>
					</div>
				</div>
			</div>
		</section>
	{/if}
</main>
