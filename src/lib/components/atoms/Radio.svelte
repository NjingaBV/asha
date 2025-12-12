<!--
  @component Radio
  
  A radio button input component for single selection from a group.
  Should be used within a RadioGroup for proper accessibility.
  
  @example Basic usage
  ```svelte
  <Radio name="size" value="sm" label="Small" />
  <Radio name="size" value="md" label="Medium" />
  <Radio name="size" value="lg" label="Large" />
  ```
  
  @example With description
  ```svelte
  <Radio 
    name="plan"
    value="pro"
    label="Pro Plan" 
    description="Best for professionals"
  />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Radio size */
	export type RadioSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Radio size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Radio group name (required for grouping) */
		name: string;
		/** Radio value */
		value: string;
		/** Currently selected value in the group (bindable) */
		group?: string;
		/** Size */
		size?: RadioSize;
		/** Disabled state */
		disabled?: boolean;
		/** Label text */
		label?: string;
		/** Description text */
		description?: string;
		/** Error state */
		error?: boolean;
		/** Required field */
		required?: boolean;
		/** ID for the radio */
		id?: string;
		/** Custom CSS classes */
		class?: string;
		/** Change event handler */
		onchange?: (value: string) => void;
	}

	let {
		name,
		value,
		group = $bindable(''),
		size = 'md',
		disabled = false,
		label,
		description,
		error = false,
		required = false,
		id,
		class: className = '',
		onchange
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const radioId = $derived(id || `radio-${Math.random().toString(36).slice(2, 9)}`);
	const isChecked = $derived(group === value);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes for radio */
	const radioSizeClasses: Record<RadioSize, string> = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6'
	};

	/** Inner dot size classes */
	const dotSizeClasses: Record<RadioSize, string> = {
		sm: 'w-1.5 h-1.5',
		md: 'w-2 h-2',
		lg: 'w-2.5 h-2.5'
	};

	/** Label size classes */
	const labelSizeClasses: Record<RadioSize, string> = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	};

	/** Wrapper classes */
	const wrapperClasses = $derived(
		['inline-flex items-start gap-2', className].filter(Boolean).join(' ')
	);

	/** Radio visual classes */
	const radioClasses = $derived(
		[
			'relative shrink-0',
			'rounded-full border-2 cursor-pointer',
			'transition-all duration-fast ease-standard',
			'focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2',
			'flex items-center justify-center',
			radioSizeClasses[size],
			isChecked ? 'bg-accent border-accent' : 'bg-bg border-border',
			error ? 'border-error' : '',
			disabled ? 'opacity-disabled cursor-not-allowed' : 'hover:border-accent'
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Label classes */
	const labelClasses = $derived(
		[
			'font-medium text-fg cursor-pointer select-none',
			labelSizeClasses[size],
			disabled ? 'opacity-disabled cursor-not-allowed' : ''
		]
			.filter(Boolean)
			.join(' ')
	);

	// ============================================
	// Event Handlers
	// ============================================

	function handleChange() {
		if (disabled) return;
		group = value;
		onchange?.(value);
	}
</script>

<div class={wrapperClasses}>
	<div class={radioClasses}>
		<input
			type="radio"
			id={radioId}
			{name}
			{value}
			{disabled}
			{required}
			checked={isChecked}
			class="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
			aria-describedby={description ? `${radioId}-desc` : undefined}
			onchange={handleChange}
		/>

		{#if isChecked}
			<span class="{dotSizeClasses[size]} rounded-full bg-fg-on-accent" aria-hidden="true"
			></span>
		{/if}
	</div>

	{#if label || description}
		<div class="flex flex-col gap-0.5">
			{#if label}
				<label for={radioId} class={labelClasses}>
					{label}
					{#if required}
						<span class="text-error ml-0.5" aria-hidden="true">*</span>
					{/if}
				</label>
			{/if}

			{#if description}
				<p id="{radioId}-desc" class="text-sm text-fg-muted">
					{description}
				</p>
			{/if}
		</div>
	{/if}
</div>
