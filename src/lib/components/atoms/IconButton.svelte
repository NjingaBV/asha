<!--
  @component IconButton
  
  A button component optimized for icon-only actions.
  Provides proper accessibility with required aria-label.
  
  @example Basic usage
  ```svelte
  <IconButton ariaLabel="Close" onclick={handleClose}>
    <CloseIcon />
  </IconButton>
  ```
  
  @example With variants
  ```svelte
  <IconButton variant="ghost" tone="danger" ariaLabel="Delete">
    <TrashIcon />
  </IconButton>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** IconButton visual variant */
	export type IconButtonVariant = 'solid' | 'outline' | 'ghost';

	/** IconButton color tone */
	export type IconButtonTone = 'primary' | 'secondary' | 'neutral' | 'danger' | 'success';

	/** IconButton size */
	export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		variant: {
			type: 'string',
			options: ['solid', 'outline', 'ghost'],
			default: 'ghost',
			description: 'Visual style variant'
		},
		tone: {
			type: 'string',
			options: ['primary', 'secondary', 'neutral', 'danger', 'success'],
			default: 'neutral',
			description: 'Color tone'
		},
		size: {
			type: 'string',
			options: ['xs', 'sm', 'md', 'lg'],
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
		/** ARIA label (required for accessibility) */
		ariaLabel: string;
		/** Visual variant */
		variant?: IconButtonVariant;
		/** Color tone */
		tone?: IconButtonTone;
		/** Size */
		size?: IconButtonSize;
		/** Link href - renders as <a> if provided */
		href?: string;
		/** Link target */
		target?: '_blank' | '_self' | '_parent' | '_top';
		/** Disabled state */
		disabled?: boolean;
		/** Loading state */
		loading?: boolean;
		/** Button type */
		type?: 'button' | 'submit' | 'reset';
		/** Custom CSS classes */
		class?: string;
		/** ID for the button */
		id?: string;
		/** Icon content */
		children?: Snippet;
		/** Click handler */
		onclick?: (event: MouseEvent) => void;
	}

	let {
		ariaLabel,
		variant = 'ghost',
		tone = 'neutral',
		size = 'md',
		href,
		target,
		disabled = false,
		loading = false,
		type = 'button',
		class: className = '',
		id,
		children,
		onclick
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const isDisabled = $derived(disabled || loading);
	const isLink = $derived(!!href && !isDisabled);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const sizeClasses: Record<IconButtonSize, string> = {
		xs: 'w-6 h-6 text-xs',
		sm: 'w-8 h-8 text-sm',
		md: 'w-10 h-10 text-base',
		lg: 'w-12 h-12 text-lg'
	};

	/** Icon size classes */
	const iconSizeClasses: Record<IconButtonSize, string> = {
		xs: '[&>*]:w-3 [&>*]:h-3',
		sm: '[&>*]:w-4 [&>*]:h-4',
		md: '[&>*]:w-5 [&>*]:h-5',
		lg: '[&>*]:w-6 [&>*]:h-6'
	};

	/** Variant + Tone combinations */
	const variantToneClasses: Record<IconButtonVariant, Record<IconButtonTone, string>> = {
		solid: {
			primary: 'bg-accent text-fg-on-accent hover:bg-accent-hover active:bg-accent-active',
			secondary:
				'bg-secondary text-fg-on-accent hover:bg-secondary-hover active:bg-secondary-active',
			neutral: 'bg-fg text-bg hover:opacity-90 active:opacity-80',
			danger: 'bg-error text-fg-on-accent hover:opacity-90 active:opacity-80',
			success: 'bg-success text-fg-on-accent hover:opacity-90 active:opacity-80'
		},
		outline: {
			primary: 'border border-accent text-accent hover:bg-accent hover:text-fg-on-accent',
			secondary:
				'border border-secondary text-secondary hover:bg-secondary hover:text-fg-on-accent',
			neutral: 'border border-border text-fg hover:bg-bg-muted hover:border-fg',
			danger: 'border border-error text-error hover:bg-error hover:text-fg-on-accent',
			success: 'border border-success text-success hover:bg-success hover:text-fg-on-accent'
		},
		ghost: {
			primary: 'text-accent hover:bg-accent-subtle active:bg-accent-subtle/80',
			secondary: 'text-secondary hover:bg-bg-muted active:bg-bg-subtle',
			neutral: 'text-fg hover:bg-bg-muted active:bg-bg-subtle',
			danger: 'text-error hover:bg-error-subtle active:bg-error-subtle/80',
			success: 'text-success hover:bg-success-subtle active:bg-success-subtle/80'
		}
	};

	/** Combined classes */
	const buttonClasses = $derived(
		[
			'inline-flex items-center justify-center',
			'rounded-lg',
			'transition-all duration-fast ease-standard',
			'outline-none',
			'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
			'disabled:opacity-disabled disabled:pointer-events-none',
			'cursor-pointer',
			sizeClasses[size],
			iconSizeClasses[size],
			variantToneClasses[variant][tone],
			loading ? 'cursor-wait' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if isLink}
	<a
		{href}
		{target}
		{id}
		class={buttonClasses}
		aria-label={ariaLabel}
		rel={target === '_blank' ? 'noopener noreferrer' : undefined}
		{onclick}
		data-variant={variant}
		data-tone={tone}
		data-size={size}
	>
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<button
		{type}
		{id}
		disabled={isDisabled}
		class={buttonClasses}
		aria-label={ariaLabel}
		aria-busy={loading ? 'true' : undefined}
		{onclick}
		data-variant={variant}
		data-tone={tone}
		data-size={size}
	>
		{#if loading}
			<svg
				class="animate-spin"
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
		{:else if children}
			{@render children()}
		{/if}
	</button>
{/if}
