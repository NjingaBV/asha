<!--
  @component ProductBadge
  
  A badge component for product status and labels.
  Useful for showing "New", "Sale", "Out of Stock", etc.
  
  @example Basic usage
  ```svelte
  <ProductBadge type="new" />
  ```
  
  @example Sale with discount
  ```svelte
  <ProductBadge type="sale" discount={20} />
  ```
  
  @example Custom
  ```svelte
  <ProductBadge type="custom" label="Limited Edition" />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Badge type */
	export type ProductBadgeType =
		| 'new'
		| 'sale'
		| 'bestseller'
		| 'limited'
		| 'outofstock'
		| 'preorder'
		| 'custom';

	/** Badge size */
	export type ProductBadgeSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		type: {
			type: 'string',
			options: ['new', 'sale', 'bestseller', 'limited', 'outofstock', 'preorder', 'custom'],
			default: 'new',
			description: 'Badge type'
		},
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Badge size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Badge type */
		type?: ProductBadgeType;
		/** Size */
		size?: ProductBadgeSize;
		/** Custom label (for custom type) */
		label?: string;
		/** Discount percentage (for sale type) */
		discount?: number;
		/** Custom CSS classes */
		class?: string;
	}

	let { type = 'new', size = 'md', label, discount, class: className = '' }: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	/** Default labels for each type */
	const typeLabels: Record<ProductBadgeType, string> = {
		new: 'New',
		sale: discount ? `-${discount}%` : 'Sale',
		bestseller: 'Bestseller',
		limited: 'Limited',
		outofstock: 'Out of Stock',
		preorder: 'Pre-order',
		custom: label || 'Badge'
	};

	const displayLabel = $derived(label || typeLabels[type]);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const sizeClasses: Record<ProductBadgeSize, string> = {
		sm: 'px-1.5 py-0.5 text-xs',
		md: 'px-2 py-1 text-xs',
		lg: 'px-3 py-1.5 text-sm'
	};

	/** Type colors */
	const typeColors: Record<ProductBadgeType, string> = {
		new: 'bg-accent text-fg-on-accent',
		sale: 'bg-error text-fg-on-accent',
		bestseller: 'bg-warning text-fg',
		limited: 'bg-secondary text-fg-on-accent',
		outofstock: 'bg-fg-muted text-bg',
		preorder: 'bg-accent-subtle text-accent',
		custom: 'bg-bg-muted text-fg'
	};

	/** Badge classes */
	const badgeClasses = $derived(
		[
			'inline-flex items-center justify-center',
			'font-semibold uppercase tracking-wide',
			'rounded',
			sizeClasses[size],
			typeColors[type],
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<span class={badgeClasses} data-type={type} data-size={size}>
	{displayLabel}
</span>
