<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from '../atoms/Button.svelte';
	import ColorDot from '../atoms/ColorDot.svelte';
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import type { AppleColor, ColorType } from '../../models/color.type';

	/**
	 * ProductCard component - displays product cards with colors, badges, and actions
	 *
	 * @example
	 * <ProductCard
	 *   title="Product Name"
	 *   subtitle="Product subtitle"
	 *   description="Product description text."
	 *   colors={['blue', 'silver', 'black']}
	 *   primaryAction={{ label: 'Learn more', href: '/product' }}
	 *   secondaryAction={{ label: 'Buy', href: '/buy' }}
	 * />
	 */

	interface Action {
		label: string;
		href?: string;
		onClick?: () => void;
	}

	interface Props {
		/** Product title */
		title: string;
		/** Product subtitle (chip info, etc.) */
		subtitle?: string;
		/** Product description */
		description: string;
		/** Available colors */
		colors?: AppleColor[];
		/** Color type for indicators */
		colorType?: ColorType;
		/** Primary action button */
		primaryAction?: Action;
		/** Secondary action button */
		secondaryAction?: Action;
		/** Product image/thumbnail */
		image?: string;
		/** Image alt text */
		imageAlt?: string;
		/** Custom CSS classes */
		className?: string;
		/** Highlight badge (e.g., "New") */
		badge?: string;
		/** Slot for custom content (text, html, or Svelte snippet) */
		children?: Snippet | any;
	}

	let {
		title,
		subtitle,
		description,
		colors = [],
		colorType = 'solid',
		primaryAction,
		secondaryAction,
		image,
		imageAlt,
		class: className = '',
		badge,
		children
	}: Props = $props();

	// Card container classes
	const cardClasses = $derived(
		[
			'group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300',
			'border border-gray-200 hover:border-gray-300',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={cardClasses}>
	{#if badge}
		<div
			class="absolute -top-2 left-8 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
		>
			{badge}
		</div>
	{/if}

	{#if image}
		<div class="mb-6">
			<img src={image} alt={imageAlt || title} class="w-full h-48 object-contain" />
		</div>
	{/if}

	<div class="space-y-4">
		{#if subtitle}
			<div class="text-blue-600 font-semibold text-sm uppercase tracking-wide">
				{subtitle}
			</div>
		{/if}

		<Heading level={3} class="text-2xl font-bold text-gray-900">
			{title}
		</Heading>

		<Paragraph class="text-gray-600 leading-relaxed">
			{description}
		</Paragraph>

		{#if colors.length > 0}
			<div class="flex items-center gap-2">
				<span class="text-sm text-gray-500 mr-2">Available in:</span>
				<div class="flex gap-2">
					{#each colors as color}
						<ColorDot {color} type={colorType} size="sm" />
					{/each}
				</div>
			</div>
		{/if}

		{#if primaryAction || secondaryAction}
			<div class="flex flex-col sm:flex-row gap-3 pt-4">
				{#if primaryAction}
					<Button
						tone="secondary"
						href={primaryAction.href}
						onClick={primaryAction.onClick}
					>
						{primaryAction.label}
					</Button>
				{/if}
				{#if secondaryAction}
					<Button
						tone="primary"
						href={secondaryAction.href}
						onClick={secondaryAction.onClick}
					>
						{secondaryAction.label}
					</Button>
				{/if}
			</div>
		{/if}

		{#if children}
			<div class="pt-4">
				{#if typeof children === 'function'}
					{@render children()}
				{:else}
					{children}
				{/if}
			</div>
		{/if}
	</div>
</div>
