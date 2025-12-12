<!--
  @component Select
  
  A native select dropdown component with consistent styling.
  Supports single selection with customizable options.
  
  @example Basic usage
  ```svelte
  <Select 
    label="Country"
    options={[
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' }
    ]}
    bind:value={selectedCountry}
  />
  ```
  
  @example With placeholder
  ```svelte
  <Select 
    placeholder="Select an option..."
    options={options}
  />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Select option */
	export interface SelectOption {
		value: string;
		label: string;
		disabled?: boolean;
	}

	/** Select option group */
	export interface SelectOptionGroup {
		label: string;
		options: SelectOption[];
	}

	/** Select visual variant */
	export type SelectVariant = 'outline' | 'filled' | 'ghost';

	/** Select size */
	export type SelectSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		variant: {
			type: 'string',
			options: ['outline', 'filled', 'ghost'],
			default: 'outline',
			description: 'Visual style variant'
		},
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Select size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Options array */
		options: (SelectOption | SelectOptionGroup)[];
		/** Visual variant */
		variant?: SelectVariant;
		/** Size */
		size?: SelectSize;
		/** Current value (bindable) */
		value?: string;
		/** Placeholder text */
		placeholder?: string;
		/** Label text */
		label?: string;
		/** Helper text below select */
		helperText?: string;
		/** Error message */
		error?: string;
		/** Success message */
		success?: string;
		/** Disabled state */
		disabled?: boolean;
		/** Required field */
		required?: boolean;
		/** ID for the select */
		id?: string;
		/** Name attribute */
		name?: string;
		/** Full width */
		fullWidth?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Change event handler */
		onchange?: (event: Event & { currentTarget: HTMLSelectElement }) => void;
		/** Focus event handler */
		onfocus?: (event: FocusEvent) => void;
		/** Blur event handler */
		onblur?: (event: FocusEvent) => void;
	}

	let {
		options,
		variant = 'outline',
		size = 'md',
		value = $bindable(''),
		placeholder,
		label,
		helperText,
		error,
		success,
		disabled = false,
		required = false,
		id,
		name,
		fullWidth = false,
		class: className = '',
		onchange,
		onfocus,
		onblur
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const selectId = $derived(id || `select-${Math.random().toString(36).slice(2, 9)}`);
	const errorId = $derived(`${selectId}-error`);
	const helperId = $derived(`${selectId}-helper`);

	const hasError = $derived(!!error);
	const hasSuccess = $derived(!!success && !hasError);

	/** Check if option is a group */
	function isOptionGroup(option: SelectOption | SelectOptionGroup): option is SelectOptionGroup {
		return 'options' in option;
	}

	// ============================================
	// Style Classes
	// ============================================

	/** Wrapper classes */
	const wrapperClasses = $derived(
		['flex flex-col gap-1.5', fullWidth ? 'w-full' : '', className].filter(Boolean).join(' ')
	);

	/** Label classes */
	const labelClasses = ['text-sm font-medium text-fg', 'leading-none'].join(' ');

	/** Size-specific classes */
	const sizeClasses: Record<SelectSize, string> = {
		sm: 'h-8 px-2.5 pr-8 text-sm',
		md: 'h-10 px-3 pr-10 text-base',
		lg: 'h-12 px-4 pr-12 text-lg'
	};

	/** Variant-specific classes */
	const variantClasses: Record<
		SelectVariant,
		{ base: string; focus: string; error: string; success: string }
	> = {
		outline: {
			base: 'border border-border bg-bg shadow-sm',
			focus: 'focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-0',
			error: 'border-error focus:border-error focus:ring-2 focus:ring-error focus:ring-offset-0',
			success:
				'border-success focus:border-success focus:ring-2 focus:ring-success focus:ring-offset-0'
		},
		filled: {
			base: 'border border-transparent bg-bg-muted',
			focus: 'focus:border-accent focus:ring-2 focus:ring-accent focus:bg-bg focus:ring-offset-0',
			error: 'border-error bg-error-subtle focus:border-error focus:ring-2 focus:ring-error focus:ring-offset-0',
			success:
				'border-success bg-success-subtle focus:border-success focus:ring-2 focus:ring-success focus:ring-offset-0'
		},
		ghost: {
			base: 'border border-transparent bg-transparent',
			focus: 'focus:border-border focus:ring-2 focus:ring-border-focus focus:bg-bg-subtle focus:ring-offset-0',
			error: 'border-error focus:border-error focus:ring-2 focus:ring-error focus:ring-offset-0',
			success:
				'border-success focus:border-success focus:ring-2 focus:ring-success focus:ring-offset-0'
		}
	};

	/** Combined select classes */
	const selectClasses = $derived(() => {
		const v = variantClasses[variant];
		const stateClass = hasError ? v.error : hasSuccess ? v.success : v.focus;
		return [
			'w-full rounded-lg',
			'text-fg',
			'outline-none appearance-none cursor-pointer',
			'transition-all duration-fast ease-standard',
			'disabled:opacity-disabled disabled:cursor-not-allowed disabled:bg-bg-subtle',
			'bg-no-repeat bg-right',
			sizeClasses[size],
			v.base,
			stateClass
		]
			.filter(Boolean)
			.join(' ');
	});

	/** Helper/Error text classes */
	const helperClasses = $derived(
		[
			'text-xs leading-normal',
			hasError ? 'text-error' : hasSuccess ? 'text-success' : 'text-fg-muted'
		].join(' ')
	);

	// ============================================
	// Event Handlers
	// ============================================

	function handleChange(event: Event & { currentTarget: HTMLSelectElement }) {
		value = event.currentTarget.value;
		onchange?.(event);
	}
</script>

<div class={wrapperClasses} data-variant={variant} data-size={size}>
	{#if label}
		<label for={selectId} class={labelClasses}>
			{label}
			{#if required}
				<span class="text-error ml-0.5" aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<div class="relative">
		<select
			id={selectId}
			{name}
			{disabled}
			{required}
			bind:value
			class={selectClasses()}
			aria-describedby={error ? errorId : helperText ? helperId : undefined}
			aria-invalid={hasError ? 'true' : undefined}
			onchange={handleChange}
			{onfocus}
			{onblur}
		>
			{#if placeholder}
				<option value="" disabled selected={!value}>{placeholder}</option>
			{/if}

			{#each options as option}
				{#if isOptionGroup(option)}
					<optgroup label={option.label}>
						{#each option.options as opt}
							<option value={opt.value} disabled={opt.disabled}>
								{opt.label}
							</option>
						{/each}
					</optgroup>
				{:else}
					<option value={option.value} disabled={option.disabled}>
						{option.label}
					</option>
				{/if}
			{/each}
		</select>

		<!-- Chevron icon -->
		<div
			class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-fg-muted"
		>
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
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</div>
	</div>

	{#if error}
		<p id={errorId} class={helperClasses} role="alert">{error}</p>
	{:else if success}
		<p id={helperId} class={helperClasses}>{success}</p>
	{:else if helperText}
		<p id={helperId} class={helperClasses}>{helperText}</p>
	{/if}
</div>
