<!--
  @component Spacer
  
  A flexible spacing component for creating consistent gaps.
  Can be fixed size or flexible to fill available space.
  
  @example Fixed size
  ```svelte
  <Spacer size="md" />
  ```
  
  @example Flexible (fills space)
  ```svelte
  <div class="flex">
    <span>Left</span>
    <Spacer flex />
    <span>Right</span>
  </div>
  ```
  
  @example Custom size
  ```svelte
  <Spacer size="custom" customSize="2rem" />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Spacer preset size */
	export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'custom'],
			default: 'md',
			description: 'Spacer size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Preset size */
		size?: SpacerSize;
		/** Custom size (CSS value) */
		customSize?: string;
		/** Axis direction */
		axis?: 'horizontal' | 'vertical' | 'both';
		/** Flexible spacer (fills available space) */
		flex?: boolean;
		/** Custom CSS classes */
		class?: string;
	}

	let {
		size = 'md',
		customSize,
		axis = 'vertical',
		flex = false,
		class: className = ''
	}: Props = $props();

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes for vertical axis */
	const verticalSizeClasses: Record<SpacerSize, string> = {
		xs: 'h-1',
		sm: 'h-2',
		md: 'h-4',
		lg: 'h-8',
		xl: 'h-12',
		'2xl': 'h-16',
		custom: ''
	};

	/** Size classes for horizontal axis */
	const horizontalSizeClasses: Record<SpacerSize, string> = {
		xs: 'w-1',
		sm: 'w-2',
		md: 'w-4',
		lg: 'w-8',
		xl: 'w-12',
		'2xl': 'w-16',
		custom: ''
	};

	/** Combined classes */
	const spacerClasses = $derived(() => {
		if (flex) {
			return ['flex-1', className].filter(Boolean).join(' ');
		}

		const classes: string[] = [];

		if (axis === 'vertical' || axis === 'both') {
			classes.push(verticalSizeClasses[size]);
		}
		if (axis === 'horizontal' || axis === 'both') {
			classes.push(horizontalSizeClasses[size]);
		}

		classes.push(className);

		return classes.filter(Boolean).join(' ');
	});

	/** Custom style */
	const customStyle = $derived(() => {
		if (size !== 'custom' || !customSize) return undefined;

		if (axis === 'vertical') return `height: ${customSize}`;
		if (axis === 'horizontal') return `width: ${customSize}`;
		return `height: ${customSize}; width: ${customSize}`;
	});
</script>

<div
	class={spacerClasses()}
	style={customStyle()}
	aria-hidden="true"
	data-size={size}
	data-axis={axis}
></div>
