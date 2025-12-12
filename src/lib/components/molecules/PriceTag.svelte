<!--
  @component PriceTag
  
  A price display component with support for sale prices and currency formatting.
  Ideal for product cards and pricing sections.
  
  @example Basic usage
  ```svelte
  <PriceTag price={99.99} />
  ```
  
  @example With sale price
  ```svelte
  <PriceTag price={79.99} originalPrice={99.99} />
  ```
  
  @example With currency and locale
  ```svelte
  <PriceTag price={99.99} currency="EUR" locale="fr-FR" />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** PriceTag size */
	export type PriceTagSize = 'sm' | 'md' | 'lg' | 'xl';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg', 'xl'],
			default: 'md',
			description: 'Price display size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Current price */
		price: number;
		/** Original price (for showing discount) */
		originalPrice?: number;
		/** Currency code */
		currency?: string;
		/** Locale for formatting */
		locale?: string;
		/** Size */
		size?: PriceTagSize;
		/** Show currency symbol */
		showCurrency?: boolean;
		/** Price prefix text */
		prefix?: string;
		/** Price suffix text */
		suffix?: string;
		/** Custom CSS classes */
		class?: string;
	}

	let {
		price,
		originalPrice,
		currency = 'USD',
		locale = 'en-US',
		size = 'md',
		showCurrency = true,
		prefix,
		suffix,
		class: className = ''
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const hasSale = $derived(originalPrice !== undefined && originalPrice > price);
	const discount = $derived(
		hasSale ? Math.round(((originalPrice! - price) / originalPrice!) * 100) : 0
	);

	/** Format price with currency */
	function formatPrice(value: number): string {
		if (showCurrency) {
			return new Intl.NumberFormat(locale, {
				style: 'currency',
				currency
			}).format(value);
		}
		return new Intl.NumberFormat(locale, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(value);
	}

	const formattedPrice = $derived(formatPrice(price));
	const formattedOriginalPrice = $derived(originalPrice ? formatPrice(originalPrice) : '');

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes for current price */
	const priceSizeClasses: Record<PriceTagSize, string> = {
		sm: 'text-base font-semibold',
		md: 'text-lg font-bold',
		lg: 'text-2xl font-bold',
		xl: 'text-3xl font-bold'
	};

	/** Size classes for original price */
	const originalPriceSizeClasses: Record<PriceTagSize, string> = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
		xl: 'text-lg'
	};

	/** Size classes for badge */
	const badgeSizeClasses: Record<PriceTagSize, string> = {
		sm: 'text-xs px-1.5 py-0.5',
		md: 'text-xs px-2 py-0.5',
		lg: 'text-sm px-2 py-1',
		xl: 'text-sm px-2.5 py-1'
	};

	/** Container classes */
	const containerClasses = $derived(
		['inline-flex items-baseline gap-2 flex-wrap', className].filter(Boolean).join(' ')
	);

	/** Current price classes */
	const priceClasses = $derived(
		[priceSizeClasses[size], hasSale ? 'text-error' : 'text-fg'].join(' ')
	);

	/** Original price classes */
	const originalPriceClasses = $derived(
		[originalPriceSizeClasses[size], 'text-fg-muted line-through'].join(' ')
	);

	/** Discount badge classes */
	const badgeClasses = $derived(
		[badgeSizeClasses[size], 'bg-error text-fg-on-accent rounded font-medium'].join(' ')
	);
</script>

<div class={containerClasses} data-size={size}>
	{#if prefix}
		<span class="text-fg-muted {originalPriceSizeClasses[size]}">{prefix}</span>
	{/if}

	<span class={priceClasses}>{formattedPrice}</span>

	{#if hasSale}
		<span class={originalPriceClasses}>{formattedOriginalPrice}</span>
		<span class={badgeClasses}>-{discount}%</span>
	{/if}

	{#if suffix}
		<span class="text-fg-muted {originalPriceSizeClasses[size]}">{suffix}</span>
	{/if}
</div>
