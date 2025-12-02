<!--
  @component Button
  
  A versatile button component with multiple variants, tones, and sizes.
  Renders as `<button>` or `<a>` depending on whether `href` is provided.
  
  @example Basic usage
  ```svelte
  <Button tone="primary" size="md">Click me</Button>
  ```
  
  @example As link
  ```svelte
  <Button href="/path" variant="ghost">Learn more</Button>
  ```
  
  @example With loading state
  ```svelte
  <Button loading={isSubmitting}>Submit</Button>
  ```
  
  @example With icons
  ```svelte
  <Button>
    {#snippet iconLeft()}<Icon name="plus" />{/snippet}
    Add item
  </Button>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Button visual variant */
	export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';

	/** Button color tone */
	export type ButtonTone = 'primary' | 'secondary' | 'neutral' | 'danger' | 'success';

	/** Button size */
	export type ButtonSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation and validation */
	export const propDefs = {
		variant: {
			type: 'string',
			options: ['solid', 'outline', 'ghost', 'link'],
			default: 'solid',
			description: 'Visual style variant'
		},
		tone: {
			type: 'string',
			options: ['primary', 'secondary', 'neutral', 'danger', 'success'],
			default: 'primary',
			description: 'Color tone/scheme'
		},
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Button size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Visual style variant */
		variant?: ButtonVariant;
		/** Color tone */
		tone?: ButtonTone;
		/** Size */
		size?: ButtonSize;
		/** Link href - renders as <a> if provided */
		href?: string;
		/** Link target */
		target?: '_blank' | '_self' | '_parent' | '_top';
		/** Disabled state */
		disabled?: boolean;
		/** Loading state - shows spinner and disables interaction */
		loading?: boolean;
		/** Full width button */
		fullWidth?: boolean;
		/** Button type (only for <button>) */
		type?: 'button' | 'submit' | 'reset';
		/** Custom CSS classes */
		class?: string;
		/** ARIA label for accessibility */
		ariaLabel?: string;
		/** ID for the button element */
		id?: string;
		/** Name attribute */
		name?: string;
		/** Value attribute */
		value?: string;
		/** Form ID to associate with */
		form?: string;
		/** Icon slot - appears before content */
		iconLeft?: Snippet;
		/** Icon slot - appears after content */
		iconRight?: Snippet;
		/** Button content */
		children?: Snippet;
		/** Click handler */
		onclick?: (event: MouseEvent) => void;
		/** Focus handler */
		onfocus?: (event: FocusEvent) => void;
		/** Blur handler */
		onblur?: (event: FocusEvent) => void;
		/** Keydown handler */
		onkeydown?: (event: KeyboardEvent) => void;
	}

	let {
		variant = 'solid',
		tone = 'primary',
		size = 'md',
		href,
		target,
		disabled = false,
		loading = false,
		fullWidth = false,
		type = 'button',
		class: className = '',
		ariaLabel,
		id,
		name,
		value,
		form,
		iconLeft,
		iconRight,
		children,
		onclick,
		onfocus,
		onblur,
		onkeydown
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const isDisabled = $derived(disabled || loading);
	const isLink = $derived(!!href && !isDisabled);

	// ============================================
	// Style Classes
	// ============================================

	/** Base classes applied to all buttons */
	const baseClasses = [
		// Layout
		'inline-flex items-center justify-center gap-2',
		// Typography
		'font-medium leading-none whitespace-nowrap',
		// Transitions
		'transition-all duration-fast ease-standard',
		// Focus ring
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
		// Disabled state
		'disabled:pointer-events-none disabled:opacity-disabled',
		// Cursor
		'cursor-pointer'
	].join(' ');

	/** Size-specific classes */
	const sizeClasses: Record<ButtonSize, string> = {
		sm: 'h-8 px-3 text-sm rounded-md',
		md: 'h-10 px-4 text-base rounded-lg',
		lg: 'h-12 px-6 text-lg rounded-lg'
	};

	/** Variant + Tone combinations */
	const variantToneClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
		solid: {
			primary: [
				'bg-accent text-fg-on-accent',
				'hover:bg-accent-hover active:bg-accent-active',
				'focus-visible:ring-accent'
			].join(' '),
			secondary: [
				'bg-secondary text-fg-on-accent',
				'hover:bg-secondary-hover active:bg-secondary-active',
				'focus-visible:ring-secondary'
			].join(' '),
			neutral: [
				'bg-fg text-bg',
				'hover:opacity-90 active:opacity-80',
				'focus-visible:ring-fg'
			].join(' '),
			danger: [
				'bg-error text-fg-on-accent',
				'hover:opacity-90 active:opacity-80',
				'focus-visible:ring-error'
			].join(' '),
			success: [
				'bg-success text-fg-on-accent',
				'hover:opacity-90 active:opacity-80',
				'focus-visible:ring-success'
			].join(' ')
		},
		outline: {
			primary: [
				'border border-accent text-accent bg-transparent',
				'hover:bg-accent hover:text-fg-on-accent',
				'focus-visible:ring-accent'
			].join(' '),
			secondary: [
				'border border-secondary text-secondary bg-transparent',
				'hover:bg-secondary hover:text-fg-on-accent',
				'focus-visible:ring-secondary'
			].join(' '),
			neutral: [
				'border border-border text-fg bg-transparent',
				'hover:bg-bg-muted',
				'focus-visible:ring-border-focus'
			].join(' '),
			danger: [
				'border border-error text-error bg-transparent',
				'hover:bg-error hover:text-fg-on-accent',
				'focus-visible:ring-error'
			].join(' '),
			success: [
				'border border-success text-success bg-transparent',
				'hover:bg-success hover:text-fg-on-accent',
				'focus-visible:ring-success'
			].join(' ')
		},
		ghost: {
			primary: [
				'text-accent bg-transparent',
				'hover:bg-accent-subtle',
				'focus-visible:ring-accent'
			].join(' '),
			secondary: [
				'text-secondary bg-transparent',
				'hover:bg-bg-muted',
				'focus-visible:ring-secondary'
			].join(' '),
			neutral: [
				'text-fg bg-transparent',
				'hover:bg-bg-muted',
				'focus-visible:ring-border-focus'
			].join(' '),
			danger: [
				'text-error bg-transparent',
				'hover:bg-error-subtle',
				'focus-visible:ring-error'
			].join(' '),
			success: [
				'text-success bg-transparent',
				'hover:bg-success-subtle',
				'focus-visible:ring-success'
			].join(' ')
		},
		link: {
			primary: [
				'text-accent bg-transparent underline-offset-4',
				'hover:underline',
				'focus-visible:ring-accent'
			].join(' '),
			secondary: [
				'text-secondary bg-transparent underline-offset-4',
				'hover:underline',
				'focus-visible:ring-secondary'
			].join(' '),
			neutral: [
				'text-fg bg-transparent underline-offset-4',
				'hover:underline',
				'focus-visible:ring-border-focus'
			].join(' '),
			danger: [
				'text-error bg-transparent underline-offset-4',
				'hover:underline',
				'focus-visible:ring-error'
			].join(' '),
			success: [
				'text-success bg-transparent underline-offset-4',
				'hover:underline',
				'focus-visible:ring-success'
			].join(' ')
		}
	};

	/** Combined classes */
	const buttonClasses = $derived(
		[
			baseClasses,
			sizeClasses[size],
			variantToneClasses[variant][tone],
			fullWidth ? 'w-full' : '',
			loading ? 'cursor-wait' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	// ============================================
	// Event Handlers
	// ============================================

	function handleClick(event: MouseEvent) {
		if (isDisabled) {
			event.preventDefault();
			return;
		}
		onclick?.(event);
	}

	function handleKeydown(event: KeyboardEvent) {
		// Handle Enter/Space for link-like behavior on buttons
		if (event.key === 'Enter' || event.key === ' ') {
			if (isLink && event.key === ' ') {
				event.preventDefault(); // Prevent scroll on space
			}
		}
		onkeydown?.(event);
	}
</script>

{#if isLink}
	<a
		{href}
		{target}
		{id}
		class={buttonClasses}
		aria-label={ariaLabel}
		aria-disabled={disabled ? 'true' : undefined}
		rel={target === '_blank' ? 'noopener noreferrer' : undefined}
		onclick={handleClick}
		{onfocus}
		{onblur}
		onkeydown={handleKeydown}
		data-variant={variant}
		data-tone={tone}
		data-size={size}
	>
		{#if iconLeft}
			<span class="shrink-0" aria-hidden="true">
				{@render iconLeft()}
			</span>
		{/if}

		{#if children}
			{@render children()}
		{/if}

		{#if iconRight}
			<span class="shrink-0" aria-hidden="true">
				{@render iconRight()}
			</span>
		{/if}
	</a>
{:else}
	<button
		{type}
		{id}
		{name}
		{value}
		{form}
		disabled={isDisabled}
		class={buttonClasses}
		aria-label={ariaLabel}
		aria-busy={loading ? 'true' : undefined}
		onclick={handleClick}
		{onfocus}
		{onblur}
		onkeydown={handleKeydown}
		data-variant={variant}
		data-tone={tone}
		data-size={size}
		data-loading={loading ? '' : undefined}
	>
		{#if loading}
			<!-- Spinner -->
			<svg
				class="h-4 w-4 animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				aria-hidden="true"
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
			<span class="sr-only">Loading...</span>
		{/if}

		{#if iconLeft && !loading}
			<span class="shrink-0" aria-hidden="true">
				{@render iconLeft()}
			</span>
		{/if}

		{#if children}
			<span class={loading ? 'opacity-0' : ''}>
				{@render children()}
			</span>
		{/if}

		{#if iconRight && !loading}
			<span class="shrink-0" aria-hidden="true">
				{@render iconRight()}
			</span>
		{/if}
	</button>
{/if}
