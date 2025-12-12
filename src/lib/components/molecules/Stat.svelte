<!--
  @component Stat
  
  A statistics display component for showing key metrics.
  Ideal for dashboards, landing pages, and data summaries.
  
  @example Basic usage
  ```svelte
  <Stat label="Total Users" value="12,345" />
  ```
  
  @example With change indicator
  ```svelte
  <Stat 
    label="Revenue" 
    value="$45,231"
    change={12.5}
    changeType="increase"
  />
  ```
  
  @example With icon
  ```svelte
  <Stat label="Active" value="89%">
    {#snippet icon()}<ChartIcon />{/snippet}
  </Stat>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Stat size */
	export type StatSize = 'sm' | 'md' | 'lg';

	/** Change type */
	export type StatChangeType = 'increase' | 'decrease' | 'neutral';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Stat size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Stat label/title */
		label: string;
		/** Stat value */
		value: string | number;
		/** Size */
		size?: StatSize;
		/** Change percentage */
		change?: number;
		/** Change type */
		changeType?: StatChangeType;
		/** Help text */
		helpText?: string;
		/** Custom CSS classes */
		class?: string;
		/** Icon slot */
		icon?: Snippet;
	}

	let {
		label,
		value,
		size = 'md',
		change,
		changeType,
		helpText,
		class: className = '',
		icon
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const hasChange = $derived(change !== undefined);
	const computedChangeType = $derived<StatChangeType>(
		changeType ?? (change !== undefined ? (change >= 0 ? 'increase' : 'decrease') : 'neutral')
	);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const labelSizeClasses: Record<StatSize, string> = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base'
	};

	const valueSizeClasses: Record<StatSize, string> = {
		sm: 'text-xl font-bold',
		md: 'text-3xl font-bold',
		lg: 'text-4xl font-bold'
	};

	const changeSizeClasses: Record<StatSize, string> = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base'
	};

	const iconSizeClasses: Record<StatSize, string> = {
		sm: '[&>*]:w-8 [&>*]:h-8',
		md: '[&>*]:w-10 [&>*]:h-10',
		lg: '[&>*]:w-12 [&>*]:h-12'
	};

	/** Change type colors */
	const changeTypeClasses: Record<StatChangeType, string> = {
		increase: 'text-success',
		decrease: 'text-error',
		neutral: 'text-fg-muted'
	};

	/** Container classes */
	const containerClasses = $derived(
		['flex items-start gap-4', className].filter(Boolean).join(' ')
	);
</script>

<div class={containerClasses} data-size={size}>
	{#if icon}
		<div class="{iconSizeClasses[size]} text-fg-muted shrink-0 p-2 bg-bg-muted rounded-lg">
			{@render icon()}
		</div>
	{/if}

	<div class="flex flex-col gap-1">
		<p class="{labelSizeClasses[size]} text-fg-muted font-medium">
			{label}
		</p>

		<div class="flex items-baseline gap-2">
			<p class="{valueSizeClasses[size]} text-fg">
				{value}
			</p>

			{#if hasChange}
				<span
					class="{changeSizeClasses[size]} {changeTypeClasses[
						computedChangeType
					]} font-medium flex items-center gap-0.5"
				>
					{#if computedChangeType === 'increase'}
						<svg
							class="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 17l9.2-9.2M17 17V7H7"
							/>
						</svg>
					{:else if computedChangeType === 'decrease'}
						<svg
							class="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 7l-9.2 9.2M7 7v10h10"
							/>
						</svg>
					{/if}
					{Math.abs(change!)}%
				</span>
			{/if}
		</div>

		{#if helpText}
			<p class="text-xs text-fg-muted">
				{helpText}
			</p>
		{/if}
	</div>
</div>
