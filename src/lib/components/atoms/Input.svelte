<!--
  @component Input
  
  A versatile text input component with validation states, icons, and accessibility.
  Integrates with form field patterns and supports various input types.
  Uses XState for robust state management.
  
  @example Basic usage
  ```svelte
  <Input label="Email" type="email" placeholder="you@example.com" />
  ```
  
  @example With validation
  ```svelte
  <Input 
    label="Password" 
    type="password" 
    required
    error="Password must be at least 8 characters"
  />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Input visual variant */
	export type InputVariant = 'outline' | 'filled' | 'ghost';

	/** Input size */
	export type InputSize = 'sm' | 'md' | 'lg';

	/** Supported input types */
	export type InputType =
		| 'text'
		| 'email'
		| 'password'
		| 'number'
		| 'tel'
		| 'url'
		| 'search'
		| 'date'
		| 'time'
		| 'datetime-local';

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
			description: 'Input size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { createActor } from 'xstate';
	import {
		inputMachine,
		getInputDataAttributes,
		getInputAriaAttributes,
		type InputState
	} from '$lib/components/machines/input.machine';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Input type */
		type?: InputType;
		/** Visual variant */
		variant?: InputVariant;
		/** Size */
		size?: InputSize;
		/** Current value (bindable) */
		value?: string;
		/** Placeholder text */
		placeholder?: string;
		/** Label text */
		label?: string;
		/** Helper text below input */
		helperText?: string;
		/** Error message - shows error state when present */
		error?: string;
		/** Success message - shows success state when present */
		success?: string;
		/** Disabled state */
		disabled?: boolean;
		/** Read-only state */
		readonly?: boolean;
		/** Required field */
		required?: boolean;
		/** Autofocus on mount */
		autofocus?: boolean;
		/** Autocomplete attribute */
		autocomplete?: HTMLInputElement['autocomplete'];
		/** ID for the input */
		id?: string;
		/** Name attribute */
		name?: string;
		/** Min value (for number/date) */
		min?: string | number;
		/** Max value (for number/date) */
		max?: string | number;
		/** Min length */
		minlength?: number;
		/** Max length */
		maxlength?: number;
		/** Input pattern */
		pattern?: string;
		/** Step value (for number) */
		step?: string | number;
		/** Full width */
		fullWidth?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Icon slot - appears at start */
		iconLeft?: Snippet;
		/** Icon slot - appears at end */
		iconRight?: Snippet;
		/** Prefix slot - appears before input */
		prefix?: Snippet;
		/** Suffix slot - appears after input */
		suffix?: Snippet;
		/** Input event handler */
		oninput?: (event: Event & { currentTarget: HTMLInputElement }) => void;
		/** Change event handler */
		onchange?: (event: Event & { currentTarget: HTMLInputElement }) => void;
		/** Focus event handler */
		onfocus?: (event: FocusEvent) => void;
		/** Blur event handler */
		onblur?: (event: FocusEvent) => void;
		/** Keydown event handler */
		onkeydown?: (event: KeyboardEvent) => void;
	}

	let {
		type = 'text',
		variant = 'outline',
		size = 'md',
		value = $bindable(''),
		placeholder,
		label,
		helperText,
		error,
		success,
		disabled = false,
		readonly = false,
		required = false,
		autofocus = false,
		autocomplete,
		id,
		name,
		min,
		max,
		minlength,
		maxlength,
		pattern,
		step,
		fullWidth = false,
		class: className = '',
		iconLeft,
		iconRight,
		prefix,
		suffix,
		oninput,
		onchange,
		onfocus,
		onblur,
		onkeydown
	}: Props = $props();

	// ============================================
	// State Machine
	// ============================================

	const actor = createActor(inputMachine);
	actor.start();

	// Subscribe to state changes
	let state = $state(actor.getSnapshot());

	actor.subscribe((snapshot) => {
		state = snapshot;
	});

	// Sync props with machine
	$effect(() => {
		actor.send({ type: 'CHANGE', value });
	});

	$effect(() => {
		if (error) {
			actor.send({ type: 'VALIDATION_ERROR', message: error });
		} else if (success) {
			actor.send({ type: 'VALIDATION_SUCCESS' });
		} else {
			actor.send({ type: 'CLEAR_ERROR' });
		}
	});

	$effect(() => {
		if (disabled) {
			actor.send({ type: 'DISABLE' });
		} else {
			actor.send({ type: 'ENABLE' });
		}
	});

	// Cleanup
	$effect(() => {
		return () => actor.stop();
	});

	// ============================================
	// Derived State
	// ============================================

	const currentState = $derived(state.value as InputState);
	const context = $derived(state.context);

	/** Generate unique ID for accessibility */
	const inputId = $derived(id || `input-${Math.random().toString(36).slice(2, 9)}`);
	const errorId = $derived(`${inputId}-error`);
	const helperId = $derived(`${inputId}-helper`);

	const hasError = $derived(currentState === 'invalid' || !!error);
	const hasSuccess = $derived(currentState === 'valid' || (!!success && !hasError));
	const hasLeftContent = $derived(!!iconLeft || !!prefix);
	const hasRightContent = $derived(!!iconRight || !!suffix);

	const dataAttributes = $derived(getInputDataAttributes(currentState, context));
	const ariaAttributes = $derived(getInputAriaAttributes(currentState, context, errorId));

	// ============================================
	// Style Classes
	// ============================================

	/** Wrapper classes */
	const wrapperClasses = $derived(
		['flex flex-col gap-1.5', fullWidth ? 'w-full' : '', className].filter(Boolean).join(' ')
	);

	/** Label classes */
	const labelClasses = ['text-sm font-medium text-fg', 'leading-none'].join(' ');

	/** Container classes (includes input + icons) */
	const containerBaseClasses = [
		'relative flex items-center',
		'rounded-lg',
		'transition-all duration-fast ease-standard',
		'focus-within:ring-2 focus-within:ring-offset-2'
	].join(' ');

	/** Size-specific container classes */
	const containerSizeClasses: Record<InputSize, string> = {
		sm: 'h-11 min-h-touch text-sm',
		md: 'h-11 min-h-touch text-base',
		lg: 'h-12 min-h-touch text-lg'
	};

	/** Variant-specific container classes */
	const containerVariantClasses: Record<
		InputVariant,
		{ base: string; focus: string; error: string; success: string }
	> = {
		outline: {
			base: 'border border-border bg-bg shadow-sm',
			focus: 'focus-within:border-accent focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-0',
			error: 'border-error focus-within:border-error focus-within:ring-2 focus-within:ring-error focus-within:ring-offset-0',
			success:
				'border-success focus-within:border-success focus-within:ring-2 focus-within:ring-success focus-within:ring-offset-0'
		},
		filled: {
			base: 'border border-transparent bg-bg-muted',
			focus: 'focus-within:border-accent focus-within:ring-2 focus-within:ring-accent focus-within:bg-bg focus-within:ring-offset-0',
			error: 'border-error bg-error-subtle focus-within:border-error focus-within:ring-2 focus-within:ring-error focus-within:ring-offset-0',
			success:
				'border-success bg-success-subtle focus-within:border-success focus-within:ring-2 focus-within:ring-success focus-within:ring-offset-0'
		},
		ghost: {
			base: 'border border-transparent bg-transparent',
			focus: 'focus-within:border-border focus-within:ring-2 focus-within:ring-border-focus focus-within:bg-bg-subtle focus-within:ring-offset-0',
			error: 'border-error focus-within:border-error focus-within:ring-2 focus-within:ring-error focus-within:ring-offset-0',
			success:
				'border-success focus-within:border-success focus-within:ring-2 focus-within:ring-success focus-within:ring-offset-0'
		}
	};

	/** Combined container classes */
	const containerClasses = $derived(() => {
		const v = containerVariantClasses[variant];
		const stateClass = hasError ? v.error : hasSuccess ? v.success : v.focus;
		return [
			containerBaseClasses,
			containerSizeClasses[size],
			v.base,
			stateClass,
			disabled ? 'opacity-disabled cursor-not-allowed bg-bg-subtle' : ''
		]
			.filter(Boolean)
			.join(' ');
	});

	/** Input element classes */
	const inputClasses = $derived(
		[
			'w-full h-full',
			'bg-transparent',
			'text-fg placeholder:text-fg-subtle',
			'outline-none border-none',
			'disabled:cursor-not-allowed',
			hasLeftContent ? 'pl-1' : 'pl-3',
			hasRightContent ? 'pr-1' : 'pr-3'
		].join(' ')
	);

	/** Icon wrapper classes */
	const iconWrapperClasses = 'flex items-center justify-center shrink-0 text-fg-muted';
	const iconSizeClasses: Record<InputSize, string> = {
		sm: 'w-11 h-11',
		md: 'w-11 h-11',
		lg: 'w-12 h-12'
	};

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

	function handleInput(event: Event & { currentTarget: HTMLInputElement }) {
		value = event.currentTarget.value;
		actor.send({ type: 'CHANGE', value });
		oninput?.(event);
	}

	function handleFocus(event: FocusEvent) {
		actor.send({ type: 'FOCUS' });
		onfocus?.(event);
	}

	function handleBlur(event: FocusEvent) {
		actor.send({ type: 'BLUR' });
		onblur?.(event);
	}
</script>

<div class={wrapperClasses} data-variant={variant} data-size={size} {...dataAttributes}>
	{#if label}
		<label for={inputId} class={labelClasses}>
			{label}
			{#if required}
				<span class="text-error ml-0.5" aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<div class={containerClasses()} data-disabled={disabled ? '' : undefined}>
		{#if iconLeft}
			<span class="{iconWrapperClasses} {iconSizeClasses[size]}" aria-hidden="true">
				{@render iconLeft()}
			</span>
		{/if}

		{#if prefix}
			<span class="flex items-center pl-3 text-fg-muted shrink-0">
				{@render prefix()}
			</span>
		{/if}

		<input
			{type}
			id={inputId}
			{name}
			{placeholder}
			{disabled}
			{readonly}
			{required}
			{autofocus}
			{autocomplete}
			{min}
			{max}
			{minlength}
			{maxlength}
			{pattern}
			{step}
			bind:value
			class={inputClasses}
			aria-describedby={error ? errorId : helperText ? helperId : undefined}
			oninput={handleInput}
			{onchange}
			onfocus={handleFocus}
			onblur={handleBlur}
			{onkeydown}
			{...ariaAttributes}
		/>

		{#if suffix}
			<span class="flex items-center pr-3 text-fg-muted shrink-0">
				{@render suffix()}
			</span>
		{/if}

		{#if iconRight}
			<span class="{iconWrapperClasses} {iconSizeClasses[size]}" aria-hidden="true">
				{@render iconRight()}
			</span>
		{/if}
	</div>

	{#if error}
		<p id={errorId} class={helperClasses} role="alert">
			{error}
		</p>
	{:else if success}
		<p id={helperId} class={helperClasses}>
			{success}
		</p>
	{:else if helperText}
		<p id={helperId} class={helperClasses}>
			{helperText}
		</p>
	{/if}
</div>
