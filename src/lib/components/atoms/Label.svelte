<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Semantic tone values */
	export type LabelTone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';

	/** Props interface for Label component */
	export interface LabelProps {
		/** Label text */
		text?: string;
		/** Semantic color tone */
		tone?: LabelTone;
		/** Additional CSS classes */
		class?: string;
		/** Slot for content */
		children?: any;
	}

	/** Prop definitions for documentation */
	export const propDefs = {
		text: {
			type: 'string',
			default: undefined,
			description: 'Label text'
		},
		tone: {
			type: 'string',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
			default: 'warning',
			description: 'Semantic color tone'
		},
		class: {
			type: 'string',
			default: '',
			description: 'Additional CSS classes'
		}
	} as const;
</script>

<script lang="ts">
	/**
	 * Label component - Small badge/tag for highlighting new products or features
	 *
	 * @example
	 * <Label>New</Label>
	 * <Label tone="warning">Limited</Label>
	 */

	let {
		text = undefined,
		tone = 'warning',
		class: className = '',
		children
	}: LabelProps = $props();

	const getToneClasses = (): string => {
		const tones = {
			primary: 'bg-accent text-fg-on-accent',
			secondary: 'bg-secondary text-fg-on-accent',
			success: 'bg-success text-white',
			warning: 'bg-warning text-white',
			danger: 'bg-error text-white',
			neutral: 'bg-fg-muted text-white'
		};
		return tones[tone];
	};

	const baseClasses =
		'inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide';

	const labelClasses = $derived(
		[baseClasses, getToneClasses(), className].filter(Boolean).join(' ')
	);
</script>

<span class={labelClasses}>
	{#if text}
		{text}
	{:else if children}
		{children}
	{:else}
		New
	{/if}
</span>
