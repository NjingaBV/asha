<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Button component - renders as <button> or <a> depending on href prop
	 *
	 * @example
	 * <Button variant="primary" size="md">Click me</Button>
	 * <Button href="/path" tone="secondary">Link Button</Button>
	 * <Button loading type="submit">Submit</Button>
	 */

	export type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'solid';
	export type ButtonSize = 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
	export type ButtonTone = 'primary' | 'secondary' | 'neutral';
	export type ButtonType = 'button' | 'submit' | 'reset';

	interface Props {
		/** Link href - if provided, renders as <a> instead of <button> */
		href?: string;
		/** Visual style variant */
		variant?: ButtonVariant;
		/** Button size */
		size?: ButtonSize;
		/** Disabled state */
		disabled?: boolean;
		/** Full width button */
		fullWidth?: boolean;
		/** Custom background color */
		color?: string;
		/** Color tone/scheme */
		tone?: ButtonTone;
		/** Click handler */
		onClick?: (event: MouseEvent) => void;
		/** Additional CSS classes */
		className?: string;
		/** Rounded pill shape */
		rounded?: boolean;
		/** Show loading spinner */
		loading?: boolean;
		/** Button type (only for <button>) */
		type?: ButtonType;
		/** ARIA label for accessibility */
		ariaLabel?: string;
		/** Slot for content (text or html) */
		children?: Snippet | any;
		/** Slot for icon before text */
		iconBefore?: Snippet | any;
		/** Slot for icon after text */
		iconAfter?: Snippet | any;
	}

	let {
		href = undefined,
		variant = 'primary',
		size = 'md',
		disabled = false,
		fullWidth = false,
		color = undefined,
		tone = undefined,
		onClick = undefined,
		className = '',
		rounded = false,
		loading = false,
		type = 'button',
		ariaLabel = undefined,
		children,
		iconBefore,
		iconAfter
	}: Props = $props();

	// Normalize size aliases
	const normalizedSize =
		size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : size;

	// Normalize variant (solid is an alias for primary)
	const normalizedVariant = variant === 'solid' ? 'primary' : variant;

	// Effective disabled state includes loading
	const isDisabled = $derived(disabled || loading);

	/**
	 * Get size-based padding and text classes
	 */
	const getSizeClasses = (): string => {
		const sizes = {
			sm: 'px-3 py-1 text-xs gap-1.5',
			md: 'px-4 py-2 text-sm gap-2',
			lg: 'px-5 py-3 text-base gap-2.5'
		};
		return sizes[normalizedSize];
	};

	/**
	 * Get style classes based on tone, color prop, or variant
	 */
	const getVariantClasses = (): string => {
		// Custom color overrides everything
		if (color) {
			return 'text-white shadow-[0_0_32px_rgba(0,199,190,0.35)] hover:scale-[1.01]';
		}

		// Tone-based styling
		if (tone) {
			if (normalizedVariant === 'ghost') {
				const tones = {
					neutral: 'bg-transparent text-surface-on hover:bg-surface/40',
					secondary: 'bg-transparent text-secondary hover:bg-surface/40',
					primary: 'bg-transparent text-primary hover:bg-surface/40'
				};
				return tones[tone];
			}

			// Solid variant with tone
			const tones = {
				neutral: 'bg-surface text-surface-on shadow-sm hover:scale-[1.01]',
				secondary: 'bg-secondary text-white shadow-sm hover:scale-[1.01]',
				primary:
					'bg-primary text-white shadow-[0_0_32px_rgba(0,199,190,0.35)] hover:scale-[1.01]'
			};
			return tones[tone];
		}

		// Default variant styling (no tone specified)
		const variants = {
			primary:
				'bg-primary text-white shadow-[0_0_32px_rgba(0,199,190,0.35)] hover:scale-[1.01]',
			ghost: 'bg-transparent text-primary hover:bg-surface/40',
			outline: 'border border-border text-primary hover:bg-surface/40',
			solid: 'bg-primary text-white shadow-[0_0_32px_rgba(0,199,190,0.35)] hover:scale-[1.01]'
		};
		return variants[normalizedVariant];
	};

	/**
	 * Base styles applied to all buttons
	 */
	const baseClasses = [
		'inline-flex items-center justify-center',
		'font-medium transition-all',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
		'disabled:opacity-50 disabled:cursor-not-allowed'
	];

	/**
	 * Build final class string
	 */
	const buttonClasses = $derived(
		[
			...baseClasses,
			rounded ? 'rounded-full' : 'rounded-2xl',
			fullWidth ? 'w-full' : '',
			getSizeClasses(),
			getVariantClasses(),
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	const handleClick = (event: MouseEvent) => {
		if (!isDisabled && onClick) {
			onClick(event);
		}
	};
</script>

{#if href && !isDisabled}
	<a
		{href}
		{ariaLabel}
		class={buttonClasses}
		onclick={handleClick}
		style={color ? `background-color: ${color}` : ''}
	>
		{#if iconBefore}
			<span class="flex items-center">
				{#if typeof iconBefore === 'function'}
					{@render iconBefore()}
				{:else}
					{iconBefore}
				{/if}
			</span>
		{/if}
		<span>
			{#if typeof children === 'function'}
				{@render children()}
			{:else}
				{children}
			{/if}
		</span>
		{#if iconAfter}
			<span class="flex items-center">
				{#if typeof iconAfter === 'function'}
					{@render iconAfter()}
				{:else}
					{iconAfter}
				{/if}
			</span>
		{/if}
	</a>
{:else}
	<button
		{type}
		{ariaLabel}
		disabled={isDisabled}
		class={buttonClasses}
		onclick={handleClick}
		style={color ? `background-color: ${color}` : ''}
	>
		{#if iconBefore}
			<span class="flex items-center">
				{#if typeof iconBefore === 'function'}
					{@render iconBefore()}
				{:else}
					{iconBefore}
				{/if}
			</span>
		{/if}
		{#if loading}
			<span class="inline-flex items-center gap-2">
				<svg
					class="inline-block h-4 w-4 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				<span>
					{#if typeof children === 'function'}
						{@render children()}
					{:else}
						{children}
					{/if}
				</span>
			</span>
		{:else}
			<span>
				{#if typeof children === 'function'}
					{@render children()}
				{:else}
					{children}
				{/if}
			</span>
		{/if}
		{#if iconAfter}
			<span class="flex items-center">
				{#if typeof iconAfter === 'function'}
					{@render iconAfter()}
				{:else}
					{iconAfter}
				{/if}
			</span>
		{/if}
	</button>
{/if}
