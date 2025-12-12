<!--
  @component Quote
  
  A blockquote component for testimonials and citations.
  Supports author attribution and styling variants.
  
  @example Basic usage
  ```svelte
  <Quote>
    This product changed my life!
  </Quote>
  ```
  
  @example With attribution
  ```svelte
  <Quote 
    author="John Doe"
    role="CEO, Company"
    avatarSrc="/john.jpg"
  >
    An amazing experience from start to finish.
  </Quote>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Quote variant */
	export type QuoteVariant = 'default' | 'bordered' | 'highlighted';

	/** Quote size */
	export type QuoteSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		variant: {
			type: 'string',
			options: ['default', 'bordered', 'highlighted'],
			default: 'default',
			description: 'Visual style'
		},
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Quote size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Visual variant */
		variant?: QuoteVariant;
		/** Size */
		size?: QuoteSize;
		/** Author name */
		author?: string;
		/** Author role/title */
		role?: string;
		/** Author avatar URL */
		avatarSrc?: string;
		/** Show quotation marks */
		showQuotes?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Quote content */
		children?: Snippet;
	}

	let {
		variant = 'default',
		size = 'md',
		author,
		role,
		avatarSrc,
		showQuotes = true,
		class: className = '',
		children
	}: Props = $props();

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const quoteSizeClasses: Record<QuoteSize, string> = {
		sm: 'text-base',
		md: 'text-lg',
		lg: 'text-xl'
	};

	const authorSizeClasses: Record<QuoteSize, string> = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	};

	const avatarSizeClasses: Record<QuoteSize, string> = {
		sm: 'w-8 h-8',
		md: 'w-10 h-10',
		lg: 'w-12 h-12'
	};

	/** Variant classes */
	const variantClasses: Record<QuoteVariant, string> = {
		default: '',
		bordered: 'border-l-4 border-accent pl-4',
		highlighted: 'bg-bg-muted p-6 rounded-lg'
	};

	/** Container classes */
	const containerClasses = $derived(
		['flex flex-col gap-4', variantClasses[variant], className].filter(Boolean).join(' ')
	);

	/** Quote text classes */
	const quoteClasses = $derived(
		[quoteSizeClasses[size], 'text-fg italic leading-relaxed'].join(' ')
	);
</script>

<figure class={containerClasses} data-variant={variant} data-size={size}>
	<blockquote class={quoteClasses}>
		{#if showQuotes}
			<span class="text-accent text-4xl leading-none mr-1" aria-hidden="true">"</span>
		{/if}
		{#if children}
			{@render children()}
		{/if}
		{#if showQuotes}
			<span class="text-accent text-4xl leading-none ml-1" aria-hidden="true">"</span>
		{/if}
	</blockquote>

	{#if author}
		<figcaption class="flex items-center gap-3">
			{#if avatarSrc}
				<img
					src={avatarSrc}
					alt={author}
					class="{avatarSizeClasses[size]} rounded-full object-cover"
				/>
			{/if}

			<div class="flex flex-col">
				<cite class="{authorSizeClasses[size]} font-semibold text-fg not-italic">
					{author}
				</cite>
				{#if role}
					<span class="text-sm text-fg-muted">
						{role}
					</span>
				{/if}
			</div>
		</figcaption>
	{/if}
</figure>
