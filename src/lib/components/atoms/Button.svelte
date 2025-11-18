<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Button component - renders as <button> or <a> depending on href prop
	 * Pill-shaped button with full border radius
	 *
	 * @example
	 * <Button tone="primary" size="md">Click me</Button>
	 * <Button href="/path" tone="secondary">Link Button</Button>
	 */

	export type ButtonTone = 'primary' | 'secondary' | 'dark' | 'neutral';
	export type ButtonSize = 'sm' | 'md' | 'lg';

	interface Props {
		/** Link href - if provided, renders as <a> instead of <button> */
		href?: string;
		/** Button size */
		size?: ButtonSize;
		/** Color tone/scheme */
		tone?: ButtonTone;
		/** Disabled state */
		disabled?: boolean;
		/** Full width button */
		fullWidth?: boolean;
		/** Click handler */
		onClick?: (event: MouseEvent) => void;
		/** Custom CSS classes */
		class?: string;
		/** ARIA label for accessibility */
		ariaLabel?: string;
		/** Slot for content (text, html, or Svelte snippet) */
		children?: Snippet | any;
		/** Button type (only for <button>) */
		type?: 'button' | 'submit' | 'reset';
		/** Show loading state */
		loading?: boolean;
	}

	let {
		href = undefined,
		size = 'md',
		tone = 'primary',
		disabled = false,
		fullWidth = false,
		onClick = undefined,
		class: className = '',
		ariaLabel = undefined,
		children,
		type = 'button',
		loading = false
	}: Props = $props();

	const isDisabled = $derived(disabled || loading);

	const getSizeClasses = (): string => {
		const sizes = {
			sm: 'px-3 py-1 text-sm',
			md: 'px-4 py-2 text-base',
			lg: 'px-6 py-3 text-lg'
		};
		return sizes[size];
	};

	const getToneClasses = (): string => {
		const tones = {
			primary: 'bg-[#0a84ff] text-white hover:opacity-90',
			secondary: 'bg-white text-black border border-gray-300 hover:bg-slate-50',
			dark: 'bg-black text-white hover:opacity-90',
			neutral: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
		};
		return tones[tone];
	};

	const baseClasses = [
		'inline-flex items-center justify-center',
		'rounded-full font-medium transition-all',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
		'disabled:opacity-50 disabled:cursor-not-allowed'
	];

	const buttonClasses = $derived(
		[...baseClasses, fullWidth ? 'w-full' : '', getSizeClasses(), getToneClasses(), className]
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
	<a {href} aria-label={ariaLabel} class={buttonClasses} onclick={handleClick}>
		{#if children}
			{#if typeof children === 'function'}
				{@render children()}
			{:else}
				{children}
			{/if}
		{/if}
	</a>
{:else}
	<button
		{type}
		aria-label={ariaLabel}
		disabled={isDisabled}
		class={buttonClasses}
		onclick={handleClick}
	>
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
			</span>
		{:else if children}
			{#if typeof children === 'function'}
				{@render children()}
			{:else}
				{children}
			{/if}
		{/if}
	</button>
{/if}
