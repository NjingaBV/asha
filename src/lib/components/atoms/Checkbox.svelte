<!--
  @component Checkbox
  
  A checkbox input component for boolean selections.
  Supports indeterminate state and custom styling.
  
  @example Basic usage
  ```svelte
  <Checkbox bind:checked={agreed} label="I agree to terms" />
  ```
  
  @example Indeterminate
  ```svelte
  <Checkbox indeterminate label="Select all" />
  ```
  
  @example With description
  ```svelte
  <Checkbox 
    label="Newsletter" 
    description="Receive weekly updates"
  />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Checkbox size */
	export type CheckboxSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Checkbox size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Checked state (bindable) */
		checked?: boolean;
		/** Indeterminate state */
		indeterminate?: boolean;
		/** Size */
		size?: CheckboxSize;
		/** Disabled state */
		disabled?: boolean;
		/** Label text */
		label?: string;
		/** Description text */
		description?: string;
		/** Error message */
		error?: string;
		/** Required field */
		required?: boolean;
		/** ID for the checkbox */
		id?: string;
		/** Name attribute */
		name?: string;
		/** Value attribute */
		value?: string;
		/** Custom CSS classes */
		class?: string;
		/** Change event handler */
		onchange?: (checked: boolean) => void;
	}

	let {
		checked = $bindable(false),
		indeterminate = false,
		size = 'md',
		disabled = false,
		label,
		description,
		error,
		required = false,
		id,
		name,
		value,
		class: className = '',
		onchange
	}: Props = $props();

	// ============================================
	// Refs
	// ============================================

	let inputRef: HTMLInputElement | undefined = $state();

	// ============================================
	// Effects
	// ============================================

	$effect(() => {
		if (inputRef) {
			inputRef.indeterminate = indeterminate;
		}
	});

	// ============================================
	// Derived State
	// ============================================

	const checkboxId = $derived(id || `checkbox-${Math.random().toString(36).slice(2, 9)}`);
	const hasError = $derived(!!error);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes for checkbox */
	const boxSizeClasses: Record<CheckboxSize, string> = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6'
	};

	/** Size classes for checkmark icon */
	const iconSizeClasses: Record<CheckboxSize, string> = {
		sm: 'w-3 h-3',
		md: 'w-3.5 h-3.5',
		lg: 'w-4 h-4'
	};

	/** Label size classes */
	const labelSizeClasses: Record<CheckboxSize, string> = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	};

	/** Wrapper classes */
	const wrapperClasses = $derived(
		['inline-flex items-start gap-2', className].filter(Boolean).join(' ')
	);

	/** Checkbox visual classes */
	const checkboxClasses = $derived(
		[
			'relative shrink-0',
			'rounded border-2 cursor-pointer',
			'transition-all duration-fast ease-standard',
			'focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2',
			boxSizeClasses[size],
			checked || indeterminate
				? 'bg-accent border-accent text-fg-on-accent'
				: 'bg-bg border-border',
			hasError ? 'border-error' : '',
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

	function handleChange(event: Event & { currentTarget: HTMLInputElement }) {
		if (disabled) return;
		checked = event.currentTarget.checked;
		onchange?.(checked);
	}
</script>

<div class={wrapperClasses}>
	<div class={checkboxClasses}>
		<input
			bind:this={inputRef}
			type="checkbox"
			id={checkboxId}
			{name}
			{value}
			{disabled}
			{required}
			bind:checked
			class="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
			aria-invalid={hasError ? 'true' : undefined}
			aria-describedby={error
				? `${checkboxId}-error`
				: description
					? `${checkboxId}-desc`
					: undefined}
			onchange={handleChange}
		/>

		{#if checked}
			<!-- Checkmark icon -->
			<svg
				class="absolute inset-0 m-auto {iconSizeClasses[size]}"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="3"
					d="M5 13l4 4L19 7"
				/>
			</svg>
		{:else if indeterminate}
			<!-- Indeterminate icon (minus) -->
			<svg
				class="absolute inset-0 m-auto {iconSizeClasses[size]}"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="3"
					d="M5 12h14"
				/>
			</svg>
		{/if}
	</div>

	{#if label || description || error}
		<div class="flex flex-col gap-0.5">
			{#if label}
				<label for={checkboxId} class={labelClasses}>
					{label}
					{#if required}
						<span class="text-error ml-0.5" aria-hidden="true">*</span>
					{/if}
				</label>
			{/if}

			{#if description && !error}
				<p id="{checkboxId}-desc" class="text-sm text-fg-muted">
					{description}
				</p>
			{/if}

			{#if error}
				<p id="{checkboxId}-error" class="text-sm text-error" role="alert">
					{error}
				</p>
			{/if}
		</div>
	{/if}
</div>
