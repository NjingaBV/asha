<script lang="ts" module>
	export type ParagraphSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Paragraph component - renders semantic <p> tag with customizable sizing and styling
	 *
	 * @example
	 * <Text size="lg" color="text-slate-600">Large paragraph text</Text>
	 */

	interface Props {
		/** Text size */
		size?: ParagraphSize;
		/** Text color class */
		color?: string;
		/** Line height class */
		leading?: 'tight' | 'normal' | 'relaxed' | 'loose';
		/** Custom CSS classes */
		class?: string;
		/** Slot for content (text, html, or Svelte snippet) */
		children?: Snippet | any;
	}

	let {
		size = 'base',
		color = 'text-fg-muted',
		leading = 'relaxed',
		class: className = '',
		children
	}: Props = $props();

	const sizeClasses = {
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl'
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
		{#if typeof children === 'function'}
			{@render children()}
		{:else}
			{children}
		{/if}
	{/if}
</p>
