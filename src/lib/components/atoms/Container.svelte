<!--
  @component Container
  
  A responsive container component for constraining content width.
  Provides consistent horizontal padding and max-width.
  
  @example Basic usage
  ```svelte
  <Container>
    <p>Content goes here</p>
  </Container>
  ```
  
  @example With different size
  ```svelte
  <Container size="lg">
    <p>Wider content</p>
  </Container>
  ```
  
  @example Centered
  ```svelte
  <Container center>
    <p>Centered content</p>
  </Container>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Container max-width size */
	export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'prose';

	/** Padding size */
	export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full', 'prose'],
			default: 'lg',
			description: 'Maximum width'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Maximum width size */
		size?: ContainerSize;
		/** Horizontal padding */
		padding?: ContainerPadding;
		/** Center the container */
		center?: boolean;
		/** HTML element to render as */
		as?: 'div' | 'section' | 'article' | 'main' | 'aside';
		/** Custom CSS classes */
		class?: string;
		/** Container content */
		children?: Snippet;
	}

	let {
		size = 'lg',
		padding = 'md',
		center = true,
		as = 'div',
		class: className = '',
		children
	}: Props = $props();

	// ============================================
	// Style Classes
	// ============================================

	/** Max-width classes */
	const sizeClasses: Record<ContainerSize, string> = {
		xs: 'max-w-xs', // 320px
		sm: 'max-w-sm', // 384px
		md: 'max-w-md', // 448px
		lg: 'max-w-4xl', // 896px
		xl: 'max-w-6xl', // 1152px
		'2xl': 'max-w-7xl', // 1280px
		full: 'max-w-full',
		prose: 'max-w-prose' // 65ch
	};

	/** Padding classes */
	const paddingClasses: Record<ContainerPadding, string> = {
		none: '',
		sm: 'px-4',
		md: 'px-4 sm:px-6 lg:px-8',
		lg: 'px-6 sm:px-8 lg:px-12'
	};

	/** Combined classes */
	const containerClasses = $derived(
		['w-full', sizeClasses[size], paddingClasses[padding], center ? 'mx-auto' : '', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if as === 'section'}
	<section class={containerClasses} data-size={size}>
		{#if children}
			{@render children()}
		{/if}
	</section>
{:else if as === 'article'}
	<article class={containerClasses} data-size={size}>
		{#if children}
			{@render children()}
		{/if}
	</article>
{:else if as === 'main'}
	<main class={containerClasses} data-size={size}>
		{#if children}
			{@render children()}
		{/if}
	</main>
{:else if as === 'aside'}
	<aside class={containerClasses} data-size={size}>
		{#if children}
			{@render children()}
		{/if}
	</aside>
{:else}
	<div class={containerClasses} data-size={size}>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}
