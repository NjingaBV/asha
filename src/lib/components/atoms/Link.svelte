<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Link component - Accessible hyperlink with Apple-inspired styling
	 *
	 * @example
	 * <Link href="/about">About</Link>
	 * <Link href="https://example.com" external>External Link</Link>
	 * <Link variant="subtle" size="sm">Small Link</Link>
	 */

	export type LinkVariant = 'default' | 'subtle' | 'primary' | 'underline';
	export type LinkSize = 'sm' | 'md' | 'lg';

	interface Props {
		/** Link destination */
		href: string;
		/** Link variant style */
		variant?: LinkVariant;
		/** Link size */
		size?: LinkSize;
		/** External link (opens in new tab) */
		external?: boolean;
		/** Disabled state */
		disabled?: boolean;
		/** Download attribute */
		download?: string | boolean;
		/** Rel attribute */
		rel?: string;
		/** ARIA label */
		ariaLabel?: string;
		/** Additional CSS classes */
		class?: string;
		/** Click handler */
		onClick?: (event: MouseEvent) => void;
		/** Content */
		children?: Snippet;
		/** Icon before text */
		iconLeft?: Snippet;
		/** Icon after text */
		iconRight?: Snippet;
	}

	let {
		href,
		variant = 'default',
		size = 'md',
		external = false,
		disabled = false,
		download = undefined,
		rel = external ? 'noopener noreferrer' : undefined,
		ariaLabel = undefined,
		class: className = '',
		onClick = undefined,
		children,
		iconLeft,
		iconRight
	}: Props = $props();

	/**
	 * External link attributes
	 */
	const target = $derived(external ? '_blank' : undefined);

	/**
	 * Size classes
	 */
	const getSizeClasses = (): string => {
		const sizes = {
			sm: 'text-sm gap-1',
			md: 'text-base gap-1.5',
			lg: 'text-lg gap-2'
		};
		return sizes[size];
	};

	/**
	 * Variant classes
	 */
	const getVariantClasses = (): string => {
		const variants = {
			default: 'text-accent hover:text-accent-hover',
			subtle: 'text-text hover:text-accent',
			primary: 'text-primary hover:text-primary-hover font-medium',
			underline:
				'text-accent hover:text-accent-hover underline decoration-1 underline-offset-2'
		};
		return variants[variant];
	};

	/**
	 * Base classes
	 */
	const baseClasses = [
		'inline-flex',
		'items-center',
		'transition-colors',
		'duration-2',
		'ease-standard',
		'focus:outline-none',
		'focus-visible:ring-2',
		'focus-visible:ring-accent',
		'focus-visible:ring-offset-2'
	];

	/**
	 * State classes
	 */
	const getStateClasses = (): string => {
		if (disabled) {
			return 'opacity-disabled cursor-not-allowed pointer-events-none';
		}
		return 'cursor-pointer';
	};

	/**
	 * Build final class string
	 */
	const linkClasses = $derived(
		[...baseClasses, getSizeClasses(), getVariantClasses(), getStateClasses(), className]
			.filter(Boolean)
			.join(' ')
	);

	const handleClick = (event: MouseEvent) => {
		if (disabled) {
			event.preventDefault();
			return;
		}
		if (onClick) {
			onClick(event);
		}
	};
</script>

<a
	{href}
	{target}
	{rel}
	{download}
	class={linkClasses}
	aria-label={ariaLabel}
	aria-disabled={disabled}
	onclick={handleClick}
>
	{#if iconLeft}
		<span class="flex items-center">
			{@render iconLeft()}
		</span>
	{/if}

	{#if children}
		{@render children()}
	{/if}

	{#if iconRight}
		<span class="flex items-center">
			{@render iconRight()}
		</span>
	{/if}

	{#if external && !iconRight}
		<!-- External link icon -->
		<svg
			class="h-[1em] w-[1em]"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
			/>
		</svg>
	{/if}
</a>
