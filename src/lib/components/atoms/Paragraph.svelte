<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Paragraph component - renders semantic <p> tag with customizable sizing and styling
	 *
	 * @example
	 * <Paragraph size="lg" color="text-slate-600">Large paragraph text</Paragraph>
	 */

	type ParagraphSize = 'sm' | 'base' | 'lg' | 'xl';

	interface Props {
		/** Text size */
		size?: ParagraphSize;
		/** Text color class */
		color?: string;
		/** Line height class */
		leading?: 'tight' | 'normal' | 'relaxed' | 'loose';
		/** Custom CSS classes */
		class?: string;
		/** Slot for content */
		children?: Snippet;
	}

	let {
		size = 'base',
		color = 'text-gray-700',
		leading = 'relaxed',
		class: className = '',
		children
	}: Props = $props();

	const sizeClasses = {
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl'
	};

	const leadingClasses = {
		tight: 'leading-tight',
		normal: 'leading-normal',
		relaxed: 'leading-relaxed',
		loose: 'leading-loose'
	};

	const paragraphClass = $derived(
		[sizeClasses[size], color, leadingClasses[leading], className].filter(Boolean).join(' ')
	);
</script>

<p class={paragraphClass}>
	{#if children}
		{@render children()}
	{/if}
</p>
