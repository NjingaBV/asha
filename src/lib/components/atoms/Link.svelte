<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Link component - Apple-style link with optional icon
	 *
	 * @example
	 * <Link href="/mac">Learn more</Link>
	 * <Link href="/buy" variant="cta">Buy</Link>
	 */

	export type LinkVariant = 'default' | 'cta' | 'subtle';

	interface Props {
		/** Link destination */
		href: string;
		/** Visual style variant */
		variant?: LinkVariant;
		/** Additional CSS classes */
		className?: string;
		/** ARIA label for accessibility */
		ariaLabel?: string;
		/** Open in new tab */
		target?: '_blank' | '_self';
		/** Slot for content */
		children: Snippet;
	}

	let {
		href,
		variant = 'default',
		className = '',
		ariaLabel = undefined,
		target = '_self',
		children
	}: Props = $props();

	const getVariantClasses = (): string => {
		const variants = {
			default: 'text-blue-600 hover:text-blue-700 hover:underline',
			cta: 'text-blue-600 hover:text-blue-700 font-medium hover:underline',
			subtle: 'text-slate-600 hover:text-slate-900 hover:underline'
		};
		return variants[variant];
	};

	const baseClasses = 'inline-flex items-center gap-1 transition-colors';

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
	{@render children()}
</a>
