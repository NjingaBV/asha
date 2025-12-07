<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	export type LinkVariant = 'default' | 'cta' | 'subtle';

	/** Props interface for Link component */
	export interface LinkProps {
		/** Link destination */
		href: string;
		/** Visual style variant */
		variant?: LinkVariant;
		/** Additional CSS classes */
		class?: string;
		/** ARIA label for accessibility */
		ariaLabel?: string;
		/** Open in new tab */
		target?: '_blank' | '_self';
		/** Slot for content (text, html, or Svelte snippet) */
		children?: import('svelte').Snippet | any;
	}

	/** Prop definitions for documentation */
	export const propDefs = {
		href: {
			type: 'string',
			required: true,
			description: 'Link destination'
		},
		variant: {
			type: 'string',
			options: ['default', 'cta', 'subtle'],
			default: 'default',
			description: 'Visual style variant'
		},
		class: {
			type: 'string',
			default: '',
			description: 'Additional CSS classes'
		},
		ariaLabel: {
			type: 'string',
			default: undefined,
			description: 'ARIA label for accessibility'
		},
		target: {
			type: 'string',
			options: ['_blank', '_self'],
			default: '_self',
			description: 'Open in new tab'
		}
	} as const;
</script>

<script lang="ts">
	/**
	 * Link component - Apple-style link with optional icon
	 *
	 * @example
	 * <Link href="/mac">Learn more</Link>
	 * <Link href="/buy" variant="cta">Buy</Link>
	 */

	let {
		href,
		variant = 'default',
		class: className = '',
		ariaLabel = undefined,
		target = '_self',
		children
	}: LinkProps = $props();

	const getVariantClasses = (): string => {
		const variants = {
			default: 'text-accent hover:text-accent-hover hover:underline',
			cta: 'text-accent hover:text-accent-hover font-medium hover:underline',
			subtle: 'text-fg-muted hover:text-fg hover:underline'
		};
		return variants[variant];
	};

	const baseClasses =
		'inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm';

	const linkClasses = $derived(
		[baseClasses, getVariantClasses(), className].filter(Boolean).join(' ')
	);
</script>

<a
	{href}
	{target}
	aria-label={ariaLabel}
	class={linkClasses}
	rel={target === '_blank' ? 'noopener noreferrer' : undefined}
>
	{#if children}
		{#if typeof children === 'function'}
			{@render children()}
		{:else}
			{children}
		{/if}
	{/if}
</a>
