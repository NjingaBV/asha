<script lang="ts">
	/**
	 * Divider component - Visual separator with optional label
	 *
	 * @example
	 * <Divider />
	 * <Divider orientation="vertical" />
	 * <Divider label="OR" />
	 */

	export type DividerOrientation = 'horizontal' | 'vertical';
	export type DividerVariant = 'solid' | 'dashed' | 'dotted';

	interface Props {
		/** Divider orientation */
		orientation?: DividerOrientation;
		/** Divider style variant */
		variant?: DividerVariant;
		/** Optional label text */
		label?: string;
		/** Spacing around divider */
		spacing?: 'sm' | 'md' | 'lg';
		/** Additional CSS classes */
		class?: string;
	}

	let {
		orientation = 'horizontal',
		variant = 'solid',
		label = undefined,
		spacing = 'md',
		class: className = ''
	}: Props = $props();

	/**
	 * Get spacing classes
	 */
	const getSpacingClasses = (): string => {
		const spacingMap = {
			sm: orientation === 'horizontal' ? 'my-2' : 'mx-2',
			md: orientation === 'horizontal' ? 'my-4' : 'mx-4',
			lg: orientation === 'horizontal' ? 'my-6' : 'mx-6'
		};
		return spacingMap[spacing];
	};

	/**
	 * Get border style
	 */
	const getBorderStyle = (): string => {
		const styles = {
			solid: 'border-solid',
			dashed: 'border-dashed',
			dotted: 'border-dotted'
		};
		return styles[variant];
	};

	/**
	 * Base divider classes
	 */
	const getDividerClasses = (): string => {
		if (orientation === 'vertical') {
			return [
				'inline-block',
				'h-auto',
				'min-h-[1em]',
				'border-l',
				'border-border',
				getBorderStyle()
			].join(' ');
		}
		return ['w-full', 'border-t', 'border-border', getBorderStyle()].join(' ');
	};

	/**
	 * Container classes
	 */
	const containerClasses = $derived(
		[
			orientation === 'horizontal' && label ? 'flex items-center' : '',
			getSpacingClasses(),
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/**
	 * Label classes
	 */
	const labelClasses = 'px-3 text-sm text-text-muted whitespace-nowrap';
</script>

{#if label && orientation === 'horizontal'}
	<div class={containerClasses} role="separator" aria-orientation={orientation}>
		<div class={getDividerClasses()} style="flex: 1"></div>
		<span class={labelClasses}>{label}</span>
		<div class={getDividerClasses()} style="flex: 1"></div>
	</div>
{:else}
	<div
		class={`${getDividerClasses()} ${containerClasses}`}
		role="separator"
		aria-orientation={orientation}
	></div>
{/if}
