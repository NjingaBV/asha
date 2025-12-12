<!--
  @component Skeleton
  
  A loading placeholder component that mimics content layout.
  Use to reduce perceived loading time and layout shift.
  
  @example Basic usage
  ```svelte
  <Skeleton width="200px" height="20px" />
  ```
  
  @example Circle (for avatar)
  ```svelte
  <Skeleton variant="circle" size="48px" />
  ```
  
  @example Text lines
  ```svelte
  <Skeleton variant="text" lines={3} />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Skeleton variant */
	export type SkeletonVariant = 'rectangle' | 'circle' | 'text';

	/** Prop definitions for documentation */
	export const propDefs = {
		variant: {
			type: 'string',
			options: ['rectangle', 'circle', 'text'],
			default: 'rectangle',
			description: 'Skeleton shape'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Shape variant */
		variant?: SkeletonVariant;
		/** Width (CSS value) */
		width?: string;
		/** Height (CSS value) */
		height?: string;
		/** Size for circle variant */
		size?: string;
		/** Border radius */
		rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
		/** Number of text lines */
		lines?: number;
		/** Animate the skeleton */
		animate?: boolean;
		/** Custom CSS classes */
		class?: string;
	}

	let {
		variant = 'rectangle',
		width,
		height,
		size,
		rounded = 'md',
		lines = 1,
		animate = true,
		class: className = ''
	}: Props = $props();

	// ============================================
	// Style Classes
	// ============================================

	/** Border radius classes */
	const roundedClasses: Record<string, string> = {
		none: 'rounded-none',
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		full: 'rounded-full'
	};

	/** Base skeleton classes */
	const baseClasses = ['bg-bg-muted', animate ? 'animate-pulse motion-reduce:animate-none' : '']
		.filter(Boolean)
		.join(' ');

	/** Get classes for a skeleton element */
	function getSkeletonClasses(): string {
		const classes = [baseClasses];

		if (variant === 'circle') {
			classes.push('rounded-full');
		} else if (variant === 'text') {
			classes.push('rounded');
		} else {
			classes.push(roundedClasses[rounded]);
		}

		classes.push(className);

		return classes.filter(Boolean).join(' ');
	}

	/** Get style for a skeleton element */
	function getSkeletonStyle(lineIndex = 0): string {
		const styles: string[] = [];

		if (variant === 'circle' && size) {
			styles.push(`width: ${size}`, `height: ${size}`);
		} else if (variant === 'text') {
			styles.push('height: 1em');
			// Last line is shorter
			if (lineIndex === lines - 1 && lines > 1) {
				styles.push('width: 70%');
			} else {
				styles.push(width ? `width: ${width}` : 'width: 100%');
			}
		} else {
			if (width) styles.push(`width: ${width}`);
			if (height) styles.push(`height: ${height}`);
		}

		return styles.join('; ');
	}
</script>

{#if variant === 'text' && lines > 1}
	<div class="flex flex-col gap-2" role="status" aria-label="Loading...">
		{#each { length: lines }, i}
			<div class={getSkeletonClasses()} style={getSkeletonStyle(i)} aria-hidden="true"></div>
		{/each}
		<span class="sr-only">Loading...</span>
	</div>
{:else}
	<div
		class={getSkeletonClasses()}
		style={getSkeletonStyle()}
		role="status"
		aria-label="Loading..."
	>
		<span class="sr-only">Loading...</span>
	</div>
{/if}
