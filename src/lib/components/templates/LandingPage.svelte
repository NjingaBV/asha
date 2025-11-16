<script lang="ts">
	import ProductGrid from '../organisms/ProductGrid.svelte';
	import BenefitsSection from '../organisms/BenefitsSection.svelte';
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import Button from '../atoms/Button.svelte';
	import type { Product, Benefit, Action } from '../../models/product.type';

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
		/** Benefits section title */
		benefitsTitle?: string;
		/** Array of benefits to display */
		benefits?: Benefit[];
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
		benefitsTitle = 'Why Choose Us',
		benefits = [],
		featuresTitle = 'Features',
		class: className = ''
	}: Props = $props();
</script>

<main class="min-h-screen bg-white {className}">
	<!-- Hero Section -->
	{#if heroTitle || heroDescription || primaryAction || secondaryAction}
		<section
			class="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8"
		>
			<div class="max-w-7xl mx-auto text-center">
				{#if heroTitle}
					<Heading level={1} class="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
						{heroTitle}
					</Heading>
				{/if}
				{#if heroDescription}
					<Paragraph class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						{heroDescription}
					</Paragraph>
				{/if}
				{#if primaryAction || secondaryAction}
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						{#if primaryAction}
							<Button
								tone="primary"
								size="lg"
								href={primaryAction.href}
								onClick={primaryAction.onClick}
							>
								{primaryAction.label}
							</Button>
						{/if}
						{#if secondaryAction}
							<Button
								tone="secondary"
								size="lg"
								href={secondaryAction.href}
								onClick={secondaryAction.onClick}
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

	<!-- Benefits Section -->
	{#if benefits.length > 0}
		<BenefitsSection title={benefitsTitle} {benefits} />
	{/if}

	<!-- Features Section -->
	{#if featuresTitle}
		<section class="py-16 px-4 sm:px-6 lg:px-8">
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-12">
					<Heading level={2} class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{featuresTitle}
					</Heading>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<!-- Feature cards can be added here via slot or additional props -->
					<div class="bg-gray-50 rounded-3xl p-8 text-center">
						<div
							class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
						>
							<svg
								class="w-8 h-8 text-blue-600"
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
						<Heading level={3} class="text-xl font-bold text-gray-900 mb-4">
							Performance
						</Heading>
						<Paragraph class="text-gray-600">Go fast. Go far.</Paragraph>
					</div>

					<div class="bg-gray-50 rounded-3xl p-8 text-center">
						<div
							class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
						>
							<svg
								class="w-8 h-8 text-blue-600"
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
						<Heading level={3} class="text-xl font-bold text-gray-900 mb-4">
							Smart Features
						</Heading>
						<Paragraph class="text-gray-600">Powered by AI.</Paragraph>
					</div>

					<div class="bg-gray-50 rounded-3xl p-8 text-center">
						<div
							class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
						>
							<svg
								class="w-8 h-8 text-blue-600"
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
						<Heading level={3} class="text-xl font-bold text-gray-900 mb-4">
							User Friendly
						</Heading>
						<Paragraph class="text-gray-600">Easy to use. Easy to love.</Paragraph>
					</div>
				</div>
			</div>
		</section>
	{/if}
</main>
