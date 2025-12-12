<!--
  @component Rating
  
  A star rating display component with support for half-stars and custom icons.
  Can be interactive or read-only.
  
  @example Basic display
  ```svelte
  <Rating value={4.5} />
  ```
  
  @example Interactive
  ```svelte
  <Rating bind:value={userRating} interactive />
  ```
  
  @example With count
  ```svelte
  <Rating value={4.2} count={128} />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Rating size */
	export type RatingSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Rating size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Current value (0-5, bindable) */
		value?: number;
		/** Maximum stars */
		max?: number;
		/** Size */
		size?: RatingSize;
		/** Interactive mode */
		interactive?: boolean;
		/** Allow half stars in interactive mode */
		allowHalf?: boolean;
		/** Show numeric value */
		showValue?: boolean;
		/** Review count to display */
		count?: number;
		/** Disabled state */
		disabled?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Change handler */
		onchange?: (value: number) => void;
	}

	let {
		value = $bindable(0),
		max = 5,
		size = 'md',
		interactive = false,
		allowHalf = true,
		showValue = false,
		count,
		disabled = false,
		class: className = '',
		onchange
	}: Props = $props();

	// ============================================
	// State
	// ============================================

	let hoverValue = $state<number | null>(null);

	// ============================================
	// Derived State
	// ============================================

	const displayValue = $derived(hoverValue ?? value);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const sizeClasses: Record<RatingSize, string> = {
		sm: 'gap-0.5',
		md: 'gap-1',
		lg: 'gap-1.5'
	};

	/** Star size classes */
	const starSizeClasses: Record<RatingSize, string> = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6'
	};

	/** Text size classes */
	const textSizeClasses: Record<RatingSize, string> = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base'
	};

	/** Container classes */
	const containerClasses = $derived(
		[
			'inline-flex items-center',
			sizeClasses[size],
			interactive && !disabled ? 'cursor-pointer' : '',
			disabled ? 'opacity-disabled cursor-not-allowed' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	// ============================================
	// Helpers
	// ============================================

	function getStarFill(index: number): 'full' | 'half' | 'empty' {
		const starValue = index + 1;
		if (displayValue >= starValue) return 'full';
		if (displayValue >= starValue - 0.5) return 'half';
		return 'empty';
	}

	// ============================================
	// Event Handlers
	// ============================================

	function handleStarClick(index: number, event: MouseEvent) {
		if (!interactive || disabled) return;

		const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
		const x = event.clientX - rect.left;
		const isHalf = allowHalf && x < rect.width / 2;

		const newValue = isHalf ? index + 0.5 : index + 1;
		value = newValue;
		onchange?.(newValue);
	}

	function handleStarHover(index: number, event: MouseEvent) {
		if (!interactive || disabled) return;

		const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
		const x = event.clientX - rect.left;
		const isHalf = allowHalf && x < rect.width / 2;

		hoverValue = isHalf ? index + 0.5 : index + 1;
	}

	function handleMouseLeave() {
		hoverValue = null;
	}
</script>

<div
	class={containerClasses}
	role={interactive ? 'slider' : 'img'}
	aria-label={`Rating: ${value} out of ${max} stars`}
	aria-valuemin={0}
	aria-valuemax={max}
	aria-valuenow={value}
	data-size={size}
	onmouseleave={handleMouseLeave}
>
	<div class="flex {sizeClasses[size]}">
		{#each { length: max }, index}
			{@const fill = getStarFill(index)}
			<button
				type="button"
				class="relative {starSizeClasses[
					size
				]} text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
				tabindex={interactive && !disabled ? 0 : -1}
				disabled={!interactive || disabled}
				onclick={(e) => handleStarClick(index, e)}
				onmousemove={(e) => handleStarHover(index, e)}
				aria-label={`${index + 1} star${index + 1 > 1 ? 's' : ''}`}
			>
				<!-- Empty star (background) -->
				<svg
					class="absolute inset-0 {starSizeClasses[size]} text-border"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
					/>
				</svg>

				<!-- Filled star -->
				{#if fill === 'full'}
					<svg
						class="relative {starSizeClasses[size]}"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
						/>
					</svg>
				{:else if fill === 'half'}
					<svg
						class="relative {starSizeClasses[size]}"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<defs>
							<linearGradient id="half-{index}">
								<stop offset="50%" stop-color="currentColor" />
								<stop offset="50%" stop-color="transparent" />
							</linearGradient>
						</defs>
						<path
							fill="url(#half-{index})"
							d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
						/>
					</svg>
				{/if}
			</button>
		{/each}
	</div>

	{#if showValue}
		<span class="{textSizeClasses[size]} text-fg font-medium ml-1">
			{value.toFixed(1)}
		</span>
	{/if}

	{#if count !== undefined}
		<span class="{textSizeClasses[size]} text-fg-muted">
			({count.toLocaleString()})
		</span>
	{/if}
</div>
