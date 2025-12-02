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
		className = '',
		badge,
		badgeColor = 'blue',
		layout = 'center',
		priceDetail,
		variant = 'default',
		imageContainerClass = '',
		children
	}: Props & {
		badgeColor?: 'blue' | 'orange' | 'neutral';
		layout?: 'left' | 'center';
		priceDetail?: string;
		variant?: 'default' | 'minimal';
		imageContainerClass?: string;
	} = $props();

	// Card container classes
	const cardClasses = $derived(
		[
			'group relative transition-all duration-300',
			variant === 'default' &&
				'bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300',
			variant === 'minimal' && 'bg-transparent',
			layout === 'center' ? 'text-center' : 'text-left',
			'flex flex-col',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	const badgeClasses = $derived(
		[
			'text-xs font-medium z-10',
			layout === 'center' ? 'flex justify-center' : '',
			badgeColor === 'blue' && 'bg-blue-600 text-white px-3 py-1 rounded-full inline-block',
			badgeColor === 'orange' && 'text-orange-600 uppercase tracking-wide inline-block',
			badgeColor === 'neutral' &&
				'bg-gray-100 text-gray-800 px-3 py-1 rounded-full inline-block'
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={cardClasses}>
	{#if image}
		<div
			class={[
				'mb-6 flex justify-center items-center h-48 sm:h-56 md:h-64 lg:h-80',
				imageContainerClass
			].join(' ')}
		>
			<img src={image} alt={imageAlt || title} class="w-full h-full object-cover" />
		</div>
	{/if}

	<div class="flex-1 flex flex-col gap-4">
		<!-- Colors (moved up for center layout if needed, but keeping order for now) -->
		{#if colors.length > 0 && layout === 'center'}
			<div class="flex justify-center gap-2 pb-2">
				{#each colors as color}
					<ColorDot {color} type={colorType} size="sm" />
				{/each}
			</div>
		{/if}

		{#if badge}
			<div class={badgeClasses}>
				{badge}
			</div>
		{/if}

		<Heading level={3} align="center" class="text-3xl font-bold text-gray-900">
			{title}
		</Heading>

		{#if subtitle}
			<div class="text-gray-900 font-medium text-sm">
				{subtitle}
			</div>
		{/if}

		<Paragraph class="text-gray-600 leading-relaxed text-sm">
			{description}
		</Paragraph>

		{#if priceDetail}
			<p class="text-xs text-gray-500 font-medium">
				{priceDetail}
			</p>
		{/if}

		{#if colors.length > 0 && layout === 'left'}
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
			<div
				class={[
					'flex gap-3 pt-4 mt-auto',
					layout === 'center'
						? 'flex-row justify-center items-center'
						: 'flex-col sm:flex-row'
				].join(' ')}
			>
				{#if primaryAction}
					<Button
						tone="primary"
						href={primaryAction.href}
						onclick={primaryAction.onClick}
						size="sm"
						class="rounded-full px-6"
					>
						{primaryAction.label}
					</Button>
				{/if}
				{#if secondaryAction}
					<a
						href={secondaryAction.href}
						class="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1"
						onclick={secondaryAction.onClick}
					>
						{secondaryAction.label}
						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</a>
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
