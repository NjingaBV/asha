<script lang="ts">
	/**
	 * Label component - Small badge/tag for highlighting new products or features
	 *
	 * @example
	 * <Label>New</Label>
	 * <Label color="orange">Limited</Label>
	 */

	interface Props {
		/** Label text */
		text?: string;
		/** Color scheme */
		color?: 'blue' | 'orange' | 'red' | 'green' | 'purple' | 'slate';
		/** Additional CSS classes */
		className?: string;
		/** Slot for content */
		children?: any;
	}

	let { text = undefined, color = 'orange', className = '', children }: Props = $props();

	const getColorClasses = (): string => {
		const colors = {
			blue: 'bg-blue-600 text-white',
			orange: 'bg-orange-600 text-white',
			red: 'bg-red-600 text-white',
			green: 'bg-green-600 text-white',
			purple: 'bg-purple-600 text-white',
			slate: 'bg-slate-600 text-white'
		};
		return colors[color];
	};

	const baseClasses =
		'inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide';

	const labelClasses = $derived(
		[baseClasses, getColorClasses(), className].filter(Boolean).join(' ')
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
