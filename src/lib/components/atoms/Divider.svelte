<!--
  @component Divider
  
  A visual separator component for dividing content sections.
  Supports horizontal and vertical orientations.
  
  @example Basic usage
  ```svelte
  <Divider />
  ```
  
  @example With label
  ```svelte
  <Divider label="OR" />
  ```
  
  @example Vertical
  ```svelte
  <Divider orientation="vertical" />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Divider orientation */
	export type DividerOrientation = 'horizontal' | 'vertical';

	/** Divider variant */
	export type DividerVariant = 'solid' | 'dashed' | 'dotted';

	/** Divider thickness */
	export type DividerThickness = 'thin' | 'medium' | 'thick';

	/** Prop definitions for documentation */
	export const propDefs = {
		orientation: {
			type: 'string',
			options: ['horizontal', 'vertical'],
			default: 'horizontal',
			description: 'Divider orientation'
		},
		variant: {
			type: 'string',
			options: ['solid', 'dashed', 'dotted'],
			default: 'solid',
			description: 'Line style'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Orientation */
		orientation?: DividerOrientation;
		/** Line variant */
		variant?: DividerVariant;
		/** Line thickness */
		thickness?: DividerThickness;
		/** Label text (only for horizontal) */
		label?: string;
		/** Custom CSS classes */
		class?: string;
	}

	let {
		orientation = 'horizontal',
		thickness = 'thin',
		label,
		class: className = ''
	}: Props = $props();

	// ============================================
	// Style Classes
	// ============================================

	/** Thickness classes */
	const thicknessClasses: Record<DividerThickness, string> = {
		thin: orientation === 'horizontal' ? 'h-px' : 'w-px',
		medium: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
		thick: orientation === 'horizontal' ? 'h-1' : 'w-1'
	};

	/** Base divider classes */
	const dividerClasses = $derived(() => {
		if (label && orientation === 'horizontal') {
			return ['flex items-center gap-4', 'w-full', className].filter(Boolean).join(' ');
		}

		return [
			'bg-border',
			orientation === 'horizontal' ? 'w-full' : 'h-full',
			thicknessClasses[thickness],
			className
		]
			.filter(Boolean)
			.join(' ');
	});

	/** Line classes for labeled divider */
	const lineClasses = ['flex-1 bg-border', 'h-px'].join(' ');
</script>

{#if label && orientation === 'horizontal'}
	<div class={dividerClasses()} role="separator" aria-orientation={orientation}>
		<div class={lineClasses}></div>
		<span class="text-sm text-fg-muted font-medium shrink-0">{label}</span>
		<div class={lineClasses}></div>
	</div>
{:else}
	<div class={dividerClasses()} role="separator" aria-orientation={orientation}></div>
{/if}
