<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Heading component - renders h1-h6 with configurable styles
	 *
	 * @example
	 * <Heading level={1} size="6xl">Large Title</Heading>
	 * <Heading level={2} weight="bold" color="text-blue-600">Section</Heading>
	 */

	export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
	export type HeadingSize =
		| 'xs'
		| 'sm'
		| 'base'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| '7xl'
		| '8xl'
		| '9xl';
	export type HeadingWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
	export type HeadingAlign = 'left' | 'center' | 'right' | 'justify';
	export type HeadingLeading = 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
	export type HeadingTracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

	interface Props {
		/** HTML heading level (h1-h6) */
		level?: HeadingLevel;
		/** Font size */
		size?: HeadingSize;
		/** Font weight */
		weight?: HeadingWeight;
		/** Text color (Tailwind class) */
		color?: string;
		/** Text alignment */
		align?: HeadingAlign;
		/** Line height */
		leading?: HeadingLeading;
		/** Letter spacing */
		tracking?: HeadingTracking;
		/** Additional CSS classes */
		class?: string;
		/** Content - can be text, snippet, or function */
		children?: Snippet | any;
	}

	// Tailwind class mappings
	const sizeMap: Record<HeadingSize, string> = {
		xs: 'text-xs',
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl',
		'4xl': 'text-4xl',
		'5xl': 'text-5xl',
		'6xl': 'text-6xl',
		'7xl': 'text-7xl',
		'8xl': 'text-8xl',
		'9xl': 'text-9xl'
	};

	const weightMap: Record<HeadingWeight, string> = {
		light: 'font-light',
		normal: 'font-normal',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold',
		black: 'font-black'
	};

	const alignMap: Record<HeadingAlign, string> = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
		justify: 'text-justify'
	};

	const leadingMap: Record<HeadingLeading, string> = {
		tight: 'leading-tight',
		snug: 'leading-snug',
		normal: 'leading-normal',
		relaxed: 'leading-relaxed',
		loose: 'leading-loose'
	};

	const trackingMap: Record<HeadingTracking, string> = {
		tighter: 'tracking-tighter',
		tight: 'tracking-tight',
		normal: 'tracking-normal',
		wide: 'tracking-wide',
		wider: 'tracking-wider',
		widest: 'tracking-widest'
	};

	let {
		level = 1,
		size = 'base',
		weight = 'normal',
		color = 'text-fg',
		align = 'left',
		leading = undefined,
		tracking = undefined,
		class: className = undefined,
		children
	}: Props = $props();

	/**
	 * Build final class string from mapped classes
	 */
	const headingClasses = $derived(
		[
			sizeMap[size],
			weightMap[weight],
			color,
			alignMap[align],
			leading ? leadingMap[leading] : '',
			tracking ? trackingMap[tracking] : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/**
	 * Valid heading elements
	 */
	const HeadingTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'][level - 1] as
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6';
</script>

<svelte:element this={HeadingTag} class={headingClasses}>
	{#if typeof children === 'function'}
		{@render children()}
	{:else}
		{children}
	{/if}
</svelte:element>
