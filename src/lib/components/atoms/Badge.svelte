<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Semantic tone values for Badge */
	export type BadgeTone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
	export type BadgeVariant = 'solid' | 'outline' | 'ghost';
	export type BadgeSize = 'sm' | 'base' | 'lg';

	/** Props interface for Badge component */
	export interface BadgeProps {
		/** Badge text label */
		label?: string;
		/** Visual style variant */
		variant?: BadgeVariant;
		/** Semantic color tone */
		tone?: BadgeTone;
		/** Size variant */
		size?: BadgeSize;
		/** Pill shape (fully rounded) or subtle corners */
		rounded?: boolean;
		/** Slot for custom content */
		children?: any;
	}

	/** Prop definitions for documentation */
	export const propDefs = {
		label: {
			type: 'string',
			default: undefined,
			description: 'Badge text label'
		},
		variant: {
			type: 'string',
			options: ['solid', 'outline', 'ghost'],
			default: 'solid',
			description: 'Visual style variant'
		},
		tone: {
			type: 'string',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
			default: 'primary',
			description: 'Semantic color tone'
		},
		size: {
			type: 'string',
			options: ['sm', 'base', 'lg'],
			default: 'base',
			description: 'Size variant'
		},
		rounded: {
			type: 'boolean',
			default: true,
			description: 'Pill shape (fully rounded) or subtle corners'
		}
	} as const;
</script>

<script lang="ts">
	let {
		label = undefined,
		variant = 'solid',
		tone = 'primary',
		size = 'base',
		rounded = true,
		children
	}: BadgeProps = $props();

	// Color schemes using design tokens
	const toneSchemes: Record<BadgeTone, Record<BadgeVariant, string>> = {
		primary: {
			solid: 'bg-accent text-fg-on-accent',
			outline: 'border border-accent text-accent',
			ghost: 'text-accent'
		},
		secondary: {
			solid: 'bg-secondary text-fg-on-accent',
			outline: 'border border-secondary text-secondary',
			ghost: 'text-secondary'
		},
		success: {
			solid: 'bg-success text-white',
			outline: 'border border-success text-success',
			ghost: 'text-success'
		},
		warning: {
			solid: 'bg-warning text-white',
			outline: 'border border-warning text-warning',
			ghost: 'text-warning'
		},
		danger: {
			solid: 'bg-error text-white',
			outline: 'border border-error text-error',
			ghost: 'text-error'
		},
		neutral: {
			solid: 'bg-fg text-bg',
			outline: 'border border-fg text-fg',
			ghost: 'text-fg'
		}
	};

	let scheme = $derived(toneSchemes[tone][variant]);
	let sizeClasses = $derived(
		size === 'sm'
			? 'px-2 py-0.5 text-xs'
			: size === 'lg'
				? 'px-3 py-1 text-sm'
				: 'px-2.5 py-0.5 text-xs'
	);
	let roundedClass = $derived(rounded ? 'rounded-full' : 'rounded');
	const baseClasses = 'inline-flex items-center font-medium';
	let allClasses = $derived(
		[baseClasses, sizeClasses, roundedClass, scheme].filter(Boolean).join(' ')
	);
</script>

<span class={allClasses}>
	{#if label}
		{label}
	{:else}
		{@render children?.()}
	{/if}
</span>
