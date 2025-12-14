<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import ColorSwatch from '../atoms/ColorSwatch.svelte';
	import Heading from '../atoms/Heading.svelte';
	import Text from '../atoms/Text.svelte';
	import type { ProductDetail } from '../../models/product.type';

	/**
	 * ProductCard component - displays product cards with colors, badges, and actions
	 *
	 * @example
	 * <ProductCard
	 *   product={acmeLaptop}
	 *   layout="center"
	 * />
	 */

	interface Props {
		/** Product data */
		product: ProductDetail;
		/** Layout style */
		layout?: 'left' | 'center';
		/** Visual variant */
		variant?: 'default' | 'minimal';
		/** Badge color theme */
		badgeColor?: 'blue' | 'orange' | 'neutral';
		/** Custom CSS classes */
		className?: string;
		/** Image container custom classes */
		imageContainerClass?: string;
	}

	let {
		product,
		layout = 'center',
		variant = 'default',
		badgeColor = 'blue',
		className = '',
		imageContainerClass = ''
	}: Props = $props();

	// Extract product data with fallbacks
	const title = $derived(product.title || product.name || '');
	const subtitle = $derived(product.subtitle || product.tagline);
	const description = $derived(product.description);
	const colors = $derived(product.colors || []);
	const primaryAction = $derived(product.primaryAction || product.ctas?.primary);
	const secondaryAction = $derived(product.secondaryAction || product.ctas?.secondary);
	const image = $derived(product.image || product.heroImage);
	const imageAlt = $derived(product.imageAlt || product.heroAlt || title);
	const badge = $derived(product.badge);
	const priceDetail = $derived(product.startingPrice);

	// Card container classes
	const cardClasses = $derived(
		[
			'group relative transition-all duration-300',
			variant === 'default' &&
				'bg-surface rounded-3xl p-8 shadow-sm hover:shadow-lg border border-border hover:border-border-hover',
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
			badgeColor === 'blue' &&
				'bg-accent text-fg-on-accent px-3 py-1 rounded-full inline-block',
			badgeColor === 'orange' && 'text-warning uppercase tracking-wide inline-block',
			badgeColor === 'neutral' && 'bg-bg-subtle text-fg px-3 py-1 rounded-full inline-block'
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
					<ColorSwatch color={color.swatch} label={color.name} size="sm" />
				{/each}
			</div>
		{/if}

		{#if badge}
			<div class={badgeClasses}>
				{badge}
			</div>
		{/if}

		<Heading level={3} align="center" class="text-3xl font-bold text-fg">
			{title}
		</Heading>

		{#if subtitle}
			<div class="text-fg font-medium text-sm">
				{subtitle}
			</div>
		{/if}

		<Text class="text-fg-muted leading-relaxed text-sm">
			{description}
		</Text>

		{#if priceDetail}
			<p class="text-xs text-fg-muted font-medium">
				{priceDetail}
			</p>
		{/if}

		{#if colors.length > 0 && layout === 'left'}
			<div class="flex items-center gap-2">
				<span class="text-sm text-fg-muted mr-2">Available in:</span>
				<div class="flex gap-2">
					{#each colors as color}
						<ColorSwatch color={color.swatch} label={color.name} size="sm" />
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
						class="text-accent hover:underline text-sm font-medium flex items-center gap-1"
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
	</div>
</div>
